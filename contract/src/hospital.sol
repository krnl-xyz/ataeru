// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";

contract Hospital is AccessControlUpgradeable, OwnableUpgradeable, UUPSUpgradeable {
    function initialize() public initializer {
        __Ownable_init(msg.sender);
        __AccessControl_init();
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    address public verifier;
    address public prover;
    bytes32 public constant VERIFIER_ROLE = keccak256("VERIFIER_ROLE");
    bytes32 public constant PROVER_ROLE = keccak256("PROVER_ROLE");
    bytes32 public constant HOSPITAL_ROLE = keccak256("HOSPITAL_ROLE");

    // periods
    uint256 public constant VESTING_PERIOD = 1 days;
    uint256 public constant SUSPENSION_PERIOD = 30 days;

    function _authorizeUpgrade(address newImplementation) internal override onlyRole(DEFAULT_ADMIN_ROLE) {}

    struct HospitalInfo {
        string name;
        address hospitalAddress;
        string publicKey;
        bytes32 hospitalId;
        bytes32 proofId;
        HospitalStatus status;
    }

    enum HospitalStatus {
        NOT_VERIFIED,
        VERIFIED,
        ACTIVE,
        INACTIVE,
        SUSPENDED
    }

    mapping(bytes32 => HospitalInfo) public hospitals;

    // events

    event HospitalMinted(
        address indexed hospitalAddress, string name, string publicKey, bytes32 indexed hospitalId, bytes32 proofId
    );
    event HospitalVerified(address indexed hospitalAddress, bytes32 indexed hospitalId, bytes32 proofId);

    function mint(
        string memory _name,
        address _address,
        string memory _publicKey,
        bytes32 _hospitalId,
        bytes32 _proofId
    ) internal onlyOwner {
        require(hospitals[_hospitalId].hospitalId == bytes32(0), "Hospital already minted");
        hospitals[_hospitalId] = HospitalInfo({
            name: _name,
            hospitalAddress: payable(_address),
            publicKey: _publicKey,
            hospitalId: _hospitalId,
            proofId: _proofId,
            status: HospitalStatus.NOT_VERIFIED
        });
        //verify hosptal
        // asign permissions
        // grantHRole(_hospitalId);
        emit HospitalMinted(msg.sender, _name, _publicKey, _hospitalId, _proofId);
    }

    // request health data to the hospital, verifier will sign the request and send it to the hospital
    // sign message will contain e.g ( hosptialId, requestId, requestType, requestData)
    function requestHData(
        bytes32 _hospitalId,
        bytes32 _requestId,
        string memory _requestType,
        string memory _requestData
    ) internal onlyRole(HOSPITAL_ROLE) returns (bool) {
        require(hospitals[_hospitalId].status == HospitalStatus.ACTIVE, "Hospital not active");
        // sign message
        bytes32 message = keccak256(abi.encodePacked(_hospitalId, _requestId, _requestType, _requestData));
        // bytes32 signature = verifier.signMessage(message);
        return true;
    }

    function verifyRequest(bytes32 _requestId, bytes32 _signature) internal view returns (bool) {
        return true;
    }

    function grantHRole(bytes32 _hospitalId) internal onlyRole(VERIFIER_ROLE) returns (bool) {
        require(hospitals[_hospitalId].status == HospitalStatus.NOT_VERIFIED, "Hospital not verified");
        address hospitalAddress = hospitals[_hospitalId].hospitalAddress;
        _grantRole(HOSPITAL_ROLE, hospitalAddress);
        return true;
    }

    function revokeHRole(bytes32 _hospitalId) internal onlyRole(VERIFIER_ROLE) returns (bool) {
        address hospitalAddress = hospitals[_hospitalId].hospitalAddress;
        _revokeRole(HOSPITAL_ROLE, hospitalAddress);
        return true;
    }

    function suspendHospital(bytes32 _hospitalId) internal onlyRole(VERIFIER_ROLE) returns (bool) {
        hospitals[_hospitalId].status = HospitalStatus.SUSPENDED;
        revokeHRole(_hospitalId);
        return true;
    } // verifier and owner can suspend hospitaL

    function activateHospital(bytes32 _hospitalId) internal onlyRole(VERIFIER_ROLE) returns (bool) {
        hospitals[_hospitalId].status = HospitalStatus.ACTIVE;
        grantHRole(_hospitalId);
        return true;
    }

    function deactivateHospital(bytes32 _hospitalId) internal onlyRole(VERIFIER_ROLE) returns (bool) {
        hospitals[_hospitalId].status = HospitalStatus.INACTIVE;
        revokeHRole(_hospitalId);
        return true;
    }
}
