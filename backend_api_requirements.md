# Green Land Capital (GLC) - Backend API Requirements

This document outlines the API endpoints required by the frontend application. It specifies the HTTP methods, URI paths, descriptions, payload requirements, and expected response schemas for each feature module.

---

## 1. Authentication & Security Module

These endpoints handle signup, multi-stage registration (including KYC files), account verification, login, and password recovery.

### 1.1 Register Account (KYC Submission)
*   **Endpoint:** `/api/auth/register`
*   **Method:** `POST`
*   **Content-Type:** `multipart/form-data`
*   **Description:** Submits new user registration data along with scanned KYC files (Aadhaar & PAN).
*   **Request Payload:**
    *   `firstName` (string, required)
    *   `lastName` (string, required)
    *   `email` (string, required, unique)
    *   `phoneCountryCode` (string, required, e.g., `+91`)
    *   `phoneNumber` (string, required, numeric)
    *   `aadhaarNumber` (string, required, 12 digits)
    *   `aadhaarFront` (binary/file, required)
    *   `aadhaarBack` (binary/file, required)
    *   `panNumber` (string, required, 10-char alphanumeric)
    *   `panCopy` (binary/file, required)
*   **Success Response (201 Created):**
    ```json
    {
      "success": true,
      "message": "User registered successfully. Verification code dispatched.",
      "userId": "usr_928374928"
    }
    ```

### 1.2 Verify Security Code
*   **Endpoint:** `/api/auth/verify-code`
*   **Method:** `POST`
*   **Content-Type:** `application/json`
*   **Description:** Verifies the 5-digit OTP sent to the user's email or phone to activate their profile.
*   **Request Payload:**
    ```json
    {
      "userId": "usr_928374928",
      "otpCode": "12345"
    }
    ```
*   **Success Response (200 OK):**
    ```json
    {
      "success": true,
      "message": "Profile activated successfully.",
      "token": "jwt_token_here",
      "user": {
        "userId": "usr_928374928",
        "email": "arjun.v@gmail.com",
        "firstName": "Arjun",
        "lastName": "V"
      }
    }
    ```

### 1.3 Resend Verification Code
*   **Endpoint:** `/api/auth/resend-code`
*   **Method:** `POST`
*   **Content-Type:** `application/json`
*   **Description:** Triggers another OTP SMS/Email dispatch.
*   **Request Payload:**
    ```json
    {
      "userId": "usr_928374928"
    }
    ```
*   **Success Response (200 OK):**
    ```json
    {
      "success": true,
      "message": "A new verification code has been dispatched."
    }
    ```

### 1.4 User Login
*   **Endpoint:** `/api/auth/login`
*   **Method:** `POST`
*   **Content-Type:** `application/json`
*   **Description:** Authenticates users using email or Investor ID.
*   **Request Payload:**
    ```json
    {
      "username": "arjun.v@gmail.com",
      "password": "user_password_hash"
    }
    ```
*   **Success Response (200 OK):**
    ```json
    {
      "success": true,
      "token": "jwt_token_here",
      "user": {
        "userId": "usr_928374928",
        "email": "arjun.v@gmail.com",
        "firstName": "Arjun",
        "lastName": "V",
        "unlockCredits": 3,
        "subscriptionTier": "growth"
      }
    }
    ```

### 1.5 Forgot & Reset Password
*   **Endpoint:** `/api/auth/forgot-password` (triggers email dispatch) & `/api/auth/reset-password`
*   **Methods:** `POST`
*   **Request Payload (Reset):**
    ```json
    {
      "email": "arjun.v@gmail.com",
      "otpCode": "12345",
      "newPassword": "new_secure_password"
    }
    ```
*   **Success Response (200 OK):**
    ```json
    {
      "success": true,
      "message": "Password changed successfully."
    }
    ```

---

## 2. Farmlands Directory & Discovery Module

Manages listing inventory, regional summaries, search filters, and detail properties.

### 2.1 Fetch Farmlands (with filtering/search)
*   **Endpoint:** `/api/farmlands`
*   **Method:** `GET`
*   **Description:** Returns listings. Integrates search values and criteria from the frontend filters panel.
*   **Query Parameters:**
    *   `q` (string, optional - search query for text search)
    *   `location` (string, optional - e.g. "Tanuku")
    *   `priceMin` / `priceMax` (number, optional)
    *   `acreageMin` / `acreageMax` (number, optional)
    *   `soilType` (string, optional - e.g., "Red Laterite")
    *   `status` (string, optional - e.g. "ACTIVE & MANAGED")
    *   `page` / `limit` (number, pagination parameters)
