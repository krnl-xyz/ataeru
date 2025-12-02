# Pool Management System

This directory contains the specialized pool contracts that manage different types of requests and verifications in the Ataeru health data system.

## Architecture Overview

The pool system follows a hierarchical structure:

```
Pool.sol (Main Pool Contract)
    ├── UserRegistrationPool.sol
    ├── HospitalRegistrationPool.sol
    ├── HealthDataRequestPool.sol
    └── VerificationPool.sol
```

## Main Pool Contract (`Pool.sol`)

The main pool contract acts as a registry and manager for all specialized pools.

### Key Features:
- **Pool Registry**: Tracks all pools by type, address, and administrators
- **Pool Management**: Create, activate, suspend, and deprecate pools
- **Access Control**: Manages pool administrators and permissions
- **Metrics Tracking**: Records pool performance and request statistics

### Pool Types:
1. `USER_REGISTRATION` - User registration requests
2. `HOSPITAL_REGISTRATION` - Hospital registration requests
3. `HEALTH_DATA_REQUEST` - Health data access requests
4. `VERIFICATION` - General verification requests
5. `GENERAL` - Other custom pools

## Specialized Pools

### 1. UserRegistrationPool

Manages user registration and identity verification.

**Features:**
- Submit registration requests with public key and identity hash
- Multi-verifier approval system (threshold: 2)
- 3-day request expiry period
- Tracks registered users

**Flow:**
```
User submits request → Verifiers review → Threshold met → Auto-approval
```

**Key Functions:**
- `submitRegistrationRequest()` - Submit new registration
- `verifyRegistrationRequest()` - Verifier approves request
- `rejectRegistration()` - Admin rejects request
- `isUserRegistered()` - Check registration status

### 2. HospitalRegistrationPool

Manages hospital registration with enhanced security and regulatory compliance.

**Features:**
- Two-stage approval process (Verification → Regulatory Review)
- Higher verification threshold (3 verifiers)
- Extended review period (14 days)
- Regulatory approval requirement
- Document verification support

**Flow:**
```
Hospital submits → Verifiers review (3+) → Moves to regulatory review 
→ Regulatory approval → Final approval
```

**Key Functions:**
- `submitHospitalRegistration()` - Submit hospital registration
- `verifyHospitalRequest()` - Technical verification
- `grantRegulatoryApproval()` - Regulatory approval
- `isHospitalRegistered()` - Check registration status

**Roles:**
- `VERIFIER_ROLE` - Technical verification
- `REGULATORY_ROLE` - Regulatory compliance approval
- `POOL_ADMIN_ROLE` - Pool management

### 3. HealthDataRequestPool

Manages access requests to health data NFTs with owner consent.

**Features:**
- Multiple access levels (VIEW_ONLY, LIMITED, FULL)
- Owner consent requirement
- Time-limited access grants (30 days)
- Request type support (READ, SHARE, TRANSFER, REVOKE)
- Access revocation capability

**Flow:**
```
Requester submits → Owner grants consent → Pool verifies (2+) 
→ Access grant issued → Time-limited access
```

**Access Levels:**
- `NONE` - No access
- `VIEW_ONLY` - Read-only access
- `LIMITED` - Restricted access with limitations
- `FULL` - Full access to data

**Key Functions:**
- `submitDataAccessRequest()` - Request data access
- `grantOwnerConsent()` - Owner approves request
- `verifyDataAccessRequest()` - Verifier reviews
- `revokeAccess()` - Revoke active access grant
- `isAccessActive()` - Check access status

### 4. VerificationPool

General-purpose verification pool for various verification types.

**Features:**
- Multiple verification types (Identity, Document, Credential, etc.)
- Configurable threshold
- Verifier reputation system
- Evidence URI support
- Auditor role for oversight

**Verification Types:**
- `IDENTITY` - Identity verification
- `DOCUMENT` - Document authenticity
- `CREDENTIAL` - Credential validation
- `TRANSACTION` - Transaction verification
- `DATA_INTEGRITY` - Data integrity checks
- `COMPLIANCE` - Compliance verification

**Key Functions:**
- `submitVerificationRequest()` - Submit verification request
- `approveVerification()` - Verifier approves
- `rejectVerification()` - Verifier rejects
- `getVerifierStats()` - View verifier performance

**Reputation System:**
- Approval: +10 reputation
- Rejection: +5 reputation
- Starting reputation: 100

## Integration Guide

### Setting Up Pools

1. **Deploy Main Pool Contract:**
```solidity
Pool pool = new Pool();
pool.initialize();
```

2. **Deploy Specialized Pools:**
```solidity
UserRegistrationPool userPool = new UserRegistrationPool();
userPool.initialize(address(pool), poolId);
```

3. **Register Pool with Main Contract:**
```solidity
bytes32 poolId = pool.createPool(
    "User Registration Pool",
    address(userPool),
    Pool.PoolType.USER_REGISTRATION,
    [admin1, admin2]
);
```

### Managing Verifiers

```solidity
// Add verifier to pool
userPool.addVerifier(verifierAddress);

// Check verifier stats
(total, approved, rejected, reputation, active) = 
    verificationPool.getVerifierStats(verifierAddress);
```

### Request Flow Example

**User Registration:**
```solidity
// 1. User submits
bytes32 requestId = userPool.submitRegistrationRequest(
    publicKey,
    identityHash,
    metadata
);

// 2. Verifiers approve
userPool.verifyRegistrationRequest(requestId);

// 3. Auto-approved at threshold
bool registered = userPool.isUserRegistered(userAddress);
```

## Security Considerations

### Role-Based Access Control
All pools implement OpenZeppelin's AccessControl:
- `DEFAULT_ADMIN_ROLE` - Full control
- `POOL_ADMIN_ROLE` - Pool management
- `VERIFIER_ROLE` - Verification rights
- `REGULATORY_ROLE` - Regulatory approval (hospital pool)
- `DATA_CUSTODIAN_ROLE` - Data management (health data pool)

### Request Expiry
All requests have expiry periods:
- User Registration: 3 days
- Hospital Registration: 7 days initial, 14 days review
- Health Data Access: 7 days
- General Verification: 5 days

### Threshold Requirements
- User Registration: 2 verifiers
- Hospital Registration: 3 verifiers + 1 regulator
- Health Data Access: 2 verifiers + owner consent
- General Verification: Configurable

## Events

All pools emit comprehensive events for off-chain tracking:
- Request submission events
- Verification progress events
- Approval/rejection events
- Status change events
- Admin action events

## Gas Optimization

- Request IDs use keccak256 hashing
- Mappings for O(1) lookups
- Array cleanup for expired requests
- Minimal storage operations

## Upgrade Pattern

All contracts use UUPS (Universal Upgradeable Proxy Standard):
- Upgradeable via `_authorizeUpgrade()`
- Only `DEFAULT_ADMIN_ROLE` can upgrade
- Preserves storage layout across upgrades

## Testing Recommendations

1. **Unit Tests:**
   - Test each pool function independently
   - Verify role-based access control
   - Check threshold logic
   - Test expiry mechanisms

2. **Integration Tests:**
   - Test pool registration with main contract
   - Verify cross-pool communication
   - Test role synchronization

3. **E2E Tests:**
   - Full registration flow
   - Access request to data retrieval
   - Multi-verifier scenarios
   - Edge cases and failures

## Future Enhancements

- [ ] Automated expiry cleanup
- [ ] Batch verification support
- [ ] Dispute resolution mechanism
- [ ] Verifier slashing for malicious behavior
- [ ] Dynamic threshold adjustment
- [ ] Multi-signature requirements for critical actions

