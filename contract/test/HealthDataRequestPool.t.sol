// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/pools/HealthDataRequestPool.sol";
import "../src/pool.sol";

contract HealthDataRequestPoolTest is Test {
    HealthDataRequestPool public dataPool;
    Pool public mainPool;

    address public owner;
    address public verifier1;
    address public verifier2;
    address public requester1;
    address public dataOwner1;
    address public dataOwner2;
    address public synNFTContract;

    bytes32 public poolId;
    uint256 public tokenId1 = 1;
    uint256 public tokenId2 = 2;
    bytes32 public hospitalId1;

    event DataAccessRequested(
        bytes32 indexed requestId,
        uint256 indexed tokenId,
        address indexed requester,
        HealthDataRequestPool.RequestType requestType
    );

    event OwnerConsentGranted(bytes32 indexed requestId, address indexed dataOwner);

    event RequestVerified(bytes32 indexed requestId, address indexed verifier, uint256 verificationCount);

    event AccessGranted(bytes32 indexed grantId, bytes32 indexed requestId, address indexed grantee, uint256 tokenId);

    event AccessRevoked(bytes32 indexed grantId, string reason);

    event RequestRejected(bytes32 indexed requestId, string reason);

    function setUp() public {
        owner = address(this);
        verifier1 = makeAddr("verifier1");
        verifier2 = makeAddr("verifier2");
        requester1 = makeAddr("requester1");
        dataOwner1 = makeAddr("dataOwner1");
        dataOwner2 = makeAddr("dataOwner2");
        synNFTContract = makeAddr("synNFTContract");

        hospitalId1 = keccak256("hospital1");

        mainPool = new Pool();
        mainPool.initialize();

        poolId = keccak256("health-data-request-pool");

        dataPool = new HealthDataRequestPool();
        dataPool.initialize(address(mainPool), synNFTContract, poolId);

        dataPool.addVerifier(verifier1);
        dataPool.addVerifier(verifier2);
    }

    function testInitialization() public view {
        assertEq(dataPool.mainPoolContract(), address(mainPool));
        assertEq(dataPool.synNFTContract(), synNFTContract);
        assertEq(dataPool.poolId(), poolId);
        assertTrue(dataPool.hasRole(dataPool.DEFAULT_ADMIN_ROLE(), owner));
    }

    function testSubmitDataAccessRequest() public {
        vm.startPrank(requester1);

        bytes32 requestId = dataPool.submitDataAccessRequest(
            tokenId1,
            dataOwner1,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.VIEW_ONLY,
            "Medical research",
            "Need data for clinical study"
        );

        vm.stopPrank();

        (
            uint256 tokenId,
            address requester,
            address dataOwner,
            HealthDataRequestPool.RequestType requestType,
            HealthDataRequestPool.AccessLevel accessLevel,
            HealthDataRequestPool.RequestStatus status,
            uint256 verificationCount,
            bool ownerConsent
        ) = dataPool.getRequestDetails(requestId);

        assertEq(tokenId, tokenId1);
        assertEq(requester, requester1);
        assertEq(dataOwner, dataOwner1);
        assertTrue(requestType == HealthDataRequestPool.RequestType.READ);
        assertTrue(accessLevel == HealthDataRequestPool.AccessLevel.VIEW_ONLY);
        assertTrue(status == HealthDataRequestPool.RequestStatus.PENDING);
        assertEq(verificationCount, 0);
        assertFalse(ownerConsent);
    }

    function testSubmitDataAccessRequestFailsWithEmptyPurpose() public {
        vm.startPrank(requester1);
        vm.expectRevert("Purpose required");
        dataPool.submitDataAccessRequest(
            tokenId1,
            dataOwner1,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.VIEW_ONLY,
            "",
            "Justification"
        );
        vm.stopPrank();
    }

    function testSubmitDataAccessRequestFailsWithEmptyJustification() public {
        vm.startPrank(requester1);
        vm.expectRevert("Justification required");
        dataPool.submitDataAccessRequest(
            tokenId1,
            dataOwner1,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.VIEW_ONLY,
            "Purpose",
            ""
        );
        vm.stopPrank();
    }

    function testGrantOwnerConsent() public {
        vm.prank(requester1);
        bytes32 requestId = dataPool.submitDataAccessRequest(
            tokenId1,
            dataOwner1,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.VIEW_ONLY,
            "Medical research",
            "Clinical study"
        );

        vm.startPrank(dataOwner1);

        vm.expectEmit(true, true, false, false);
        emit OwnerConsentGranted(requestId, dataOwner1);

        dataPool.grantOwnerConsent(requestId);
        vm.stopPrank();

        (,,,,,,, bool ownerConsent) = dataPool.getRequestDetails(requestId);
        assertTrue(ownerConsent);
    }

    function testGrantOwnerConsentFailsForNonOwner() public {
        vm.prank(requester1);
        bytes32 requestId = dataPool.submitDataAccessRequest(
            tokenId1,
            dataOwner1,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.VIEW_ONLY,
            "Medical research",
            "Clinical study"
        );

        address nonOwner = makeAddr("nonOwner");
        vm.startPrank(nonOwner);
        vm.expectRevert("Not data owner");
        dataPool.grantOwnerConsent(requestId);
        vm.stopPrank();
    }

    function testVerifyDataAccessRequestFailsWithoutOwnerConsent() public {
        vm.prank(requester1);
        bytes32 requestId = dataPool.submitDataAccessRequest(
            tokenId1,
            dataOwner1,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.VIEW_ONLY,
            "Medical research",
            "Clinical study"
        );

        vm.startPrank(verifier1);
        vm.expectRevert("Owner consent required");
        dataPool.verifyDataAccessRequest(requestId);
        vm.stopPrank();
    }

    function testVerifyDataAccessRequest() public {
        vm.prank(requester1);
        bytes32 requestId = dataPool.submitDataAccessRequest(
            tokenId1,
            dataOwner1,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.VIEW_ONLY,
            "Medical research",
            "Clinical study"
        );

        vm.prank(dataOwner1);
        dataPool.grantOwnerConsent(requestId);

        vm.startPrank(verifier1);

        vm.expectEmit(true, true, false, true);
        emit RequestVerified(requestId, verifier1, 1);

        dataPool.verifyDataAccessRequest(requestId);
        vm.stopPrank();

        (,,,,,, uint256 verificationCount,) = dataPool.getRequestDetails(requestId);
        assertEq(verificationCount, 1);
    }

    function testVerifyDataAccessRequestFailsForDuplicateVerification() public {
        vm.prank(requester1);
        bytes32 requestId = dataPool.submitDataAccessRequest(
            tokenId1,
            dataOwner1,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.VIEW_ONLY,
            "Medical research",
            "Clinical study"
        );

        vm.prank(dataOwner1);
        dataPool.grantOwnerConsent(requestId);

        vm.startPrank(verifier1);
        dataPool.verifyDataAccessRequest(requestId);

        vm.expectRevert("Already verified");
        dataPool.verifyDataAccessRequest(requestId);
        vm.stopPrank();
    }

    function testCompleteAccessGrantFlow() public {
        vm.prank(requester1);
        bytes32 requestId = dataPool.submitDataAccessRequest(
            tokenId1,
            dataOwner1,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.VIEW_ONLY,
            "Medical research",
            "Clinical study"
        );

        vm.prank(dataOwner1);
        dataPool.grantOwnerConsent(requestId);

        vm.prank(verifier1);
        dataPool.verifyDataAccessRequest(requestId);

        vm.startPrank(verifier2);

        vm.expectEmit(false, true, true, true);
        emit AccessGranted(bytes32(0), requestId, requester1, tokenId1);

        dataPool.verifyDataAccessRequest(requestId);
        vm.stopPrank();

        (,,,,, HealthDataRequestPool.RequestStatus status,,) = dataPool.getRequestDetails(requestId);
        assertTrue(status == HealthDataRequestPool.RequestStatus.APPROVED);
    }

    function testRevokeAccessByOwner() public {
        vm.prank(requester1);
        bytes32 requestId = dataPool.submitDataAccessRequest(
            tokenId1,
            dataOwner1,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.VIEW_ONLY,
            "Medical research",
            "Clinical study"
        );

        vm.prank(dataOwner1);
        dataPool.grantOwnerConsent(requestId);

        vm.prank(verifier1);
        dataPool.verifyDataAccessRequest(requestId);

        vm.prank(verifier2);
        dataPool.verifyDataAccessRequest(requestId);

        bytes32[] memory requests = dataPool.getTokenRequests(tokenId1);
        bytes32 grantId = keccak256(abi.encodePacked(requestId, block.timestamp));

        vm.startPrank(dataOwner1);

        string memory reason = "Owner revoked access";
        vm.expectEmit(true, false, false, true);
        emit AccessRevoked(grantId, reason);

        dataPool.revokeAccess(grantId, reason);
        vm.stopPrank();

        (,,,,, bool isActive) = dataPool.getAccessGrant(grantId);
        assertFalse(isActive);
    }

    function testRejectRequest() public {
        vm.prank(requester1);
        bytes32 requestId = dataPool.submitDataAccessRequest(
            tokenId1,
            dataOwner1,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.VIEW_ONLY,
            "Medical research",
            "Clinical study"
        );

        string memory reason = "Insufficient justification";

        vm.expectEmit(true, false, false, true);
        emit RequestRejected(requestId, reason);

        dataPool.rejectRequest(requestId, reason);

        (,,,,, HealthDataRequestPool.RequestStatus status,,) = dataPool.getRequestDetails(requestId);
        assertTrue(status == HealthDataRequestPool.RequestStatus.REJECTED);
    }

    function testGetPendingRequests() public {
        vm.prank(requester1);
        bytes32 requestId1 = dataPool.submitDataAccessRequest(
            tokenId1,
            dataOwner1,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.VIEW_ONLY,
            "Research 1",
            "Study 1"
        );

        vm.prank(requester1);
        bytes32 requestId2 = dataPool.submitDataAccessRequest(
            tokenId2,
            dataOwner2,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.LIMITED,
            "Research 2",
            "Study 2"
        );

        bytes32[] memory pending = dataPool.getPendingRequests();
        assertEq(pending.length, 2);
        assertEq(pending[0], requestId1);
        assertEq(pending[1], requestId2);
    }

    function testGetTokenRequests() public {
        vm.prank(requester1);
        bytes32 requestId1 = dataPool.submitDataAccessRequest(
            tokenId1,
            dataOwner1,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.VIEW_ONLY,
            "Research 1",
            "Study 1"
        );

        vm.prank(requester1);
        dataPool.submitDataAccessRequest(
            tokenId1,
            dataOwner1,
            hospitalId1,
            HealthDataRequestPool.RequestType.SHARE,
            HealthDataRequestPool.AccessLevel.LIMITED,
            "Research 2",
            "Study 2"
        );

        bytes32[] memory tokenRequests = dataPool.getTokenRequests(tokenId1);
        assertEq(tokenRequests.length, 2);
    }

    function testGetRequesterRequests() public {
        vm.startPrank(requester1);
        dataPool.submitDataAccessRequest(
            tokenId1,
            dataOwner1,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.VIEW_ONLY,
            "Research 1",
            "Study 1"
        );

        dataPool.submitDataAccessRequest(
            tokenId2,
            dataOwner2,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.LIMITED,
            "Research 2",
            "Study 2"
        );
        vm.stopPrank();

        bytes32[] memory requesterRequests = dataPool.getRequesterRequests(requester1);
        assertEq(requesterRequests.length, 2);
    }

    function testRequestExpiry() public {
        vm.prank(requester1);
        bytes32 requestId = dataPool.submitDataAccessRequest(
            tokenId1,
            dataOwner1,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.VIEW_ONLY,
            "Medical research",
            "Clinical study"
        );

        vm.prank(dataOwner1);
        dataPool.grantOwnerConsent(requestId);

        vm.warp(block.timestamp + 8 days);

        vm.startPrank(verifier1);
        vm.expectRevert("Request expired");
        dataPool.verifyDataAccessRequest(requestId);
        vm.stopPrank();
    }

    function testAccessGrantExpiry() public {
        vm.prank(requester1);
        bytes32 requestId = dataPool.submitDataAccessRequest(
            tokenId1,
            dataOwner1,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.VIEW_ONLY,
            "Medical research",
            "Clinical study"
        );

        vm.prank(dataOwner1);
        dataPool.grantOwnerConsent(requestId);

        vm.prank(verifier1);
        dataPool.verifyDataAccessRequest(requestId);

        vm.prank(verifier2);
        dataPool.verifyDataAccessRequest(requestId);

        bytes32 grantId = keccak256(abi.encodePacked(requestId, block.timestamp));

        assertTrue(dataPool.isAccessActive(grantId));

        vm.warp(block.timestamp + 31 days);

        assertFalse(dataPool.isAccessActive(grantId));
    }

    function testAddVerifierAndDataCustodian() public {
        address newVerifier = makeAddr("newVerifier");
        address newCustodian = makeAddr("newCustodian");

        dataPool.addVerifier(newVerifier);
        assertTrue(dataPool.hasRole(dataPool.VERIFIER_ROLE(), newVerifier));

        dataPool.addDataCustodian(newCustodian);
        assertTrue(dataPool.hasRole(dataPool.DATA_CUSTODIAN_ROLE(), newCustodian));
    }

    function testDifferentRequestTypes() public {
        vm.startPrank(requester1);

        bytes32 readRequest = dataPool.submitDataAccessRequest(
            tokenId1,
            dataOwner1,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.VIEW_ONLY,
            "Read access",
            "Need to read"
        );

        bytes32 shareRequest = dataPool.submitDataAccessRequest(
            tokenId2,
            dataOwner2,
            hospitalId1,
            HealthDataRequestPool.RequestType.SHARE,
            HealthDataRequestPool.AccessLevel.LIMITED,
            "Share access",
            "Need to share"
        );

        vm.stopPrank();

        (,,, HealthDataRequestPool.RequestType readType,,,,) = dataPool.getRequestDetails(readRequest);
        (,,, HealthDataRequestPool.RequestType shareType,,,,) = dataPool.getRequestDetails(shareRequest);

        assertTrue(readType == HealthDataRequestPool.RequestType.READ);
        assertTrue(shareType == HealthDataRequestPool.RequestType.SHARE);
    }

    function testDifferentAccessLevels() public {
        vm.startPrank(requester1);

        bytes32 viewRequest = dataPool.submitDataAccessRequest(
            tokenId1,
            dataOwner1,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.VIEW_ONLY,
            "View access",
            "View only"
        );

        bytes32 fullRequest = dataPool.submitDataAccessRequest(
            tokenId2,
            dataOwner2,
            hospitalId1,
            HealthDataRequestPool.RequestType.READ,
            HealthDataRequestPool.AccessLevel.FULL,
            "Full access",
            "Full access needed"
        );

        vm.stopPrank();

        (,,,, HealthDataRequestPool.AccessLevel viewLevel,,,) = dataPool.getRequestDetails(viewRequest);
        (,,,, HealthDataRequestPool.AccessLevel fullLevel,,,) = dataPool.getRequestDetails(fullRequest);

        assertTrue(viewLevel == HealthDataRequestPool.AccessLevel.VIEW_ONLY);
        assertTrue(fullLevel == HealthDataRequestPool.AccessLevel.FULL);
    }
}
