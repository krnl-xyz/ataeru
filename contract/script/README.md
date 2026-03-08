# Deployment and Management Scripts

This directory contains Foundry scripts for deploying and managing the Ataeru contract system.

## Prerequisites

1. Set up your `.env` file with the following variables:
```bash
PRIVATE_KEY=your_private_key_here
RPC_URL=your_rpc_url_here  # Optional, defaults to Anvil
```

## Scripts

### 1. Deploy.s.sol - Main Deployment Script

Deploys the core contracts (Main Pool and Pool Factory).

**Usage:**
```bash
forge script script/Deploy.s.sol:DeployScript --rpc-url $RPC_URL --broadcast --verify
```

**Optional Environment Variables:**
- `HOSPITAL_CONTRACT`: Address of the Hospital contract (optional)
- `SYN_NFT_CONTRACT`: Address of the SynNFT contract (optional)

If both optional contracts are provided, the script will also deploy all pool types.

### 2. DeployPools.s.sol - Deploy Individual Pools

Deploys pools using an existing Pool Factory.

**Usage:**
```bash
forge script script/DeployPools.s.sol:DeployPoolsScript --rpc-url $RPC_URL --broadcast
```

**Required Environment Variables:**
- `FACTORY_ADDRESS`: Address of the deployed PoolFactory

**Optional Environment Variables:**
- `HOSPITAL_CONTRACT`: Address of the Hospital contract
- `SYN_NFT_CONTRACT`: Address of the SynNFT contract
- `VERIFICATION_THRESHOLD`: Threshold for verification pool (default: 2)

### 3. AddRoles.s.sol - Add Factory Admins and Pool Managers

Grants factory admin and pool manager roles.

**Usage:**
```bash
forge script script/AddRoles.s.sol:AddRolesScript --rpc-url $RPC_URL --broadcast
```

**Required Environment Variables:**
- `FACTORY_ADDRESS`: Address of the deployed PoolFactory

**Optional Environment Variables:**
- `FACTORY_ADMIN`: Address to grant FACTORY_ADMIN_ROLE
- `POOL_MANAGER`: Address to grant POOL_MANAGER_ROLE

### 4. AddVerifiers.s.sol - Add Verifiers to Pools

Adds verifiers to all pool types that require them.

**Usage:**
```bash
forge script script/AddVerifiers.s.sol:AddVerifiersScript --rpc-url $RPC_URL --broadcast
```

**Required Environment Variables:**
- `VERIFIERS`: Comma-separated list of verifier addresses
  Example: `VERIFIERS=0x123...,0x456...,0x789...`

**Optional Environment Variables (at least one required):**
- `USER_POOL_ADDRESS`: Address of UserRegistrationPool
- `HOSPITAL_POOL_ADDRESS`: Address of HospitalRegistrationPool
- `DATA_POOL_ADDRESS`: Address of HealthDataRequestPool
- `VERIFY_POOL_ADDRESS`: Address of VerificationPool

### 5. AddRegulators.s.sol - Add Regulators to Hospital Pool

Adds regulatory approvers to the Hospital Registration Pool.

**Usage:**
```bash
forge script script/AddRegulators.s.sol:AddRegulatorsScript --rpc-url $RPC_URL --broadcast
```

**Required Environment Variables:**
- `HOSPITAL_POOL_ADDRESS`: Address of HospitalRegistrationPool
- `REGULATORS`: Comma-separated list of regulator addresses
  Example: `REGULATORS=0x123...,0x456...`

### 6. AddDataCustodians.s.sol - Add Data Custodians

Adds data custodians to the Health Data Request Pool.

**Usage:**
```bash
forge script script/AddDataCustodians.s.sol:AddDataCustodiansScript --rpc-url $RPC_URL --broadcast
```

**Required Environment Variables:**
- `DATA_POOL_ADDRESS`: Address of HealthDataRequestPool
- `DATA_CUSTODIANS`: Comma-separated list of data custodian addresses
  Example: `DATA_CUSTODIANS=0x123...,0x456...`

### 7. AddAuditors.s.sol - Add Auditors to Verification Pool

Adds auditors to the Verification Pool.

**Usage:**
```bash
forge script script/AddAuditors.s.sol:AddAuditorsScript --rpc-url $RPC_URL --broadcast
```

