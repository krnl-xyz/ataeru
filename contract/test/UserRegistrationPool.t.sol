// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/pools/UserRegistrationPool.sol";
import "../src/pool.sol";

contract UserRegistrationPoolTest is Test {
    UserRegistrationPool public userPool;
    Pool public mainPool;

    address public owner;
    address public verifier1;
    address public verifier2;
    address public verifier3;
    address public user1;
    address public user2;

    bytes32 public poolId;

    event RegistrationRequested(bytes32 indexed requestId, address indexed userAddress, string publicKey);

    event RequestVerified(bytes32 indexed requestId, address indexed verifier, uint256 verificationCount);

    event RegistrationApproved(bytes32 indexed requestId, address indexed userAddress);

    event RegistrationRejected(bytes32 indexed requestId, address indexed userAddress, string reason);

    function setUp() public {
        owner = address(this);
        verifier1 = makeAddr("verifier1");
        verifier2 = makeAddr("verifier2");
        verifier3 = makeAddr("verifier3");
        user1 = makeAddr("user1");
        user2 = makeAddr("user2");

        mainPool = new Pool();
        mainPool.initialize();

        poolId = keccak256("user-registration-pool");

        userPool = new UserRegistrationPool();
        userPool.initialize(address(mainPool), poolId);

        userPool.addVerifier(verifier1);
        userPool.addVerifier(verifier2);
        userPool.addVerifier(verifier3);
    }

    function testInitialization() public view {
        assertEq(userPool.mainPoolContract(), address(mainPool));
        assertEq(userPool.poolId(), poolId);
        assertTrue(userPool.hasRole(userPool.DEFAULT_ADMIN_ROLE(), owner));
    }

    function testSubmitRegistrationRequest() public {
        string memory publicKey = "publicKey123";
        bytes32 identityHash = keccak256("identity");
        string memory metadata = "User metadata";

        vm.startPrank(user1);

        bytes32 requestId = userPool.submitRegistrationRequest(publicKey, identityHash, metadata);

        vm.stopPrank();

        (address userAddress, UserRegistrationPool.RequestStatus status, uint256 verificationCount, uint256 expiresAt) =
            userPool.getRequestStatus(requestId);

        assertEq(userAddress, user1);
        assertTrue(status == UserRegistrationPool.RequestStatus.PENDING);
        assertEq(verificationCount, 0);
        assertGt(expiresAt, block.timestamp);
    }

    function testSubmitRegistrationRequestFailsForAlreadyRegistered() public {
        vm.startPrank(user1);
        bytes32 requestId = userPool.submitRegistrationRequest("publicKey", keccak256("identity"), "metadata");
        vm.stopPrank();

        vm.prank(verifier1);
        userPool.verifyRegistrationRequest(requestId);

        vm.prank(verifier2);
        userPool.verifyRegistrationRequest(requestId);

        assertTrue(userPool.isUserRegistered(user1));

        vm.startPrank(user1);
        vm.expectRevert("User already registered");
        userPool.submitRegistrationRequest("publicKey2", keccak256("identity2"), "metadata2");
        vm.stopPrank();
    }

    function testSubmitRegistrationRequestFailsForDuplicateRequest() public {
        vm.startPrank(user1);
        userPool.submitRegistrationRequest("publicKey", keccak256("identity"), "metadata");

        vm.expectRevert("Request already submitted");
        userPool.submitRegistrationRequest("publicKey2", keccak256("identity2"), "metadata2");
        vm.stopPrank();
    }

    function testSubmitRegistrationRequestFailsWithEmptyPublicKey() public {
        vm.startPrank(user1);
        vm.expectRevert("Public key required");
        userPool.submitRegistrationRequest("", keccak256("identity"), "metadata");
        vm.stopPrank();
    }

    function testVerifyRegistrationRequest() public {
        vm.prank(user1);
        bytes32 requestId = userPool.submitRegistrationRequest("publicKey", keccak256("identity"), "metadata");

        vm.startPrank(verifier1);

        vm.expectEmit(true, true, false, true);
        emit RequestVerified(requestId, verifier1, 1);

        userPool.verifyRegistrationRequest(requestId);
        vm.stopPrank();

        (,, uint256 verificationCount,) = userPool.getRequestStatus(requestId);
        assertEq(verificationCount, 1);
    }

    function testVerifyRegistrationRequestFailsForNonVerifier() public {
        vm.prank(user1);
        bytes32 requestId = userPool.submitRegistrationRequest("publicKey", keccak256("identity"), "metadata");

        address nonVerifier = makeAddr("nonVerifier");
        vm.startPrank(nonVerifier);
        vm.expectRevert();
        userPool.verifyRegistrationRequest(requestId);
        vm.stopPrank();
    }

    function testVerifyRegistrationRequestFailsForDuplicateVerification() public {
        vm.prank(user1);
        bytes32 requestId = userPool.submitRegistrationRequest("publicKey", keccak256("identity"), "metadata");

        vm.startPrank(verifier1);
        userPool.verifyRegistrationRequest(requestId);

        vm.expectRevert("Already verified");
        userPool.verifyRegistrationRequest(requestId);
        vm.stopPrank();
    }

    function testAutoApprovalAfterThreshold() public {
        vm.prank(user1);
        bytes32 requestId = userPool.submitRegistrationRequest("publicKey", keccak256("identity"), "metadata");

        vm.prank(verifier1);
        userPool.verifyRegistrationRequest(requestId);

        assertFalse(userPool.isUserRegistered(user1));

        vm.startPrank(verifier2);

        vm.expectEmit(true, true, false, false);
        emit RegistrationApproved(requestId, user1);

        userPool.verifyRegistrationRequest(requestId);
        vm.stopPrank();

        assertTrue(userPool.isUserRegistered(user1));

        (, UserRegistrationPool.RequestStatus status,,) = userPool.getRequestStatus(requestId);
        assertTrue(status == UserRegistrationPool.RequestStatus.APPROVED);
    }

    function testRejectRegistration() public {
        vm.prank(user1);
        bytes32 requestId = userPool.submitRegistrationRequest("publicKey", keccak256("identity"), "metadata");

        string memory reason = "Invalid documentation";

        vm.expectEmit(true, true, false, true);
        emit RegistrationRejected(requestId, user1, reason);

        userPool.rejectRegistration(requestId, reason);

        (, UserRegistrationPool.RequestStatus status,,) = userPool.getRequestStatus(requestId);
        assertTrue(status == UserRegistrationPool.RequestStatus.REJECTED);

        assertFalse(userPool.isUserRegistered(user1));
    }

    function testRejectRegistrationFailsForNonPendingRequest() public {
        vm.prank(user1);
        bytes32 requestId = userPool.submitRegistrationRequest("publicKey", keccak256("identity"), "metadata");

        userPool.rejectRegistration(requestId, "Rejected");

        vm.expectRevert("Request not pending");
        userPool.rejectRegistration(requestId, "Rejected again");
    }

    function testGetPendingRequests() public {
        vm.prank(user1);
        bytes32 requestId1 = userPool.submitRegistrationRequest("publicKey1", keccak256("identity1"), "metadata1");

        vm.prank(user2);
        bytes32 requestId2 = userPool.submitRegistrationRequest("publicKey2", keccak256("identity2"), "metadata2");

        bytes32[] memory pending = userPool.getPendingRequests();
        assertEq(pending.length, 2);
        assertEq(pending[0], requestId1);
        assertEq(pending[1], requestId2);
    }

    function testPendingRequestsRemovedAfterApproval() public {
        vm.prank(user1);
        bytes32 requestId = userPool.submitRegistrationRequest("publicKey", keccak256("identity"), "metadata");

        bytes32[] memory pendingBefore = userPool.getPendingRequests();
        assertEq(pendingBefore.length, 1);

        vm.prank(verifier1);
        userPool.verifyRegistrationRequest(requestId);

        vm.prank(verifier2);
        userPool.verifyRegistrationRequest(requestId);

        bytes32[] memory pendingAfter = userPool.getPendingRequests();
        assertEq(pendingAfter.length, 0);
    }

    function testPendingRequestsRemovedAfterRejection() public {
        vm.prank(user1);
        bytes32 requestId = userPool.submitRegistrationRequest("publicKey", keccak256("identity"), "metadata");

        bytes32[] memory pendingBefore = userPool.getPendingRequests();
        assertEq(pendingBefore.length, 1);

        userPool.rejectRegistration(requestId, "Invalid");

        bytes32[] memory pendingAfter = userPool.getPendingRequests();
        assertEq(pendingAfter.length, 0);
    }

    function testAddVerifier() public {
        address newVerifier = makeAddr("newVerifier");

        assertFalse(userPool.hasRole(userPool.VERIFIER_ROLE(), newVerifier));

        userPool.addVerifier(newVerifier);

        assertTrue(userPool.hasRole(userPool.VERIFIER_ROLE(), newVerifier));
    }

    function testAddVerifierFailsForNonAdmin() public {
        address newVerifier = makeAddr("newVerifier");
        address nonAdmin = makeAddr("nonAdmin");

        vm.startPrank(nonAdmin);
        vm.expectRevert();
        userPool.addVerifier(newVerifier);
        vm.stopPrank();
    }

    function testRemoveVerifier() public {
        assertTrue(userPool.hasRole(userPool.VERIFIER_ROLE(), verifier1));

        userPool.removeVerifier(verifier1);

        assertFalse(userPool.hasRole(userPool.VERIFIER_ROLE(), verifier1));
    }

    function testRequestExpiry() public {
        vm.prank(user1);
        bytes32 requestId = userPool.submitRegistrationRequest("publicKey", keccak256("identity"), "metadata");

        vm.warp(block.timestamp + 4 days);

        vm.startPrank(verifier1);
        vm.expectRevert("Request expired");
        userPool.verifyRegistrationRequest(requestId);
        vm.stopPrank();
    }

    function testMultipleUsersRegistration() public {
        vm.prank(user1);
        bytes32 requestId1 = userPool.submitRegistrationRequest("publicKey1", keccak256("identity1"), "metadata1");

        vm.prank(user2);
        bytes32 requestId2 = userPool.submitRegistrationRequest("publicKey2", keccak256("identity2"), "metadata2");

        vm.prank(verifier1);
        userPool.verifyRegistrationRequest(requestId1);
        vm.prank(verifier2);
        userPool.verifyRegistrationRequest(requestId1);

        vm.prank(verifier1);
        userPool.verifyRegistrationRequest(requestId2);
        vm.prank(verifier2);
        userPool.verifyRegistrationRequest(requestId2);

        assertTrue(userPool.isUserRegistered(user1));
        assertTrue(userPool.isUserRegistered(user2));
    }
}
