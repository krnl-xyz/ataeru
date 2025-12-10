// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/pools/HospitalRegistrationPool.sol";
import "../src/pool.sol";

contract HospitalRegistrationPoolTest is Test {
    HospitalRegistrationPool public hospitalPool;
    Pool public mainPool;

    address public owner;
    address public verifier1;
    address public verifier2;
    address public verifier3;
    address public regulator1;
    address public hospital1;
    address public hospital2;
    address public hospitalContract;

    bytes32 public poolId;

    event HospitalRegistrationRequested(
        bytes32 indexed requestId, string hospitalName, address indexed hospitalAddress
    );

    event RequestVerified(bytes32 indexed requestId, address indexed verifier, uint256 verificationCount);

    event RegulatoryApprovalGranted(bytes32 indexed requestId, address indexed regulator);

    event HospitalApproved(bytes32 indexed requestId, address indexed hospitalAddress, string hospitalName);

    event HospitalRejected(bytes32 indexed requestId, address indexed hospitalAddress, string reason);

    event RequestMovedToReview(bytes32 indexed requestId);

    function setUp() public {
        owner = address(this);
        verifier1 = makeAddr("verifier1");
        verifier2 = makeAddr("verifier2");
        verifier3 = makeAddr("verifier3");
        regulator1 = makeAddr("regulator1");
        hospital1 = makeAddr("hospital1");
        hospital2 = makeAddr("hospital2");
        hospitalContract = makeAddr("hospitalContract");

        mainPool = new Pool();
        mainPool.initialize();

        poolId = keccak256("hospital-registration-pool");

        hospitalPool = new HospitalRegistrationPool();
        hospitalPool.initialize(address(mainPool), hospitalContract, poolId);

        hospitalPool.addVerifier(verifier1);
        hospitalPool.addVerifier(verifier2);
        hospitalPool.addVerifier(verifier3);
        hospitalPool.addRegulator(regulator1);
    }

    function testInitialization() public view {
        assertEq(hospitalPool.mainPoolContract(), address(mainPool));
        assertEq(hospitalPool.hospitalContract(), hospitalContract);
        assertEq(hospitalPool.poolId(), poolId);
        assertTrue(hospitalPool.hasRole(hospitalPool.DEFAULT_ADMIN_ROLE(), owner));
    }

    function testSubmitHospitalRegistration() public {
        string memory name = "City General Hospital";
        string memory publicKey = "hospitalPublicKey";
        bytes32 licenseHash = keccak256("license");
        bytes32 proofId = keccak256("proof");
        string memory docsURI = "ipfs://docs";
        string memory jurisdiction = "US-CA";

        vm.startPrank(hospital1);

        bytes32 requestId = hospitalPool.submitHospitalRegistration(
            name, hospital1, publicKey, licenseHash, proofId, docsURI, jurisdiction
        );

        vm.stopPrank();

        (
            string memory hospitalName,
            address hospitalAddress,
            HospitalRegistrationPool.RequestStatus status,
            uint256 verificationCount,
            uint256 regulatoryApprovalCount,
            uint256 expiresAt
        ) = hospitalPool.getRequestDetails(requestId);

        assertEq(hospitalName, name);
        assertEq(hospitalAddress, hospital1);
        assertTrue(status == HospitalRegistrationPool.RequestStatus.PENDING);
        assertEq(verificationCount, 0);
        assertEq(regulatoryApprovalCount, 0);
        assertGt(expiresAt, block.timestamp);
    }

    function testSubmitHospitalRegistrationFailsForAlreadyRegistered() public {
        vm.startPrank(hospital1);
        bytes32 requestId = hospitalPool.submitHospitalRegistration(
            "Hospital", hospital1, "publicKey", keccak256("license"), keccak256("proof"), "ipfs://docs", "US-CA"
        );
        vm.stopPrank();

        vm.prank(verifier1);
        hospitalPool.verifyHospitalRequest(requestId);
        vm.prank(verifier2);
        hospitalPool.verifyHospitalRequest(requestId);
        vm.prank(verifier3);
        hospitalPool.verifyHospitalRequest(requestId);

        vm.prank(regulator1);
        hospitalPool.grantRegulatoryApproval(requestId);

        assertTrue(hospitalPool.isHospitalRegistered(hospital1));

        vm.startPrank(hospital1);
        vm.expectRevert("Hospital already registered");
        hospitalPool.submitHospitalRegistration(
            "Hospital2", hospital1, "publicKey2", keccak256("license2"), keccak256("proof2"), "ipfs://docs2", "US-CA"
        );
        vm.stopPrank();
    }

    function testSubmitHospitalRegistrationFailsWithEmptyName() public {
        vm.startPrank(hospital1);
        vm.expectRevert("Hospital name required");
        hospitalPool.submitHospitalRegistration(
            "", hospital1, "publicKey", keccak256("license"), keccak256("proof"), "ipfs://docs", "US-CA"
        );
        vm.stopPrank();
    }

    function testSubmitHospitalRegistrationFailsWithEmptyPublicKey() public {
        vm.startPrank(hospital1);
        vm.expectRevert("Public key required");
        hospitalPool.submitHospitalRegistration(
            "Hospital", hospital1, "", keccak256("license"), keccak256("proof"), "ipfs://docs", "US-CA"
        );
        vm.stopPrank();
    }

    function testVerifyHospitalRequest() public {
        vm.prank(hospital1);
        bytes32 requestId = hospitalPool.submitHospitalRegistration(
            "Hospital", hospital1, "publicKey", keccak256("license"), keccak256("proof"), "ipfs://docs", "US-CA"
        );

        vm.startPrank(verifier1);

        vm.expectEmit(true, true, false, true);
        emit RequestVerified(requestId, verifier1, 1);

        hospitalPool.verifyHospitalRequest(requestId);
        vm.stopPrank();

        (,,, uint256 verificationCount,,) = hospitalPool.getRequestDetails(requestId);
        assertEq(verificationCount, 1);
    }

    function testVerifyHospitalRequestFailsForNonVerifier() public {
        vm.prank(hospital1);
        bytes32 requestId = hospitalPool.submitHospitalRegistration(
            "Hospital", hospital1, "publicKey", keccak256("license"), keccak256("proof"), "ipfs://docs", "US-CA"
        );

        address nonVerifier = makeAddr("nonVerifier");
        vm.startPrank(nonVerifier);
        vm.expectRevert();
        hospitalPool.verifyHospitalRequest(requestId);
        vm.stopPrank();
    }

    function testVerifyHospitalRequestFailsForDuplicateVerification() public {
        vm.prank(hospital1);
        bytes32 requestId = hospitalPool.submitHospitalRegistration(
            "Hospital", hospital1, "publicKey", keccak256("license"), keccak256("proof"), "ipfs://docs", "US-CA"
        );

        vm.startPrank(verifier1);
        hospitalPool.verifyHospitalRequest(requestId);

        vm.expectRevert("Already verified");
        hospitalPool.verifyHospitalRequest(requestId);
        vm.stopPrank();
    }

    function testMoveToReviewAfterThreshold() public {
        vm.prank(hospital1);
        bytes32 requestId = hospitalPool.submitHospitalRegistration(
            "Hospital", hospital1, "publicKey", keccak256("license"), keccak256("proof"), "ipfs://docs", "US-CA"
        );

        vm.prank(verifier1);
        hospitalPool.verifyHospitalRequest(requestId);

        vm.prank(verifier2);
        hospitalPool.verifyHospitalRequest(requestId);

        (,, HospitalRegistrationPool.RequestStatus statusBefore,,,) = hospitalPool.getRequestDetails(requestId);
        assertTrue(statusBefore == HospitalRegistrationPool.RequestStatus.PENDING);

        vm.startPrank(verifier3);

        vm.expectEmit(true, false, false, false);
        emit RequestMovedToReview(requestId);

        hospitalPool.verifyHospitalRequest(requestId);
        vm.stopPrank();

        (,, HospitalRegistrationPool.RequestStatus statusAfter,,,) = hospitalPool.getRequestDetails(requestId);
        assertTrue(statusAfter == HospitalRegistrationPool.RequestStatus.UNDER_REVIEW);
    }

    function testGrantRegulatoryApproval() public {
        vm.prank(hospital1);
        bytes32 requestId = hospitalPool.submitHospitalRegistration(
            "Hospital", hospital1, "publicKey", keccak256("license"), keccak256("proof"), "ipfs://docs", "US-CA"
        );

        vm.prank(verifier1);
        hospitalPool.verifyHospitalRequest(requestId);
        vm.prank(verifier2);
        hospitalPool.verifyHospitalRequest(requestId);
        vm.prank(verifier3);
        hospitalPool.verifyHospitalRequest(requestId);

        vm.startPrank(regulator1);

        vm.expectEmit(true, true, false, false);
        emit RegulatoryApprovalGranted(requestId, regulator1);

        hospitalPool.grantRegulatoryApproval(requestId);
        vm.stopPrank();

        (,,,, uint256 regulatoryApprovalCount,) = hospitalPool.getRequestDetails(requestId);
        assertEq(regulatoryApprovalCount, 1);
    }

    function testGrantRegulatoryApprovalFailsForNonRegulator() public {
        vm.prank(hospital1);
        bytes32 requestId = hospitalPool.submitHospitalRegistration(
            "Hospital", hospital1, "publicKey", keccak256("license"), keccak256("proof"), "ipfs://docs", "US-CA"
        );

        vm.prank(verifier1);
        hospitalPool.verifyHospitalRequest(requestId);
        vm.prank(verifier2);
        hospitalPool.verifyHospitalRequest(requestId);
        vm.prank(verifier3);
        hospitalPool.verifyHospitalRequest(requestId);

        address nonRegulator = makeAddr("nonRegulator");
        vm.startPrank(nonRegulator);
        vm.expectRevert();
        hospitalPool.grantRegulatoryApproval(requestId);
        vm.stopPrank();
    }

    function testGrantRegulatoryApprovalFailsForPendingStatus() public {
        vm.prank(hospital1);
        bytes32 requestId = hospitalPool.submitHospitalRegistration(
            "Hospital", hospital1, "publicKey", keccak256("license"), keccak256("proof"), "ipfs://docs", "US-CA"
        );

        vm.startPrank(regulator1);
        vm.expectRevert("Not under review");
        hospitalPool.grantRegulatoryApproval(requestId);
        vm.stopPrank();
    }

    function testCompleteHospitalApprovalFlow() public {
        vm.prank(hospital1);
        bytes32 requestId = hospitalPool.submitHospitalRegistration(
            "City General Hospital",
            hospital1,
            "publicKey",
            keccak256("license"),
            keccak256("proof"),
            "ipfs://docs",
            "US-CA"
        );

        vm.prank(verifier1);
        hospitalPool.verifyHospitalRequest(requestId);
        vm.prank(verifier2);
        hospitalPool.verifyHospitalRequest(requestId);
        vm.prank(verifier3);
        hospitalPool.verifyHospitalRequest(requestId);

        vm.startPrank(regulator1);

        vm.expectEmit(true, true, false, true);
        emit HospitalApproved(requestId, hospital1, "City General Hospital");

        hospitalPool.grantRegulatoryApproval(requestId);
        vm.stopPrank();

        assertTrue(hospitalPool.isHospitalRegistered(hospital1));

        (,, HospitalRegistrationPool.RequestStatus status,,,) = hospitalPool.getRequestDetails(requestId);
        assertTrue(status == HospitalRegistrationPool.RequestStatus.APPROVED);
    }

    function testRejectHospital() public {
        vm.prank(hospital1);
        bytes32 requestId = hospitalPool.submitHospitalRegistration(
            "Hospital", hospital1, "publicKey", keccak256("license"), keccak256("proof"), "ipfs://docs", "US-CA"
        );

        string memory reason = "Invalid license documentation";

        vm.expectEmit(true, true, false, true);
        emit HospitalRejected(requestId, hospital1, reason);

        hospitalPool.rejectHospital(requestId, reason);

        (,, HospitalRegistrationPool.RequestStatus status,,,) = hospitalPool.getRequestDetails(requestId);
        assertTrue(status == HospitalRegistrationPool.RequestStatus.REJECTED);

        assertFalse(hospitalPool.isHospitalRegistered(hospital1));
    }

    function testRejectHospitalDuringReview() public {
        vm.prank(hospital1);
        bytes32 requestId = hospitalPool.submitHospitalRegistration(
            "Hospital", hospital1, "publicKey", keccak256("license"), keccak256("proof"), "ipfs://docs", "US-CA"
        );

        vm.prank(verifier1);
        hospitalPool.verifyHospitalRequest(requestId);
        vm.prank(verifier2);
        hospitalPool.verifyHospitalRequest(requestId);
        vm.prank(verifier3);
        hospitalPool.verifyHospitalRequest(requestId);

        hospitalPool.rejectHospital(requestId, "Failed regulatory review");

        (,, HospitalRegistrationPool.RequestStatus status,,,) = hospitalPool.getRequestDetails(requestId);
        assertTrue(status == HospitalRegistrationPool.RequestStatus.REJECTED);
    }

    function testGetPendingRequests() public {
        vm.prank(hospital1);
        bytes32 requestId1 = hospitalPool.submitHospitalRegistration(
            "Hospital 1", hospital1, "publicKey1", keccak256("license1"), keccak256("proof1"), "ipfs://docs1", "US-CA"
        );

        vm.prank(hospital2);
        bytes32 requestId2 = hospitalPool.submitHospitalRegistration(
            "Hospital 2", hospital2, "publicKey2", keccak256("license2"), keccak256("proof2"), "ipfs://docs2", "US-NY"
        );

        bytes32[] memory pending = hospitalPool.getPendingRequests();
        assertEq(pending.length, 2);
        assertEq(pending[0], requestId1);
        assertEq(pending[1], requestId2);
    }

    function testPendingRequestsRemovedAfterApproval() public {
        vm.prank(hospital1);
        bytes32 requestId = hospitalPool.submitHospitalRegistration(
            "Hospital", hospital1, "publicKey", keccak256("license"), keccak256("proof"), "ipfs://docs", "US-CA"
        );

        bytes32[] memory pendingBefore = hospitalPool.getPendingRequests();
        assertEq(pendingBefore.length, 1);

        vm.prank(verifier1);
        hospitalPool.verifyHospitalRequest(requestId);
        vm.prank(verifier2);
        hospitalPool.verifyHospitalRequest(requestId);
        vm.prank(verifier3);
        hospitalPool.verifyHospitalRequest(requestId);

        vm.prank(regulator1);
        hospitalPool.grantRegulatoryApproval(requestId);

        bytes32[] memory pendingAfter = hospitalPool.getPendingRequests();
        assertEq(pendingAfter.length, 0);
    }

    function testAddAndRemoveVerifier() public {
        address newVerifier = makeAddr("newVerifier");

        hospitalPool.addVerifier(newVerifier);
        assertTrue(hospitalPool.hasRole(hospitalPool.VERIFIER_ROLE(), newVerifier));

        hospitalPool.removeVerifier(newVerifier);
        assertFalse(hospitalPool.hasRole(hospitalPool.VERIFIER_ROLE(), newVerifier));
    }

    function testAddAndRemoveRegulator() public {
        address newRegulator = makeAddr("newRegulator");

        hospitalPool.addRegulator(newRegulator);
        assertTrue(hospitalPool.hasRole(hospitalPool.REGULATORY_ROLE(), newRegulator));

        hospitalPool.removeRegulator(newRegulator);
        assertFalse(hospitalPool.hasRole(hospitalPool.REGULATORY_ROLE(), newRegulator));
    }

    function testRequestExpiry() public {
        vm.prank(hospital1);
        bytes32 requestId = hospitalPool.submitHospitalRegistration(
            "Hospital", hospital1, "publicKey", keccak256("license"), keccak256("proof"), "ipfs://docs", "US-CA"
        );

        vm.warp(block.timestamp + 8 days);

        vm.startPrank(verifier1);
        vm.expectRevert("Request expired");
        hospitalPool.verifyHospitalRequest(requestId);
        vm.stopPrank();
    }

    function testReviewPeriodExtension() public {
        vm.prank(hospital1);
        bytes32 requestId = hospitalPool.submitHospitalRegistration(
            "Hospital", hospital1, "publicKey", keccak256("license"), keccak256("proof"), "ipfs://docs", "US-CA"
        );

        (,,,,, uint256 expiresAtBefore) = hospitalPool.getRequestDetails(requestId);

        vm.prank(verifier1);
        hospitalPool.verifyHospitalRequest(requestId);
        vm.prank(verifier2);
        hospitalPool.verifyHospitalRequest(requestId);
        vm.prank(verifier3);
        hospitalPool.verifyHospitalRequest(requestId);

        (,,,,, uint256 expiresAtAfter) = hospitalPool.getRequestDetails(requestId);

        assertGt(expiresAtAfter, expiresAtBefore);
    }
}