**Required Environment Variables:**
- `VERIFY_POOL_ADDRESS`: Address of VerificationPool
- `AUDITORS`: Comma-separated list of auditor addresses
  Example: `AUDITORS=0x123...,0x456...`

## Complete Deployment Workflow

### Step 1: Deploy Core Contracts
```bash
forge script script/Deploy.s.sol:DeployScript --rpc-url $RPC_URL --broadcast --verify
```

### Step 2: Deploy Pools (if not done in step 1)
```bash
export FACTORY_ADDRESS=<factory_address_from_step_1>
forge script script/DeployPools.s.sol:DeployPoolsScript --rpc-url $RPC_URL --broadcast
```

### Step 3: Add Administrators
```bash
export FACTORY_ADDRESS=<factory_address>
export FACTORY_ADMIN=<admin_address>
export POOL_MANAGER=<manager_address>
forge script script/AddRoles.s.sol:AddRolesScript --rpc-url $RPC_URL --broadcast
```

### Step 4: Add Verifiers
```bash
export USER_POOL_ADDRESS=<user_pool_address>
export HOSPITAL_POOL_ADDRESS=<hospital_pool_address>
export DATA_POOL_ADDRESS=<data_pool_address>
export VERIFY_POOL_ADDRESS=<verify_pool_address>
export VERIFIERS=0x123...,0x456...,0x789...
forge script script/AddVerifiers.s.sol:AddVerifiersScript --rpc-url $RPC_URL --broadcast
```

### Step 5: Add Regulators
```bash
export HOSPITAL_POOL_ADDRESS=<hospital_pool_address>
export REGULATORS=0x123...,0x456...
forge script script/AddRegulators.s.sol:AddRegulatorsScript --rpc-url $RPC_URL --broadcast
```

### Step 6: Add Data Custodians
```bash
export DATA_POOL_ADDRESS=<data_pool_address>
export DATA_CUSTODIANS=0x123...,0x456...
forge script script/AddDataCustodians.s.sol:AddDataCustodiansScript --rpc-url $RPC_URL --broadcast
```

### Step 7: Add Auditors
```bash
export VERIFY_POOL_ADDRESS=<verify_pool_address>
export AUDITORS=0x123...,0x456...
forge script script/AddAuditors.s.sol:AddAuditorsScript --rpc-url $RPC_URL --broadcast
```

## Role Summary

### PoolFactory
- `FACTORY_ADMIN_ROLE`: Can deploy new pools

### Pool (Main Pool Contract)
- `POOL_MANAGER_ROLE`: Can create pools and manage pool status
- `POOL_ADMIN_ROLE`: Pool-specific administrators

### UserRegistrationPool
- `VERIFIER_ROLE`: Can verify user registration requests
- `POOL_ADMIN_ROLE`: Can add/remove verifiers and reject requests

### HospitalRegistrationPool
- `VERIFIER_ROLE`: Can verify hospital registration requests
- `REGULATORY_ROLE`: Can grant regulatory approval
- `POOL_ADMIN_ROLE`: Can add/remove verifiers/regulators and reject requests

### HealthDataRequestPool
- `VERIFIER_ROLE`: Can verify data access requests
- `DATA_CUSTODIAN_ROLE`: Can manage data access
- `POOL_ADMIN_ROLE`: Can add/remove verifiers/custodians and reject requests

### VerificationPool
- `VERIFIER_ROLE`: Can approve/reject verification requests
- `AUDITOR_ROLE`: Can audit verification processes
- `POOL_ADMIN_ROLE`: Can add/remove verifiers/auditors and update threshold

## Testing Scripts Locally

To test scripts locally with Anvil:

```bash
# Start Anvil
anvil

# In another terminal, run scripts with local RPC
forge script script/Deploy.s.sol:DeployScript --rpc-url http://localhost:8545 --broadcast
```

## Security Notes

1. **Never commit your `.env` file** - It contains sensitive private keys
2. **Use separate keys for different environments** - Don't reuse mainnet keys
3. **Verify all addresses** before running scripts in production
4. **Test thoroughly on testnets** before mainnet deployment
5. **Review role assignments** carefully - Incorrect roles can compromise security

