# Ataeru: Hospital & Patient Data Minting Prototype

Ataeru is a prototype platform that demonstrates how blockchain technology can revolutionize hospital systems, patient data management, and healthcare-related activities such as donation, surrogacy, and hospital surveys. This project showcases a decentralized approach to securely minting, verifying, and interacting with hospital and patient data, paving the way for transparent, permissionless, and privacy-preserving healthcare solutions.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [How KRNL is Used](#how-krnl-is-used)
- [Setup & Running Locally](#setup--running-locally)
- [License](#license)

---

## Overview

Ataeru enables hospitals, patients, and donors to interact with healthcare data on-chain. The system supports:

- Minting and verifying hospital and patient data
- Donor and surrogacy registration
- Hospital surveys and quality reports
- Permissionless marketplace for healthcare data

This prototype demonstrates how hospital systems can migrate to a blockchain-powered backend, unlocking new possibilities for data integrity, transparency, and interoperability.

## Features

- **Hospital & Patient Data Minting:** Securely mint and verify hospital and patient records on-chain.
- **Donor & Surrogacy Support:** Register as a donor or surrogate, with on-chain verification.
- **Hospital Surveys:** Collect and store hospital survey data, such as HCAHPS, in a tamper-proof way.
- **Permissionless Marketplace:** (Prototype) Buy and sell healthcare data in a fair, decentralized marketplace.
- **KRNL Integration:** Leverages the KRNL protocol for secure, programmable access control and kernel execution.

## Project Structure

```
├── contract/           # Solidity smart contracts (KRNL, EntryPoint, marketplace, etc.)
├── hospital-server/    # Node.js/Express backend for hospital data, surveys, and APIs
├── frontend/           # Next.js frontend for user interaction
├── docker-compose.yml  # Orchestrates local development (frontend, backend, db)
└── README.md           # This file
```

### 1. Smart Contracts (`contract/`)

- **EntryPoint.sol:** Main entry for hospital, patient, and donor registration, verification, and marketplace logic.
- **Other contracts:** Marketplace, rewards, and supporting data structures.

- **Token Authority:** 0x1E5C6a61c62AD5574E99ec20697653938dc9eae1
- **EntryPoint Address (sepolia):** 0xc2F74398A781A0409dB7e1ED55AF460CF9831081

### 2. Hospital Server (`hospital-server/`)

- **Stack:** Node.js, Express, Prisma, PostgreSQL
- **Purpose:** REST API for hospital facilities, quality reports, and survey data. Handles data ingestion and exposes endpoints for the frontend and smart contracts.
- **Endpoints:** `/api/facilities` for hospital data, verification, and search.
- **Models:** Facility, QualityReport, HcahpsHospitalSurvey, HospitalInformation (see `prisma/schema.prisma`).

### 3. Frontend (`frontend/`)

- **Stack:** Next.js, React, ethers, krnl-sdk
- **Purpose:** User interface for hospitals, patients, and donors to interact with the system. Handles wallet connections, contract interactions, and KRNL kernel execution.
- **Key files:** `src/lib/krnl.ts` (KRNL integration), `src/contract/abi/entryPoint.json` (contract ABI).

## How KRNL is Used

KRNL is a programmable access control and kernel execution protocol that enables secure, flexible, and auditable interactions with smart contracts.

In Ataeru:

- The **frontend** uses the `krnl-sdk` to construct and execute kernel payloads, which encapsulate access control logic and data verification for sensitive operations (e.g., hospital verification, donor registration).
- The **smart contracts** (notably `KRNL.sol` and `EntryPoint.sol`) require a valid `KrnlPayload` for protected functions. This payload is generated and signed off-chain (via KRNL), then verified on-chain for authenticity and authorization.
- This approach allows for complex, programmable access policies and off-chain computation, while maintaining on-chain security guarantees.

**Example (see `frontend/src/lib/krnl.ts`):**

- The frontend calls `provider.executeKernels(...)` to generate a `KrnlPayload`.
- The payload is submitted to the contract's `verify` function, which checks signatures and access rights before allowing sensitive actions (e.g., hospital verification).

## Setup & Running Locally

### Prerequisites

- Docker & Docker Compose
- Node.js (for local development outside Docker)

### Quick Start (with Docker Compose)

```bash
docker-compose up --build
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:3001](http://localhost:3001)
- PostgreSQL: [localhost:5432](localhost:5432)

### Manual Setup

1. **Install dependencies:**
   - `cd contract && <install deps>` (e.g., Foundry, npm, etc.)
   - `cd hospital-server && npm install`
   - `cd frontend && npm install`
2. **Configure environment variables** as needed (see `.env` files in each directory).
3. **Run services:**
   - Start PostgreSQL (or use Docker)
   - `cd hospital-server && npm run dev`
   - `cd frontend && npm run dev`

## License

MIT (or specify your license here)
