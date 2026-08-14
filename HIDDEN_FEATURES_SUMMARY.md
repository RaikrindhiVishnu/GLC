# Master Summary of Hidden & Restricted Features

This document serves as a cheat sheet for all sections, components, buttons, and feature links that have been **hidden, commented out, filtered out, or restricted** across the Green Land Capital (GLC) codebase. 

---

## 1. 🏠 Home Page (`/home`)

| Feature / Section | Status | File Location | Line / Details |
| :--- | :--- | :--- | :--- |
| **Unlocked Docs Section** | Commented Out | [`src/app/home/page.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/app/home/page.tsx) | `{/* <UnlockedDocs /> */}` |
| **Document Unlocks / Premium Access Section**<br>*(Unlock Hidden Insights, 4 Premium Credits, Tier 1 Contributor, Get Premium, Listing Status 24 Active)* | Commented Out | [`src/app/home/page.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/app/home/page.tsx) | `{/* <DocumentUnlocks /> */}` |
| **Pool Buying Quick Card** | Filtered Out | [`src/app/home/FiltersScreen.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/app/home/FiltersScreen.tsx) | `.filter(btn => btn.id !== "pool-buying")` |
| **Pool Investments Section** | Commented Out | [`src/app/home/page.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/app/home/page.tsx) | `{/* <PoolInvestments /> */}` |
| **My Assets Quick Card** | Filtered Out | [`src/app/home/FiltersScreen.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/app/home/FiltersScreen.tsx) | `.filter(btn => btn.id !== "my-assets")` |
| **Maintenance of Farmland Quick Card** | Filtered Out | [`src/app/home/FiltersScreen.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/app/home/FiltersScreen.tsx) | `.filter(btn => btn.id !== "maintenance-farmland")` |
| **Newsletter Section** | Commented Out | [`src/app/home/page.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/app/home/page.tsx) | `{/* <Newsletter /> */}` |

---

## 2. 🚀 Landing Page (`/landing`)

| Feature / Section | Status | File Location | Details |
| :--- | :--- | :--- | :--- |
| **Subscriptions / Pricing Section** | Commented Out | [`src/app/landing/page.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/app/landing/page.tsx) | `{/* <Pricing /> */}` |
| **AI Curation Floating Button** | Login Restricted | [`src/components/SparkleButton.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/components/SparkleButton.tsx) | Unauthenticated clicks redirect to `/login` |
| **Hero Search Bar & Search Icon** | Login Restricted | [`src/components/Hero.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/components/Hero.tsx) | Unauthenticated clicks redirect to `/login` |
| **Select Plan Buttons** | Login Restricted | [`src/components/Pricing.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/components/Pricing.tsx) | Unauthenticated clicks redirect to `/login` |
| **Footer Links** | Login Restricted | [`src/components/Footer.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/components/Footer.tsx) | Unauthenticated clicks redirect to `/login` |
| **How It Works Step Cards** | Login Restricted | [`src/components/HowItWorks.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/components/HowItWorks.tsx) | Unauthenticated clicks redirect to `/login` |

---

## 3. 🌐 Navigation Bar (`src/components/Navbar.tsx`)

| Feature / Button | Status | File Location | Details |
| :--- | :--- | :--- | :--- |
| **Pricing Button** | Commented Out | [`src/components/Navbar.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/components/Navbar.tsx) | Central desktop capsule menu |
| **Unlocked Documents Icon Button** | Commented Out | [`src/components/Navbar.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/components/Navbar.tsx) | Top-right desktop utility group |
| **Unlocked Docs Link** | Filtered Out | [`src/components/Navbar.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/components/Navbar.tsx) | Mobile dropdown menu (`activeKey !== "documents"`) |

---

## 4. 🦶 Footer (`src/components/Footer.tsx`)

| Feature Link | Status | File Location | Details |
| :--- | :--- | :--- | :--- |
| **Pool Buying Link** | Filtered Out | [`src/components/Footer.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/components/Footer.tsx) | Mobile & Desktop link columns (`link !== "Pool Buying"`) |
| **Maintenance / Maintenance of Farmland Link** | Filtered Out | [`src/components/Footer.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/components/Footer.tsx) | Mobile & Desktop link columns (`link !== "Maintenance"`) |

---

## 5. 👤 Profile Page (`/profile`)

| Feature Button | Status | File Location | Details |
| :--- | :--- | :--- | :--- |
| **View Wallet History Button** | Commented Out | [`src/app/profile/page.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/app/profile/page.tsx) | Mobile profile card section |
| **Wallet History Button** | Commented Out | [`src/app/profile/page.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/app/profile/page.tsx) | Desktop profile card (below Total Estimated Assets) |
| **Manage Subscription Button** | Commented Out | [`src/app/profile/page.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/app/profile/page.tsx) | Desktop profile card (below Total Estimated Assets) |

---

## 6. ⚖️ Compare Assets Page (`/home/compareassets`)

| Feature Element | Status | File Location | Details |
| :--- | :--- | :--- | :--- |
| **User Profile Picture Avatar** | Removed | [`src/app/home/compareassets/page.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/app/home/compareassets/page.tsx) | Top-right header section avatar |

---

> [!NOTE]
> All underlying source files, API services, and page components remain 100% preserved in the codebase for easy re-enablement whenever these features are ready to be published.