*   **Success Response (200 OK):**
    ```json
    {
      "success": true,
      "data": [
        {
          "id": "match-1",
          "title": "GLC SOS 01",
          "price": "₹4.80 Cr",
          "acreage": "320 Acres",
          "locationSubtitle": "Tanuku, Andhra Pradesh",
          "tags": ["ACTIVE & MANAGED", "RED LATERITE"],
          "description": "High-yield mango grove with established irrigation systems and road access.",
          "heroBg": "/assets/search/image2.1.png",
          "soilType": "Red Laterite"
        }
      ],
      "pagination": { "total": 12, "page": 1, "totalPages": 2 }
    }
    ```

### 2.2 Get Farmland Details by ID
*   **Endpoint:** `/api/farmlands/{id}`
*   **Method:** `GET`
*   **Description:** Returns full details of a specific farmland (including infrastructure specifications and soils).
*   **Success Response (200 OK):**
    ```json
    {
      "success": true,
      "data": {
        "id": "match-1",
        "title": "GLC SOS 01",
        "price": "₹4.80 Cr",
        "acreage": "320 Acres",
        "locationSubtitle": "Tanuku, Andhra Pradesh",
        "tags": ["ACTIVE & MANAGED", "RED LATERITE"],
        "description": "High-yield mango grove with established irrigation systems.",
        "heroBg": "/assets/search/image2.1.png",
        "energyAccess": { "left": "3-Phase Industrial Grid", "right": "Solar-Ready Infrastructure" },
        "hydraulicDepth": { "left": "100m", "right": "Dedicated Canal Access" },
        "lastMile": { "left": "40ft Black Top Approach", "right": "Internal Private Paved Roads" },
        "nearestCity": { "left": "Zaheerabad (15km)", "right": "Hyderabad Outer Ring (85km)" },
        "transitAccess": { "left": "RGIA Airport (90m)", "right": "Major Freight Terminal (20km)" },
        "medicalAccess": { "left": "Apollo Regional Outpost (10km)", "right": "District General Hospital (12km)" },
        "soilComposition": {
          "title": "Red Laterite",
          "desc": "High water retention, ideal for moisture-intensive crops."
        },
        "currentVegetation": "Seasonal Rice / Cotton Cultivation",
        "potentialVegetation": "Sandalwood & Exotic Timber"
      }
    }
    ```

### 2.3 Get Top Selling / Trending Locations
*   **Endpoint:** `/api/farmlands/trending-locations`
*   **Method:** `GET`
*   **Description:** Returns popular locations and counts of active assets for dashboard cards.
*   **Success Response (200 OK):**
    ```json
    {
      "success": true,
      "data": [
        { "id": "loc-tanuku", "name": "Tanuku", "img": "/assets/home/TrendingLocations/tanuku.svg", "assetCount": 14 },
        { "id": "loc-bhimavaram", "name": "Bhimavaram", "img": "/assets/home/TrendingLocations/bhimavaram.svg", "assetCount": 8 }
      ]
    }
    ```

---

## 3. Subscription & Payment Module

Handles active tiers, invoice calculations, payment options, and upgrade processing.

### 3.1 Fetch Pricing Tiers
*   **Endpoint:** `/api/pricing/plans`
*   **Method:** `GET`
*   **Description:** Retrieves features, costs, and benefits of each subscription tier.
*   **Success Response (200 OK):**
    ```json
    {
      "success": true,
      "data": [
        { "planId": "starter", "name": "Starter Access Plan", "price": 9999, "unlocksPerMonth": 1 },
        { "planId": "growth", "name": "Growth Access Plan", "price": 19999, "unlocksPerMonth": 10 },
        { "planId": "annual", "name": "Pro Investor Plan", "price": 29999, "unlocksPerMonth": 48 }
      ]
    }
    ```

### 3.2 Initialize Subscription Checkout
*   **Endpoint:** `/api/subscriptions/checkout`
*   **Method:** `POST`
*   **Headers:** `Authorization: Bearer <token>`
*   **Description:** Calculates costs, registers a pending transaction, and generates the payment intent.
*   **Request Payload:**
    ```json
    {
      "planId": "growth",
      "paymentMethod": "card" // Options: "card" | "upi" | "netbanking"
    }
    ```
*   **Success Response (200 OK):**
    ```json
    {
      "success": true,
      "transactionId": "txn_89723491823",
      "payableAmount": 19999,
      "currency": "INR",
      "gatewayPayload": {
        "clientSecret": "pi_xxxxxxxxxxxxxxxxxx"
      }
    }
    ```

