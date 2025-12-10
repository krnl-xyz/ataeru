// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/pools/VerificationPool.sol";
import "../src/pool.sol";

contract VerificationPoolTest is Test {
    VerificationPool public verifyPool;
    Pool public mainPool;

    address public owner;
    address public verifier1;
    address public verifier2;
    address public verifier3;
    address public auditor1;
    address public requester1;
    address public requester2;

    bytes32 public poolId;
    uint256 public threshold = 2;

    event VerificationRequested(
        bytes32 indexed requestId, address indexed requester, VerificationPool.VerificationType indexed verificationType
    );

    event VerifierApproved(bytes32 indexed requestId, address indexed verifier, uint256 approvalCount);

    event VerifierRejected(bytes32 indexed requestId, address indexed verifier, string comment);

    event VerificationCompleted(bytes32 indexed requestId, VerificationPool.VerificationStatus status);

    event VerifierAdded(address indexed verifier);
    event VerifierRemoved(address indexed verifier);
    event ThresholdUpdated(uint256 oldThreshold, uint256 newThreshold);

    function setUp() public {
        owner = address(this);
        verifier1 = makeAddr("verifier1");
        verifier2 = makeAddr("verifier2");
        verifier3 = makeAddr("verifier3");
        auditor1 = makeAddr("auditor1");
        requester1 = makeAddr("requester1");
        requester2 = makeAddr("requester2");

        mainPool = new Pool();
        mainPool.initialize();

        poolId = keccak256("verification-pool");

        verifyPool = new VerificationPool();
        verifyPool.initialize(address(mainPool), poolId, threshold);

        verifyPool.addVerifier(verifier1);
        verifyPool.addVerifier(verifier2);
        verifyPool.addVerifier(verifier3);
        verifyPool.addAuditor(auditor1);
    }

    function testInitialization() public view {
        assertEq(verifyPool.mainPoolContract(), address(mainPool));
        assertEq(verifyPool.poolId(), poolId);
        assertEq(verifyPool.verificationThreshold(), threshold);
        assertTrue(verifyPool.hasRole(verifyPool.DEFAULT_ADMIN_ROLE(), owner));
    }

    function testSubmitVerificationRequest() public {
        bytes32 dataHash = keccak256("sensitive-data");
        string memory metadata = "Identity verification for user";
        string[] memory evidenceURIs = new string[](2);
        evidenceURIs[0] = "ipfs://evidence1";
        evidenceURIs[1] = "ipfs://evidence2";

        vm.startPrank(requester1);

        bytes32 requestId = verifyPool.submitVerificationRequest(
            VerificationPool.VerificationType.IDENTITY, dataHash, metadata, evidenceURIs
        );

        vm.stopPrank();

        (
            address requester,
            VerificationPool.VerificationType verificationType,
            VerificationPool.VerificationStatus status,
            uint256 approvalCount,
            uint256 rejectionCount,
            uint256 expiresAt
        ) = verifyPool.getRequestDetails(requestId);

        assertEq(requester, requester1);
        assertTrue(verificationType == VerificationPool.VerificationType.IDENTITY);
        assertTrue(status == VerificationPool.VerificationStatus.PENDING);
        assertEq(approvalCount, 0);
        assertEq(rejectionCount, 0);
        assertGt(expiresAt, block.timestamp);
    }

    function testSubmitVerificationRequestFailsWithZeroHash() public {
        string memory metadata = "Verification metadata";
        string[] memory evidenceURIs = new string[](1);
        evidenceURIs[0] = "ipfs://evidence";

        vm.startPrank(requester1);
        vm.expectRevert("Data hash required");
        verifyPool.submitVerificationRequest(
            VerificationPool.VerificationType.IDENTITY, bytes32(0), metadata, evidenceURIs
        );
        vm.stopPrank();
    }

    function testSubmitVerificationRequestFailsWithEmptyMetadata() public {
        bytes32 dataHash = keccak256("data");
        string[] memory evidenceURIs = new string[](1);
        evidenceURIs[0] = "ipfs://evidence";

        vm.startPrank(requester1);
        vm.expectRevert("Metadata required");
        verifyPool.submitVerificationRequest(VerificationPool.VerificationType.IDENTITY, dataHash, "", evidenceURIs);
        vm.stopPrank();
    }

    function testApproveVerification() public {
        vm.prank(requester1);
        bytes32 requestId = verifyPool.submitVerificationRequest(
            VerificationPool.VerificationType.DOCUMENT, keccak256("document"), "Document verification", new string[](0)
        );

        vm.startPrank(verifier1);

        vm.expectEmit(true, true, false, true);
        emit VerifierApproved(requestId, verifier1, 1);

        verifyPool.approveVerification(requestId, "Approved: Documents valid");
        vm.stopPrank();

        (,, VerificationPool.VerificationStatus status, uint256 approvalCount,,) =
            verifyPool.getRequestDetails(requestId);

        assertTrue(status == VerificationPool.VerificationStatus.IN_PROGRESS);
        assertEq(approvalCount, 1);
    }

    function testApproveVerificationFailsForNonVerifier() public {
        vm.prank(requester1);
        bytes32 requestId = verifyPool.submitVerificationRequest(
            VerificationPool.VerificationType.DOCUMENT, keccak256("document"), "Document verification", new string[](0)
        );

        address nonVerifier = makeAddr("nonVerifier");
        vm.startPrank(nonVerifier);
        vm.expectRevert();
        verifyPool.approveVerification(requestId, "Comment");
        vm.stopPrank();
    }

    function testApproveVerificationFailsForDuplicateVote() public {
        vm.prank(requester1);
        bytes32 requestId = verifyPool.submitVerificationRequest(
            VerificationPool.VerificationType.DOCUMENT, keccak256("document"), "Document verification", new string[](0)
        );

        vm.startPrank(verifier1);
        verifyPool.approveVerification(requestId, "Approved");

        vm.expectRevert("Already voted");
        verifyPool.approveVerification(requestId, "Approved again");
        vm.stopPrank();
    }

    function testRejectVerification() public {
        vm.prank(requester1);
        bytes32 requestId = verifyPool.submitVerificationRequest(
            VerificationPool.VerificationType.CREDENTIAL,
            keccak256("credential"),
            "Credential verification",
            new string[](0)
        );

        vm.startPrank(verifier1);

        vm.expectEmit(true, true, false, true);
        emit VerifierRejected(requestId, verifier1, "Invalid credential format");

        verifyPool.rejectVerification(requestId, "Invalid credential format");
        vm.stopPrank();

        (,,,, uint256 rejectionCount,) = verifyPool.getRequestDetails(requestId);
        assertEq(rejectionCount, 1);
    }

    function testCompleteVerificationAfterThreshold() public {
        vm.prank(requester1);
        bytes32 requestId = verifyPool.submitVerificationRequest(
            VerificationPool.VerificationType.IDENTITY, keccak256("identity"), "Identity verification", new string[](0)
        );

        vm.prank(verifier1);
        verifyPool.approveVerification(requestId, "Approved by verifier 1");

        vm.startPrank(verifier2);

        vm.expectEmit(true, false, false, true);
        emit VerificationCompleted(requestId, VerificationPool.VerificationStatus.VERIFIED);

        verifyPool.approveVerification(requestId, "Approved by verifier 2");
        vm.stopPrank();

        (,, VerificationPool.VerificationStatus status,,,) = verifyPool.getRequestDetails(requestId);
        assertTrue(status == VerificationPool.VerificationStatus.VERIFIED);
    }

    function testAutoRejectWhenThresholdImpossible() public {
        vm.prank(requester1);
        bytes32 requestId = verifyPool.submitVerificationRequest(
            VerificationPool.VerificationType.COMPLIANCE, keccak256("compliance"), "Compliance check", new string[](0)
        );

        vm.prank(verifier1);
        verifyPool.rejectVerification(requestId, "Non-compliant");

        vm.startPrank(verifier2);

        vm.expectEmit(true, false, false, true);
        emit VerificationCompleted(requestId, VerificationPool.VerificationStatus.REJECTED);

        verifyPool.rejectVerification(requestId, "Non-compliant");
        vm.stopPrank();

        (,, VerificationPool.VerificationStatus status,,,) = verifyPool.getRequestDetails(requestId);
        assertTrue(status == VerificationPool.VerificationStatus.REJECTED);
    }

    function testVerifierStats() public {
        vm.prank(requester1);
        bytes32 requestId = verifyPool.submitVerificationRequest(
            VerificationPool.VerificationType.IDENTITY, keccak256("identity"), "Identity verification", new string[](0)
        );

        (uint256 totalBefore, uint256 approvedBefore,, uint256 repBefore,) = verifyPool.getVerifierStats(verifier1);

        assertEq(totalBefore, 0);
        assertEq(approvedBefore, 0);
        assertEq(repBefore, 100);

        vm.prank(verifier1);
        verifyPool.approveVerification(requestId, "Approved");

        (uint256 totalAfter, uint256 approvedAfter,, uint256 repAfter, bool isActive) =
            verifyPool.getVerifierStats(verifier1);

        assertEq(totalAfter, 1);
        assertEq(approvedAfter, 1);
        assertEq(repAfter, 110); // 100 + 10 for approval
        assertTrue(isActive);
    }

    function testVerifierReputationIncreaseOnRejection() public {
        vm.prank(requester1);
        bytes32 requestId = verifyPool.submitVerificationRequest(
            VerificationPool.VerificationType.DOCUMENT, keccak256("document"), "Document verification", new string[](0)
        );

        (uint256 totalBefore,,, uint256 repBefore,) = verifyPool.getVerifierStats(verifier1);

        assertEq(repBefore, 100);

        vm.prank(verifier1);
        verifyPool.rejectVerification(requestId, "Invalid");

        (uint256 totalAfter,, uint256 rejectedAfter, uint256 repAfter,) = verifyPool.getVerifierStats(verifier1);

        assertEq(totalAfter, 1);
        assertEq(rejectedAfter, 1);
        assertEq(repAfter, 105); // 100 + 5 for rejection
    }

    function testGetVerifierComment() public {
        vm.prank(requester1);
        bytes32 requestId = verifyPool.submitVerificationRequest(
            VerificationPool.VerificationType.IDENTITY, keccak256("identity"), "Identity verification", new string[](0)
        );

        string memory comment = "Verified successfully";

        vm.prank(verifier1);
        verifyPool.approveVerification(requestId, comment);

        string memory storedComment = verifyPool.getVerifierComment(requestId, verifier1);
        assertEq(storedComment, comment);
    }

    function testAddVerifier() public {
        address newVerifier = makeAddr("newVerifier");

        assertFalse(verifyPool.hasRole(verifyPool.VERIFIER_ROLE(), newVerifier));

        vm.expectEmit(true, false, false, false);
        emit VerifierAdded(newVerifier);

        verifyPool.addVerifier(newVerifier);

        assertTrue(verifyPool.hasRole(verifyPool.VERIFIER_ROLE(), newVerifier));

        (uint256 total, uint256 approved, uint256 rejected, uint256 rep, bool isActive) =
            verifyPool.getVerifierStats(newVerifier);

        assertEq(total, 0);
        assertEq(approved, 0);
        assertEq(rejected, 0);
        assertEq(rep, 100);
        assertTrue(isActive);
    }

    function testAddVerifierFailsForDuplicate() public {
        vm.expectRevert("Already a verifier");
        verifyPool.addVerifier(verifier1);
    }

    function testRemoveVerifier() public {
        assertTrue(verifyPool.hasRole(verifyPool.VERIFIER_ROLE(), verifier1));

        vm.expectEmit(true, false, false, false);
        emit VerifierRemoved(verifier1);

        verifyPool.removeVerifier(verifier1);

        assertFalse(verifyPool.hasRole(verifyPool.VERIFIER_ROLE(), verifier1));

        (,,,, bool isActive) = verifyPool.getVerifierStats(verifier1);
        assertFalse(isActive);
    }

    function testRemoveVerifierFailsForNonVerifier() public {
        address nonVerifier = makeAddr("nonVerifier");

        vm.expectRevert("Not a verifier");
        verifyPool.removeVerifier(nonVerifier);
    }

    function testUpdateThreshold() public {
        uint256 newThreshold = 3;

        vm.expectEmit(false, false, false, true);
        emit ThresholdUpdated(threshold, newThreshold);

        verifyPool.updateThreshold(newThreshold);

        assertEq(verifyPool.verificationThreshold(), newThreshold);
    }

    function testUpdateThresholdFailsForZero() public {
        vm.expectRevert("Threshold must be positive");
        verifyPool.updateThreshold(0);
    }

    function testUpdateThresholdFailsForTooHigh() public {
        vm.expectRevert("Threshold too high");
        verifyPool.updateThreshold(10); // More than number of active verifiers
    }

    function testGetPendingRequests() public {
        vm.prank(requester1);
        bytes32 requestId1 = verifyPool.submitVerificationRequest(
            VerificationPool.VerificationType.IDENTITY, keccak256("identity1"), "Verification 1", new string[](0)
        );

        vm.prank(requester2);
        bytes32 requestId2 = verifyPool.submitVerificationRequest(
            VerificationPool.VerificationType.DOCUMENT, keccak256("document1"), "Verification 2", new string[](0)
        );

        bytes32[] memory pending = verifyPool.getPendingRequests();
        assertEq(pending.length, 2);
        assertEq(pending[0], requestId1);
        assertEq(pending[1], requestId2);
    }

    function testPendingRequestsRemovedAfterCompletion() public {
        vm.prank(requester1);
        bytes32 requestId = verifyPool.submitVerificationRequest(
            VerificationPool.VerificationType.IDENTITY, keccak256("identity"), "Identity verification", new string[](0)
        );

        bytes32[] memory pendingBefore = verifyPool.getPendingRequests();
        assertEq(pendingBefore.length, 1);

        vm.prank(verifier1);
        verifyPool.approveVerification(requestId, "Approved");

        vm.prank(verifier2);
        verifyPool.approveVerification(requestId, "Approved");

        bytes32[] memory pendingAfter = verifyPool.getPendingRequests();
        assertEq(pendingAfter.length, 0);
    }

    function testGetRequestsByType() public {
        vm.prank(requester1);
        bytes32 identityRequest = verifyPool.submitVerificationRequest(
            VerificationPool.VerificationType.IDENTITY, keccak256("identity"), "Identity verification", new string[](0)
        );

        vm.prank(requester1);
        bytes32 documentRequest = verifyPool.submitVerificationRequest(
            VerificationPool.VerificationType.DOCUMENT, keccak256("document"), "Document verification", new string[](0)
        );

        bytes32[] memory identityRequests = verifyPool.getRequestsByType(VerificationPool.VerificationType.IDENTITY);
        bytes32[] memory documentRequests = verifyPool.getRequestsByType(VerificationPool.VerificationType.DOCUMENT);

        assertEq(identityRequests.length, 1);
        assertEq(identityRequests[0], identityRequest);
        assertEq(documentRequests.length, 1);
        assertEq(documentRequests[0], documentRequest);
    }

    function testGetActiveVerifiers() public view {
        address[] memory activeVerifiers = verifyPool.getActiveVerifiers();
        assertEq(activeVerifiers.length, 3);
        assertEq(activeVerifiers[0], verifier1);
        assertEq(activeVerifiers[1], verifier2);
        assertEq(activeVerifiers[2], verifier3);
    }

    function testRequestExpiry() public {
        vm.prank(requester1);
        bytes32 requestId = verifyPool.submitVerificationRequest(
            VerificationPool.VerificationType.IDENTITY, keccak256("identity"), "Identity verification", new string[](0)
        );

        vm.warp(block.timestamp + 6 days);

        vm.startPrank(verifier1);
        vm.expectRevert("Request expired");
        verifyPool.approveVerification(requestId, "Approved");
        vm.stopPrank();
    }

    function testMultipleVerificationTypes() public {
        VerificationPool.VerificationType[6] memory types = [
            VerificationPool.VerificationType.IDENTITY,
            VerificationPool.VerificationType.DOCUMENT,
            VerificationPool.VerificationType.CREDENTIAL,
            VerificationPool.VerificationType.TRANSACTION,
            VerificationPool.VerificationType.DATA_INTEGRITY,
            VerificationPool.VerificationType.COMPLIANCE
        ];

        vm.startPrank(requester1);
        for (uint256 i = 0; i < types.length; i++) {
            verifyPool.submitVerificationRequest(
                types[i], keccak256(abi.encodePacked(i)), string(abi.encodePacked("Verification ", i)), new string[](0)
            );
        }
        vm.stopPrank();

        bytes32[] memory pending = verifyPool.getPendingRequests();
        assertEq(pending.length, 6);
    }

    function testAddAuditor() public {
        address newAuditor = makeAddr("newAuditor");

        verifyPool.addAuditor(newAuditor);

        assertTrue(verifyPool.hasRole(verifyPool.AUDITOR_ROLE(), newAuditor));
    }
}
