# Subscription API Documentation

## Overview

The Subscription API allows users to manage their subscriptions through Stripe integration. The system supports monthly and yearly plans for both regular users (`USER`) and medical facilities (`MEDICAL_FACILITY`).

**Base URL**: `/api/subscriptions`

All endpoints except `/plans` require authentication via Bearer token in the Authorization header.

---

## Subscription Plans

The system supports four subscription plans with automatic credit allocation:

| Plan ID            | User Type          | Billing Period | Credits Per Period | Description                                                                      |
| ------------------ | ------------------ | -------------- | ------------------ | -------------------------------------------------------------------------------- |
| `USER_MONTHLY`     | `USER`             | Monthly        | 120,000 credits    | Monthly subscription for regular users (configurable via `CREDITS_USER_MONTHLY`) |
| `USER_YEARLY`      | `USER`             | Yearly         | 1,440,000 credits  | Yearly subscription for regular users (configurable via `CREDITS_USER_YEARLY`)   |
| `HOSPITAL_MONTHLY` | `MEDICAL_FACILITY` | Monthly        | 500,000 credits    | Monthly subscription for hospitals (configurable via `CREDITS_HOSPITAL_MONTHLY`) |
| `HOSPITAL_YEARLY`  | `MEDICAL_FACILITY` | Yearly         | 6,000,000 credits  | Yearly subscription for hospitals (configurable via `CREDITS_HOSPITAL_YEARLY`)   |

**Credit Allocation**: Credits are automatically allocated when a subscription is activated and on each renewal. Credits do not expire and accumulate over time.

---

## Endpoints

### 1. Get Available Plans

**GET** `/api/subscriptions/plans`

**Authentication**: Not required (Public endpoint)

**Description**: Returns all available subscription plans.

**Response**:

```json
{
  "plans": [
    {
      "id": "USER_MONTHLY",
      "priceId": "price_xxxxx",
      "userType": "USER",
      "credits": 120000
    },
    {
      "id": "USER_YEARLY",
      "priceId": "price_xxxxx",
      "userType": "USER",
      "credits": 1440000
    },
    {
      "id": "HOSPITAL_MONTHLY",
      "priceId": "price_xxxxx",
      "userType": "MEDICAL_FACILITY",
      "credits": 500000
    },
    {
      "id": "HOSPITAL_YEARLY",
      "priceId": "price_xxxxx",
      "userType": "MEDICAL_FACILITY",
      "credits": 6000000
    }
  ]
}
```

**Example**:

```javascript
const response = await fetch('/api/subscriptions/plans');
const data = await response.json();
console.log(data.plans);
```

---

### 2. Create Checkout Session

**POST** `/api/subscriptions/checkout`

**Authentication**: Required (Bearer token)

**Description**: Creates a new Stripe checkout session for each request, generating a unique payment URL. This ensures proper customer mapping and prevents duplicate subscriptions. The checkout session is tied to a specific Stripe customer that's mapped to the user.

**Key Features**:

- **Dynamic Session Generation**: Each request creates a new, unique checkout session
- **Duplicate Prevention**: Checks for existing active subscriptions before creating a new checkout session
- **Customer Mapping**: Maps users to Stripe customers using email and metadata to ensure one user = one customer
- **Active Subscription Check**: Prevents users from subscribing multiple times

**Request Body**:

```json
{
  "plan": "USER_MONTHLY" // Required: One of USER_MONTHLY, USER_YEARLY, HOSPITAL_MONTHLY, HOSPITAL_YEARLY
}
```

**Note**: The `plan` parameter is required and determines which subscription plan the user will subscribe to. The system validates that the plan matches the user type.

**Response** (200):

```json
{
  "sessionId": "cs_test_a1b2c3d4e5f6g7h8i9j0",
  "url": "https://checkout.stripe.com/pay/cs_test_a1b2c3d4e5f6g7h8i9j0",
  "message": "Redirect user to this URL to complete subscription"
}
```

**Error Responses**:

- `400 Bad Request`: Invalid plan, plan doesn't match user type, or missing plan parameter
- `401 Unauthorized`: Missing or invalid authentication token
- `404 Not Found`: User not found
- `409 Conflict`: User already has an active subscription (prevents duplicate subscriptions)
  ```json
  {
    "message": "You already have an active subscription. Please cancel your current subscription before starting a new one.",
    "code": "DUPLICATE_SUBSCRIPTION",
    "subscription": {
      "plan": "USER_MONTHLY",
      "status": "ACTIVE",
      "currentPeriodEnd": "2024-12-31T23:59:59Z"
    }
  }
  ```