### 3.3 Confirm Upgrade Payment
*   **Endpoint:** `/api/subscriptions/confirm-payment`
*   **Method:** `POST`
*   **Headers:** `Authorization: Bearer <token>`
*   **Description:** Confirms verification from payment gateway, marks subscription active, and credits unlock points.
*   **Request Payload:**
    ```json
    {
      "transactionId": "txn_89723491823",
      "paymentGatewayStatus": "SUCCESS"
    }
    ```
*   **Success Response (200 OK):**
    ```json
    {
      "success": true,
      "message": "Payment verified. Subscription active.",
      "activeSubscription": "growth",
      "unlockCredits": 10
    }
    ```

---

## 4. Document Unlocks & Intelligence Vault

Manages legal dossiers, reports, remaining balances, and secure downloads.

### 4.1 Fetch Unlocked Documents List
*   **Endpoint:** `/api/user/unlocked-documents`
*   **Method:** `GET`
*   **Headers:** `Authorization: Bearer <token>`
*   **Query Parameters:**
    *   `q` (string, optional - search within unlocked assets)
    *   `category` (string, optional - e.g. "Legal Dossiers" | "Risk Reports")
*   **Success Response (200 OK):**
    ```json
    {
      "success": true,
      "remainingCredits": 3,
      "data": [
        {
          "id": "GLC SOS 04",
          "farmlandId": "match-4",
          "location": "West Godavari",
          "acres": "200",
          "val": "₹4.2Cr",
          "unlockedDate": "2026-10-12T12:00:00Z",
          "safeStatus": "SAFE",
          "titleStatus": "Clear Title",
          "cropPotential": "Organic-Ready",
          "docs": [
            { "docId": "doc_823", "name": "Land Title Deed Registry", "type": "legal_dossier" },
            { "docId": "doc_824", "name": "CCS Agronomy Risk Assessment", "type": "risk_report" }
          ]
        }
      ]
    }
    ```

### 4.2 Unlock a Farmland Intelligence Dossier
*   **Endpoint:** `/api/user/unlocked-documents/unlock`
*   **Method:** `POST`
*   **Headers:** `Authorization: Bearer <token>`
*   **Description:** Deducts 1 unlock credit from user's account and unlocks dossier files for a farmland ID.
*   **Request Payload:**
    ```json
    {
      "farmlandId": "match-4"
    }
    ```
*   **Success Response (200 OK):**
    ```json
    {
      "success": true,
      "message": "Dossier unlocked successfully.",
      "remainingCredits": 2,
      "dossier": {
        "farmlandId": "match-4",
        "unlockedDate": "2026-10-12T15:00:00Z",
        "docs": [
          { "docId": "doc_823", "name": "Land Title Deed Registry" }
        ]
      }
    }
    ```

### 4.3 Get Secure Document Download URL
*   **Endpoint:** `/api/user/unlocked-documents/download/{docId}`
*   **Method:** `GET`
*   **Headers:** `Authorization: Bearer <token>`
*   **Description:** Generates a temporary, secure link to download the PDF legal deed or agronomy report.
*   **Success Response (200 OK):**
    ```json
    {
      "success": true,
      "downloadUrl": "https://secure-storage.greenlandcapital.com/dossiers/doc_823.pdf?token=temp_sas_token"
    }
    ```

---

## 5. Fractional Pool Buying (Co-Investment) Module

Manages collective investments, seats, remaining balances, and fractional commitments.

### 5.1 Fetch Active Co-Investment Pools
*   **Endpoint:** `/api/pools`
*   **Method:** `GET`
*   **Description:** Returns pools currently active for fractional investing.
*   **Success Response (200 OK):**
    ```json
    {
      "success": true,
      "data": [
        {
          "poolId": "pool-sos-01",
          "farmlandId": "match-1",
          "title": "GLC SOS 01",
          "targetValuation": 50000000, // ₹5.00 Cr
          "fundedAmount": 37500000,    // ₹3.75 Cr
          "percentageFunded": 75,
          "minInvestmentPerSeat": 2500000, // ₹25 Lakhs
          "targetYield": "14% p.a."
        }
      ]
    }
    ```

### 5.2 Commit Investment Seat (Escrow Claim)
*   **Endpoint:** `/api/pools/{poolId}/pledge`
*   **Method:** `POST`
*   **Headers:** `Authorization: Bearer <token>`
*   **Description:** Pledges capital commitment for a co-investment pool to hold a seat in escrow.
*   **Request Payload:**
    ```json
    {
      "seatsCount": 1,
      "paymentMethod": "netbanking"
    }
    ```
