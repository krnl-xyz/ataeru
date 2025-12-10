# Pool System Test Suite

Comprehensive test suite for the Ataeru health data pool management system.

## Test Files

### 1. Pool.t.sol
Tests for the main Pool registry contract.

**Coverage:**
- ✅ Pool initialization
- ✅ Pool creation with administrators
- ✅ Pool status management (ACTIVE, SUSPENDED, INACTIVE, DEPRECATED)
- ✅ Administrator management (add/remove)
- ✅ Request processing tracking
- ✅ Pool queries (by type, by admin, all pools)
- ✅ Access control enforcement
- ✅ Edge cases and error handling

**Test Count:** 18 tests

### 2. UserRegistrationPool.t.sol
Tests for user registration and verification.

**Coverage:**
- ✅ User registration request submission
- ✅ Multi-verifier approval process
- ✅ Automatic approval at threshold (2 verifiers)
- ✅ Request rejection by admin
- ✅ Pending request management
- ✅ Duplicate registration prevention
- ✅ Request expiry (3 days)
- ✅ Verifier management
- ✅ Multiple concurrent registrations

**Test Count:** 15 tests

### 3. HospitalRegistrationPool.t.sol
Tests for hospital registration with regulatory compliance.

**Coverage:**
- ✅ Hospital registration submission
- ✅ Two-stage approval process (Technical → Regulatory)
- ✅ Verifier approval (3 verifiers required)
- ✅ Regulatory approval process
- ✅ Status transitions (PENDING → UNDER_REVIEW → APPROVED)
- ✅ Request rejection at any stage
- ✅ Pending request tracking
- ✅ Request expiry and review period extension
- ✅ Role management (verifiers and regulators)
- ✅ Documentation and license verification

**Test Count:** 19 tests

### 4. HealthDataRequestPool.t.sol
Tests for health data access requests with owner consent.

**Coverage:**
- ✅ Data access request submission
- ✅ Owner consent requirement
- ✅ Verifier approval process (2 verifiers)
- ✅ Access grant creation
- ✅ Time-limited access (30 days)
- ✅ Access revocation
- ✅ Different request types (READ, SHARE, TRANSFER, REVOKE)
- ✅ Different access levels (VIEW_ONLY, LIMITED, FULL)
- ✅ Request tracking by token and requester
- ✅ Request expiry and access expiry
- ✅ Request rejection

**Test Count:** 18 tests

### 5. VerificationPool.t.sol
Tests for general verification system with reputation tracking.

**Coverage:**
- ✅ Verification request submission
- ✅ Verifier approval/rejection
- ✅ Configurable threshold system
- ✅ Auto-completion at threshold
- ✅ Auto-rejection when threshold impossible
- ✅ Verifier reputation system
- ✅ Verifier stats tracking
- ✅ Verifier comments
- ✅ Threshold management
- ✅ Multiple verification types (6 types)
- ✅ Request categorization by type
- ✅ Auditor role
- ✅ Request expiry (5 days)

**Test Count:** 23 tests

### 6. PoolFactory.t.sol
Tests for pool deployment factory.

**Coverage:**
- ✅ Factory initialization
- ✅ User registration pool deployment
- ✅ Hospital registration pool deployment
- ✅ Health data request pool deployment
- ✅ Verification pool deployment
- ✅ Pool tracking and queries
- ✅ Pool deactivation
- ✅ Main pool contract updates
- ✅ Multiple pool deployments
- ✅ Role-based deployment access
- ✅ Proper initialization of deployed pools

**Test Count:** 14 tests

## Running Tests

### Run All Tests
```bash
forge test
```

### Run Specific Test File
```bash
forge test --match-path test/Pool.t.sol
forge test --match-path test/UserRegistrationPool.t.sol
forge test --match-path test/HospitalRegistrationPool.t.sol
forge test --match-path test/HealthDataRequestPool.t.sol
forge test --match-path test/VerificationPool.t.sol
forge test --match-path test/PoolFactory.t.sol
```

### Run Specific Test
```bash
forge test --match-test testCreatePool
```

### Run with Verbosity
```bash
forge test -vv    # Show test results + logs
forge test -vvv   # Show test results + logs + stack traces
forge test -vvvv  # Show test results + logs + stack traces + setup traces
```

### Run with Gas Reporting
```bash
forge test --gas-report
```

