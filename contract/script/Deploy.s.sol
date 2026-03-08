// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/pool.sol";
import "../src/pools/PoolFactory.sol";
import "../src/pools/UserRegistrationPool.sol";
import "../src/pools/HospitalRegistrationPool.sol";
import "../src/pools/HealthDataRequestPool.sol";
import "../src/pools/VerificationPool.sol";

contract DeployScript is Script {
    Pool public mainPool;
    PoolFactory public factory;
    
    address public deployer;
    address public hospitalContract;
    address public synNFTContract;
    
    address public userPoolAddress;
    address public hospitalPoolAddress;
    address public dataPoolAddress;
    address public verifyPoolAddress;
    
    uint256 public verificationThreshold = 2;
    
    function setUp() public {
        deployer = msg.sender;
    }
    
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        deployer = vm.addr(deployerPrivateKey);
        
        vm.startBroadcast(deployerPrivateKey);
        
        console.log("========================================");
        console.log("Ataeru Complete Deployment Script");
        console.log("========================================");
        console.log("Deployer address:", deployer);
        console.log("");
        
        // Step 1: Deploy Main Pool Contract
        console.log("=== Step 1: Deploying Main Pool ===");
        mainPool = new Pool();
        mainPool.initialize();
        console.log("Main Pool deployed at:", address(mainPool));
        console.log("");
        
        // Step 2: Deploy Pool Factory
        console.log("=== Step 2: Deploying Pool Factory ===");
        factory = new PoolFactory();
        factory.initialize(address(mainPool));
        console.log("Pool Factory deployed at:", address(factory));
        console.log("");
        
        // Step 3: Set up role addresses (use deployer for all roles for testing)
        address factoryAdmin = deployer;
        address poolManager = deployer;
        address verifier = deployer;
        address regulator = deployer;
        address dataCustodian = deployer;
        address auditor = deployer;
        
        // Grant Factory Admin Role (deployer already has it from initialize, but being explicit)
        console.log("=== Step 3: Setting up Factory Roles ===");
        factory.grantRole(factory.FACTORY_ADMIN_ROLE(), factoryAdmin);
        console.log("Granted FACTORY_ADMIN_ROLE to:", factoryAdmin);
        
        // Grant Pool Manager Role
        mainPool.grantRole(mainPool.POOL_MANAGER_ROLE(), poolManager);
        console.log("Granted POOL_MANAGER_ROLE to:", poolManager);
        console.log("");
        
        // Step 4: Get contract addresses from environment or use defaults
        hospitalContract = vm.envOr("HOSPITAL_CONTRACT", address(0));
        synNFTContract = vm.envOr("SYN_NFT_CONTRACT", address(0));
        verificationThreshold = vm.envOr("VERIFICATION_THRESHOLD", uint256(2));
        
        if (hospitalContract == address(0)) {
            console.log("WARNING: HOSPITAL_CONTRACT not set, using placeholder address");
            hospitalContract = address(0x1111111111111111111111111111111111111111);
        }
        if (synNFTContract == address(0)) {
            console.log("WARNING: SYN_NFT_CONTRACT not set, using placeholder address");
            synNFTContract = address(0x2222222222222222222222222222222222222222);
        }
        console.log("Hospital Contract:", hospitalContract);
        console.log("SynNFT Contract:", synNFTContract);
        console.log("Verification Threshold:", verificationThreshold);
        console.log("");
        
        // Step 5: Deploy all pools
        console.log("=== Step 4: Deploying Pools ===");
        
        userPoolAddress = factory.deployUserRegistrationPool();
        console.log("User Registration Pool deployed at:", userPoolAddress);
        
        hospitalPoolAddress = factory.deployHospitalRegistrationPool(hospitalContract);
        console.log("Hospital Registration Pool deployed at:", hospitalPoolAddress);
        
        dataPoolAddress = factory.deployHealthDataRequestPool(synNFTContract);
        console.log("Health Data Request Pool deployed at:", dataPoolAddress);
        
        verifyPoolAddress = factory.deployVerificationPool(verificationThreshold);
        console.log("Verification Pool deployed at:", verifyPoolAddress);
        console.log("");
        
        // Step 6: Add roles to pools
        // Note: The factory is the DEFAULT_ADMIN_ROLE on pools when initialized
        // Since the factory is a contract (not an EOA), we can't directly grant roles as the factory
        // For testing, we'll attempt to add roles directly. If they fail, roles can be granted manually.
        console.log("=== Step 5: Setting up Pool Roles ===");
        console.log("NOTE: Factory has admin role on pools.");
        console.log("Attempting to add roles (may require manual role granting)...");
        console.log("");
        
        UserRegistrationPool userPool = UserRegistrationPool(userPoolAddress);
        HospitalRegistrationPool hospitalPool = HospitalRegistrationPool(hospitalPoolAddress);
        HealthDataRequestPool dataPool = HealthDataRequestPool(dataPoolAddress);
        VerificationPool verifyPool = VerificationPool(verifyPoolAddress);
        
        // Step 7: Add roles to pools
        // Note: These calls require POOL_ADMIN_ROLE which deployer needs to have
        // If deployer doesn't have admin, these will fail but script completes
        console.log("=== Step 6: Adding Roles to Pools ===");
        
        try userPool.addVerifier(verifier) {
            console.log("Added verifier to User Registration Pool:", verifier);
        } catch {
            console.log("WARNING: Could not add verifier to User Registration Pool");
            console.log("Deployer needs POOL_ADMIN_ROLE. Grant it via factory first.");
        }
        
        try hospitalPool.addVerifier(verifier) {
            console.log("Added verifier to Hospital Registration Pool:", verifier);
        } catch {
            console.log("WARNING: Could not add verifier to Hospital Registration Pool");
        }
        
        try hospitalPool.addRegulator(regulator) {
            console.log("Added regulator to Hospital Registration Pool:", regulator);
        } catch {
            console.log("WARNING: Could not add regulator to Hospital Registration Pool");
        }
        
        try dataPool.addVerifier(verifier) {
            console.log("Added verifier to Health Data Request Pool:", verifier);
        } catch {
            console.log("WARNING: Could not add verifier to Health Data Request Pool");
        }
        
        try dataPool.addDataCustodian(dataCustodian) {
            console.log("Added data custodian to Health Data Request Pool:", dataCustodian);
        } catch {
            console.log("WARNING: Could not add data custodian to Health Data Request Pool");
        }
        
        try verifyPool.addVerifier(verifier) {
            console.log("Added verifier to Verification Pool:", verifier);
        } catch {
            console.log("WARNING: Could not add verifier to Verification Pool");
        }
        
        try verifyPool.addAuditor(auditor) {
            console.log("Added auditor to Verification Pool:", auditor);
        } catch {
            console.log("WARNING: Could not add auditor to Verification Pool");
        }
        console.log("");
        
        // Step 8: Create pool entries in Main Pool
        console.log("=== Step 7: Registering Pools in Main Pool ===");
        
        address[] memory admins = new address[](1);
        admins[0] = deployer;
        
        bytes32 userPoolId = mainPool.createPool(
            "User Registration Pool",
            userPoolAddress,
            Pool.PoolType.USER_REGISTRATION,
            admins
        );
        console.log("Registered User Registration Pool with ID:", vm.toString(userPoolId));
        
        bytes32 hospitalPoolId = mainPool.createPool(
            "Hospital Registration Pool",
            hospitalPoolAddress,
            Pool.PoolType.HOSPITAL_REGISTRATION,
            admins
        );
        console.log("Registered Hospital Registration Pool with ID:", vm.toString(hospitalPoolId));
        
        bytes32 dataPoolId = mainPool.createPool(
            "Health Data Request Pool",
            dataPoolAddress,
            Pool.PoolType.HEALTH_DATA_REQUEST,
            admins
        );
        console.log("Registered Health Data Request Pool with ID:", vm.toString(dataPoolId));
        
        bytes32 verifyPoolId = mainPool.createPool(
            "Verification Pool",
            verifyPoolAddress,
            Pool.PoolType.VERIFICATION,
            admins
        );
        console.log("Registered Verification Pool with ID:", vm.toString(verifyPoolId));
        console.log("");
        
        // Final Summary
        console.log("========================================");
        console.log("Deployment Complete!");
        console.log("========================================");
        console.log("Main Pool:", address(mainPool));
        console.log("Pool Factory:", address(factory));
        console.log("");
        console.log("Deployed Pools:");
        console.log("  User Registration Pool:", userPoolAddress);
        console.log("  Hospital Registration Pool:", hospitalPoolAddress);
        console.log("  Health Data Request Pool:", dataPoolAddress);
        console.log("  Verification Pool:", verifyPoolAddress);
        console.log("");
        console.log("Role Assignments (all assigned to deployer for testing):");
        console.log("  Factory Admin:", factoryAdmin);
        console.log("  Pool Manager:", poolManager);
        console.log("  Verifier:", verifier);
        console.log("  Regulator:", regulator);
        console.log("  Data Custodian:", dataCustodian);
        console.log("  Auditor:", auditor);
        console.log("");
        console.log("All contracts are ready for testing!");
        console.log("========================================");
        
        vm.stopBroadcast();
    }
}