*   **Success Response (200 OK):**
    ```json
    {
      "success": true,
      "message": "Investment pledge recorded. Escrow verification pending.",
      "escrowReference": "ESC-98234-928"
    }
    ```

---

## 6. Sell Your Land (Listing Portal)

Submits owned farmlands to Green Land Capital's verification team.

### 6.1 Submit New Land Listing Proposal
*   **Endpoint:** `/api/land-listings/submit`
*   **Method:** `POST`
*   **Headers:** `Authorization: Bearer <token>`
*   **Description:** Submits details of a farmland for sale, including coordinates and owner metadata.
*   **Request Payload:**
    ```json
    {
      "owner": {
        "fullName": "Arjun Verma",
        "phoneCode": "+91",
        "contactNumber": "9876543210",
        "corporateEmail": "arjun@v-corporation.com"
      },
      "landSpecifics": {
        "region": "Tanuku, Andhra Pradesh",
        "acreage": 5.0,
        "baseValuation": 48000000,
        "gpsCoordinates": {
          "latitude": 16.7554,
          "longitude": 81.6881
        }
      }
    }
    ```
*   **Success Response (201 Created):**
    ```json
    {
      "success": true,
      "message": "Land details successfully submitted for institutional audit.",
      "listingId": "lst_772348"
    }
    ```

---

## 7. Organic Farming & AI Matchmaking Module

This module handles organic farming setups, work orders, yield-sharing parameters, and AI-driven custom matches.

### 7.1 Fetch Organic Farming Plans
*   **Endpoint:** `/api/organic-farming/plans`
*   **Method:** `GET`
*   **Description:** Retrieves available management plan setups, revenue splits (50/50, 60/40), and list items.
*   **Success Response (200 OK):**
    ```json
    {
      "success": true,
      "data": [
        {
          "planId": "agri-yield",
          "name": "Standard Agri-Yield",
          "splitDescription": "50/50 Split",
          "coveredItems": [
            "Soil Analysis & Prep",
            "Organic Certification Conversion",
            "Seed & Input Procurement",
            "Labor & Equipment Management",
            "Harvest Liquidation & Logistics"
          ]
        },
        {
          "planId": "timber",
          "name": "Premium Timber",
          "splitDescription": "60/40 Split",
          "coveredItems": [
            "Soil Analysis & Prep",
            "Organic Certification Conversion",
            "Timber Sapling Procurement",
            "Labor & Equipment Management",
            "Harvest Liquidation & Logistics"
          ]
        }
      ]
    }
    ```

### 7.2 Create Setup Work Order
*   **Endpoint:** `/api/organic-farming/work-orders`
*   **Method:** `POST`
*   **Headers:** `Authorization: Bearer <token>`
*   **Description:** Generates a new execution setup order for organic conversion and management.
*   **Request Payload:**
    ```json
    {
      "planId": "agri-yield",
      "agreedToTerms": true
    }
    ```
*   **Success Response (201 Created):**
    ```json
    {
      "success": true,
      "workOrderId": "wo_384729",
      "status": "INITIATED",
      "createdAt": "2026-10-14T10:15:30Z",
      "message": "Work Order initiated. GLC Agri-Experts assigned."
    }
    ```

### 7.3 Fetch AI Suggested / Curated Matches
*   **Endpoint:** `/api/farmlands/ai-suggestions`
*   **Method:** `GET`
*   **Headers:** `Authorization: Bearer <token>`
*   **Description:** Returns curated, custom-matched farmland recommendations based on user preferences.
*   **Success Response (200 OK):**
    ```json
    {
      "success": true,
      "userPreferences": {
        "zone": "Zone A-1",
        "budgetRange": "₹2Cr - ₹5Cr"
      },
      "data": [
        {
          "id": "match-4",
          "title": "GLC SOS 04",
          "location": "Himalayan Foothills, Uttarakhand",
          "price": "₹4.2 Cr",
          "matchPercentage": 98,
          "aiInsight": "Projected to capitalize on a 22% CAGR in organic exports over the next 5 years.",
          "badge": "PRIME YIELD ASSET",
          "imageUrl": "/assets/ai-suggested/GLC SOS 04.svg"
        },
        {
          "id": "match-2",
          "title": "GLC SOS 02",
          "location": "Chittoor Region",
          "price": "₹2.8 Cr",
          "matchPercentage": 94,
          "aiInsight": "Excellent opportunity for boutique grape cultivation.",
          "badge": "EXPANSION READY",
          "imageUrl": "/assets/ai-suggested/GLC SOS 02.svg"
        }
      ]
    }
    ```