- `500 Internal Server Error`: Missing or invalid Price ID configuration

**Example**:

```javascript
const response = await fetch('/api/subscriptions/checkout', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({
    plan: 'USER_MONTHLY',
  }),
});

const data = await response.json();

// Redirect user to Stripe checkout
if (data.url) {
  window.location.href = data.url;
}
```

**Duplicate Subscription Prevention**:

The system prevents duplicate subscriptions through multiple checks:

1. **Database Check**: Checks if the user already has an active subscription in the database
2. **Stripe Customer Check**: Verifies if the mapped Stripe customer already has an active subscription
3. **User-Customer Mapping**: Ensures one user = one Stripe customer by:
   - Checking for existing customers with the same email
   - Using metadata (`userId`) to track the relationship
   - Reusing existing Stripe customers when possible

If a user tries to subscribe while having an active subscription, they will receive a `409 Conflict` error with details about their current subscription.

**Success Redirect**: After successful payment, user is redirected to:
`{FRONTEND_URL}/subscription/success?session_id={CHECKOUT_SESSION_ID}`

**Cancel Redirect**: If user cancels, they are redirected to:
`{FRONTEND_URL}/subscription/cancel`

---

### 3. Get My Subscription

**GET** `/api/subscriptions/me`

**Authentication**: Required (Bearer token)

**Description**: Returns the current user's subscription details including status, plan, and billing period information.

**Response** (200):

```json
{
  "subscription": {
    "id": "uuid",
    "userId": "uuid",
    "stripeCustomerId": "cus_xxxxx",
    "stripeSubscriptionId": "sub_xxxxx",
    "plan": "USER_MONTHLY",
    "status": "ACTIVE",
    "currentPeriodStart": "2024-01-01T00:00:00.000Z",
    "currentPeriodEnd": "2024-02-01T00:00:00.000Z",
    "cancelAtPeriodEnd": false,
    "canceledAt": null,
    "trialEnd": null,
    "priceId": "price_xxxxx",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "userType": "USER"
    },
    "stripeDetails": {
      // Full Stripe subscription object
    }
  }
}
```

**Subscription Status Values**:

- `ACTIVE`: Subscription is active and paid
- `TRIALING`: Subscription is in trial period
- `CANCELED`: Subscription has been canceled
- `PAST_DUE`: Payment failed, subscription is past due
- `UNPAID`: Payment failed multiple times
- `INCOMPLETE`: Subscription payment incomplete
- `INCOMPLETE_EXPIRED`: Subscription incomplete and expired

**Error Responses**:

- `401 Unauthorized`: Missing or invalid authentication token
- `404 Not Found`: No subscription found for user

**Example**:

```javascript
const response = await fetch('/api/subscriptions/me', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const data = await response.json();

if (data.subscription) {
  console.log('Status:', data.subscription.status);
  console.log('Plan:', data.subscription.plan);
  console.log('Next billing:', data.subscription.currentPeriodEnd);
}
```

---

### 4. Cancel Subscription

**POST** `/api/subscriptions/cancel`

**Authentication**: Required (Bearer token)

**Description**: Cancels the user's subscription at the end of the current billing period. The user retains access until the period ends.

**Request Body**: None required

**Response** (200):

```json
{
  "message": "Subscription will be canceled at the end of the billing period",
  "subscription": {
    // Stripe subscription object
  }
}
```

**Error Responses**:

- `401 Unauthorized`: Missing or invalid authentication token
- `404 Not Found`: No active subscription found

**Example**:

```javascript
const response = await fetch('/api/subscriptions/cancel', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const data = await response.json();
console.log(data.message); // Subscription will be canceled at the end of the billing period
```

**Note**: After cancellation, `cancelAtPeriodEnd` will be `true` and the subscription status remains `ACTIVE` until the period ends.

---

### 5. Reactivate Subscription

**POST** `/api/subscriptions/reactivate`

**Authentication**: Required (Bearer token)

**Description**: Reactivates a subscription that was scheduled to cancel. Only works if subscription was canceled (cancelAtPeriodEnd = true) but hasn't ended yet.

**Request Body**: None required

**Response** (200):

```json
{
  "message": "Subscription reactivated",
  "subscription": {
    // Stripe subscription object
  }
}
```

**Error Responses**:

- `401 Unauthorized`: Missing or invalid authentication token
- `404 Not Found`: No subscription found

**Example**:

```javascript
const response = await fetch('/api/subscriptions/reactivate', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const data = await response.json();
console.log(data.message); // Subscription reactivated
```

---

### 6. Update Subscription Plan

**PUT** `/api/subscriptions/plan`

**Authentication**: Required (Bearer token)

**Description**: Changes the subscription plan (e.g., from monthly to yearly, or vice versa). Stripe automatically prorates the billing.

**Request Body**:

```json
{
  "plan": "USER_YEARLY" // Must match user type and be different from current plan
}
```

**Response** (200):

```json
{
  "message": "Subscription plan updated successfully"
}
```

**Error Responses**:

- `400 Bad Request`: Invalid plan or plan doesn't match user type
- `401 Unauthorized`: Missing or invalid authentication token
- `404 Not Found`: No active subscription found

**Example**:

```javascript
const response = await fetch('/api/subscriptions/plan', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({
    plan: 'USER_YEARLY', // Upgrade from monthly to yearly
  }),
});

const data = await response.json();
console.log(data.message); // Subscription plan updated successfully
```

**Note**:

- Proration is handled automatically by Stripe
- Plan must match the user's type (USER vs MEDICAL_FACILITY)
- Only works with active subscriptions

---

## Subscription Flow for Frontend

### 1. Initial Subscription Flow

```javascript
// Step 1: Get available plans
const plansResponse = await fetch('/api/subscriptions/plans');
const { plans } = await plansResponse.json();

// Filter plans based on user type
const userPlans = plans.filter(
  (plan) => plan.userType === currentUser.userType,
);

// Step 2: User selects a plan and clicks subscribe
const checkoutResponse = await fetch('/api/subscriptions/checkout', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({
    plan: selectedPlanId, // e.g., 'USER_MONTHLY'
  }),
});

const { url } = await checkoutResponse.json();

// Step 3: Redirect to Stripe checkout
window.location.href = url;

// Step 4: Handle success redirect
// On /subscription/success page:
const urlParams = new URLSearchParams(window.location.search);
const sessionId = urlParams.get('session_id');

// Verify subscription was created
const subscriptionResponse = await fetch('/api/subscriptions/me', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const { subscription } = await subscriptionResponse.json();
if (subscription.status === 'ACTIVE' || subscription.status === 'TRIALING') {
  // Success! Redirect to dashboard
}
```

### 2. Check Subscription Status

```javascript
// Check if user has active subscription before allowing access
async function checkSubscription() {
  try {
    const response = await fetch('/api/subscriptions/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 404) {
      // No subscription - redirect to subscription page
      return false;
    }

    const { subscription } = await response.json();

    const activeStatuses = ['ACTIVE', 'TRIALING'];
    const isActive = activeStatuses.includes(subscription.status);

    // Check if subscription period has ended
    const periodEnded = subscription.currentPeriodEnd
      ? new Date(subscription.currentPeriodEnd) < new Date()
      : false;

    return isActive && !periodEnded;
  } catch (error) {
    console.error('Error checking subscription:', error);
    return false;
  }
}

// Usage
const hasAccess = await checkSubscription();
if (!hasAccess) {
  // Redirect to subscription page
  window.location.href = '/subscription';
}
```

### 3. Manage Subscription

```javascript
// Cancel subscription
async function cancelSubscription() {
  const response = await fetch('/api/subscriptions/cancel', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (response.ok) {
    alert('Subscription will be canceled at the end of the billing period');
    // Update UI to show cancellation status
  }
}

// Reactivate subscription
async function reactivateSubscription() {
  const response = await fetch('/api/subscriptions/reactivate', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (response.ok) {
    alert('Subscription reactivated');
    // Update UI
  }
}

// Change plan (monthly ↔ yearly)
async function changePlan(newPlanId) {
  const response = await fetch('/api/subscriptions/plan', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      plan: newPlanId,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    alert('Plan updated successfully');
    // Refresh subscription details
  }
}
```

---

## Error Handling

All endpoints may return standard HTTP error codes:

| Status Code | Meaning                                                |
| ----------- | ------------------------------------------------------ |
| `400`       | Bad Request - Invalid input or plan mismatch           |
| `401`       | Unauthorized - Missing or invalid authentication token |
| `404`       | Not Found - User or subscription not found             |
| `500`       | Internal Server Error - Server-side error              |

**Error Response Format**:

```json
{
  "message": "Error description",
  "error": "Detailed error message (development only)"
}
```

---

## Subscription Protection

**Important**: Without an active subscription, users cannot access:

- Booking endpoints (`/api/bookings/*`)
- Request endpoints (`/api/requests/*`)
- Hospital registration/management (`/api/hospitals/register`, `/api/hospitals/:id`, etc.)
- User preferences (`/api/preferences/*`)
- Treatment preferences (`/api/treatment-preferences/*`)

These endpoints will return `403 Forbidden` with:

```json
{
  "message": "Subscription required. Please subscribe to access this feature.",
  "code": "SUBSCRIPTION_REQUIRED"
}
```

Public endpoints (like viewing hospitals list) do not require subscriptions.

---

## Integration Checklist

- [ ] Set up Stripe account and get API keys
- [ ] Create a Stripe Payment Link in Stripe Dashboard:
  - Go to Stripe Dashboard > Products > Payment Links
  - Create a new Payment Link
  - Add all subscription plans (User Monthly, User Yearly, Hospital Monthly, Hospital Yearly)
  - Copy the Payment Link URL (e.g., `https://buy.stripe.com/test_xxx`)
- [ ] Get Price IDs from your Payment Link products:
  - Each plan in the Payment Link has a Price ID (starts with `price_`)
  - You can find these in Stripe Dashboard > Products > Prices
  - Copy these Price IDs for credit allocation mapping
- [ ] Update `.env` with Stripe keys and Payment Link:
  - `STRIPE_PAYMENT_LINK=https://buy.stripe.com/test_8x24gy4OX195cJ3cgl7ss00` (your Payment Link URL)
  - `STRIPE_PRICE_USER_MONTHLY=price_xxxxx` (Price ID from Payment Link products)
  - `STRIPE_PRICE_USER_YEARLY=price_xxxxx` (Price ID from Payment Link products)
  - `STRIPE_PRICE_HOSPITAL_MONTHLY=price_xxxxx` (Price ID from Payment Link products)
  - `STRIPE_PRICE_HOSPITAL_YEARLY=price_xxxxx` (Price ID from Payment Link products)
- [ ] Configure credit allocation amounts in `.env` (optional, uses defaults if not set):
  - `CREDITS_USER_MONTHLY=120000`
  - `CREDITS_USER_YEARLY=1440000`
  - `CREDITS_HOSPITAL_MONTHLY=500000`
  - `CREDITS_HOSPITAL_YEARLY=6000000`
- [ ] Set up Stripe webhook endpoint
- [ ] Configure webhook events in Stripe Dashboard
- [ ] Update frontend URLs in Stripe checkout redirect URLs
- [ ] Implement subscription status check in frontend
- [ ] Add subscription gate to protected routes
- [ ] Create subscription management UI
- [ ] Implement credit balance display in frontend
- [ ] Handle webhook events for subscription updates
- [ ] Run database migration: `npx prisma migrate dev`

---

## Notes

1. **Stripe Customer Creation**: A Stripe customer is automatically created on first subscription attempt
2. **Proration**: Plan changes are automatically prorated by Stripe
3. **Cancellation**: Subscriptions cancel at period end, not immediately
4. **Trial Period**: New subscriptions start with `TRIALING` status if configured
5. **Webhook Events**: Server automatically updates subscription status via Stripe webhooks
6. **User Type Validation**: Plans are validated against user type (USER vs MEDICAL_FACILITY)
7. **Credit Allocation**: Credits are automatically allocated when subscriptions are activated or renewed
8. **Credit Accumulation**: Credits do not expire and accumulate over time
9. **Credit Defaults**: Default credit amounts are:
   - USER_MONTHLY: 120,000 credits
   - USER_YEARLY: 1,440,000 credits (12 months worth)
   - HOSPITAL_MONTHLY: 500,000 credits
   - HOSPITAL_YEARLY: 6,000,000 credits (12 months worth)

---

## Example Frontend Implementation

```javascript
// subscriptionService.js
class SubscriptionService {
  constructor(apiUrl, token) {
    this.apiUrl = apiUrl;
    this.token = token;
  }

  async getPlans() {
    const response = await fetch(`${this.apiUrl}/subscriptions/plans`);
    return response.json();
  }

  async getMySubscription() {
    const response = await fetch(`${this.apiUrl}/subscriptions/me`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (response.status === 404) {
      return null;
    }

    return response.json();
  }

  async createCheckout(planId) {
    const response = await fetch(`${this.apiUrl}/subscriptions/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({ plan: planId }),
    });

    return response.json();
  }

  async cancel() {
    const response = await fetch(`${this.apiUrl}/subscriptions/cancel`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    return response.json();
  }

  async reactivate() {
    const response = await fetch(`${this.apiUrl}/subscriptions/reactivate`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    return response.json();
  }

  async updatePlan(planId) {
    const response = await fetch(`${this.apiUrl}/subscriptions/plan`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({ plan: planId }),
    });

    return response.json();
  }

  hasActiveSubscription(subscription) {
    if (!subscription) return false;

    const activeStatuses = ['ACTIVE', 'TRIALING'];
    const isActive = activeStatuses.includes(subscription.status);

    if (!isActive) return false;

    // Check if period has ended
    if (subscription.currentPeriodEnd) {
      return new Date(subscription.currentPeriodEnd) > new Date();
    }

    return true;
  }
}