### Run with Coverage
```bash
forge coverage
```

### Watch Mode (Re-run on file changes)
```bash
forge test --watch
```

## Test Statistics

- **Total Test Files:** 6
- **Total Tests:** 107
- **Contracts Tested:** 6
- **Average Tests per Contract:** ~18

## Test Patterns Used

### 1. Setup Pattern
All tests follow a consistent setup pattern:
```solidity
function setUp() public {
    // Deploy contracts
    // Initialize test accounts
    // Setup roles and permissions
}
```

### 2. Event Testing
Tests verify events are emitted correctly:
```solidity
vm.expectEmit(true, true, true, true);
emit EventName(params);
functionCall();
```

### 3. Access Control Testing
Tests verify role-based access:
```solidity
vm.startPrank(unauthorized);
vm.expectRevert();
protectedFunction();
vm.stopPrank();
```

### 4. State Verification
Tests verify state changes:
```solidity
// Check state before
assertEq(stateBefore, expectedBefore);

// Perform action
performAction();

// Check state after
assertEq(stateAfter, expectedAfter);
```

### 5. Time Manipulation
Tests use `vm.warp()` for time-based testing:
```solidity
vm.warp(block.timestamp + 8 days);
vm.expectRevert("Request expired");
```

## Coverage Goals

✅ **Function Coverage:** 100%
✅ **Branch Coverage:** 95%+
✅ **Line Coverage:** 95%+

## Test Categories

### 1. Happy Path Tests
- Normal flow with valid inputs
- Successful completions
- Expected state changes

### 2. Negative Tests
- Invalid inputs
- Unauthorized access
- Duplicate operations
- Empty/zero values

### 3. Edge Case Tests
- Expiry scenarios
- Threshold boundaries
- Multiple concurrent operations
- State transitions

### 4. Integration Tests
- Cross-contract interactions
- Complete workflows
- Multiple actors

## Common Test Utilities

### Make Addresses
```solidity
address user = makeAddr("user");
```

### Pranking (Simulating Caller)
```solidity
vm.prank(user);        // Next call only
vm.startPrank(user);   // All subsequent calls
vm.stopPrank();        // Stop pranking
```

### Time Travel
```solidity
vm.warp(timestamp);    // Set block.timestamp
vm.roll(blockNumber);  // Set block.number
```

### Expect Revert
```solidity
vm.expectRevert("Error message");
vm.expectRevert();  // Any revert
```

## CI/CD Integration

### GitHub Actions Example
```yaml
- name: Run tests
  run: forge test --gas-report

- name: Check coverage
  run: forge coverage --report lcov

- name: Upload coverage
  uses: codecov/codecov-action@v3
```

## Best Practices Followed

1. ✅ **Clear Test Names:** Descriptive test function names
2. ✅ **AAA Pattern:** Arrange, Act, Assert
3. ✅ **One Assertion Per Test:** Focus on single behavior
4. ✅ **Test Isolation:** Each test is independent
5. ✅ **Comprehensive Coverage:** Happy path, negative, edge cases
6. ✅ **Event Verification:** All events are tested
7. ✅ **Access Control Testing:** All roles tested
8. ✅ **State Verification:** Before and after checks
9. ✅ **Clean Code:** Follows AmaliTech clean code handbook
10. ✅ **Documentation:** Clear comments and structure

## Debugging Failed Tests

### Get Stack Traces
```bash
forge test --match-test testName -vvvv
```

### Get Gas Usage
```bash
forge test --match-test testName --gas-report
```

### Debug Specific Test
```bash
forge test --debug testName
```

## Adding New Tests

When adding new tests:

1. Follow existing naming conventions
2. Add to appropriate test file
3. Include setup in `setUp()` function
4. Test happy path first
5. Add negative tests
6. Add edge case tests
7. Verify events are emitted
8. Check access control
9. Update this README

## Continuous Integration

Tests are automatically run on:
- Every commit
- Every pull request
- Before deployment

Required:
- ✅ All tests must pass
- ✅ No linter errors
- ✅ Gas usage within limits
- ✅ Coverage above threshold

## Future Enhancements

- [ ] Fuzz testing for critical functions
- [ ] Invariant testing for state consistency
- [ ] Gas optimization tests
- [ ] Integration tests with Hospital and SynNFT contracts
- [ ] Deployment and upgrade tests
- [ ] Performance benchmarks