// Usage
const subscriptionService = new SubscriptionService(
  'http://localhost:3000/api',
  userToken,
);

// Get plans and display
const { plans } = await subscriptionService.getPlans();

// Check subscription status
const subscription = await subscriptionService.getMySubscription();
const hasAccess = subscriptionService.hasActiveSubscription(
  subscription?.subscription,
);

// Subscribe
if (!hasAccess) {
  const { url } = await subscriptionService.createCheckout('USER_MONTHLY');
  window.location.href = url;
}
```

---

---

## Credit System

### Overview

Each subscription automatically allocates credits to the user's account. Credits are allocated:

- **On subscription activation**: Full period credits (monthly or yearly) are allocated immediately
- **On subscription renewal**: Credits are allocated when the billing period renews

### Credit Allocation Rates

Credits can be configured via environment variables:

- `CREDITS_USER_MONTHLY` (default: 120,000)
- `CREDITS_USER_YEARLY` (default: 1,440,000)
- `CREDITS_HOSPITAL_MONTHLY` (default: 500,000)
- `CREDITS_HOSPITAL_YEARLY` (default: 6,000,000)

### Credit Endpoints

#### Get My Credits

**GET** `/api/credits/me`

**Authentication**: Required (Bearer token)

**Description**: Returns the current user's credit balance and recent transactions.

**Response** (200):

```json
{
  "credits": {
    "id": "uuid",
    "userId": "uuid",
    "balance": 120000,
    "totalAllocated": 240000,
    "totalUsed": 120000,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-15T00:00:00.000Z",
    "transactions": [
      {
        "id": "uuid",
        "type": "ALLOCATION",
        "amount": 120000,
        "balanceAfter": 120000,
        "description": "Credits allocated from USER_MONTHLY subscription",
        "referenceId": "sub_xxxxx",
        "createdAt": "2024-01-01T00:00:00.000Z"
      }
    ]
  }
}
```

#### Get Credit Transactions

**GET** `/api/credits/transactions`

**Authentication**: Required (Bearer token)

**Query Parameters**:

- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)
- `type` (optional): Filter by transaction type (`ALLOCATION`, `DEDUCTION`, `REFUND`, `EXPIRATION`)

**Response** (200):

```json
{
  "transactions": [
    {
      "id": "uuid",
      "type": "ALLOCATION",
      "amount": 120000,
      "balanceAfter": 120000,
      "description": "Credits allocated from USER_MONTHLY subscription",
      "referenceId": "sub_xxxxx",
      "metadata": "{\"plan\":\"USER_MONTHLY\"}",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 5,
    "totalPages": 1
  }
}
```

### Credit Transaction Types

- `ALLOCATION`: Credits added from subscription
- `DEDUCTION`: Credits used/spent
- `REFUND`: Credits refunded (e.g., canceled booking)
- `EXPIRATION`: Credits expired (if expiration is implemented)

### Using Credits in Your Application

Credits can be deducted when users perform actions (e.g., booking appointments, making requests). The credit controller exports helper functions:

```typescript
import {
  deductCredits,
  refundCredits,
  hasSufficientCredits,
} from '../controllers/credit.controller';

// Check if user has enough credits
const hasCredits = await hasSufficientCredits(userId, 1000);
if (!hasCredits) {
  return res.status(403).json({ message: 'Insufficient credits' });
}

// Deduct credits
const result = await deductCredits(
  userId,
  1000,
  'Booking appointment',
  bookingId,
  { action: 'booking' },
);

if (result.success) {
  // Proceed with booking
  console.log(`New balance: ${result.newBalance}`);
} else {
  // Handle error
  console.error(result.error);
}

// Refund credits (e.g., on cancellation)
await refundCredits(userId, 1000, 'Booking canceled - refund', bookingId);
```

---

## Support

For issues or questions regarding the subscription API, please contact the development team or refer to the main API documentation.
