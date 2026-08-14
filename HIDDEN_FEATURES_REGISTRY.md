# Hidden Features & Components Registry

This document serves as an exact reference list of all components, buttons, sections, and navigation items that have been **hidden** (commented out or filtered in code without deleting source files). Use this list to easily locate and re-enable features as development completes.

---

## 1. Home Page Sections ([`src/app/home/page.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/app/home/page.tsx))

| Feature / Section | Line Number | Code Pattern | Status | How to Re-enable |
| :--- | :--- | :--- | :--- | :--- |
| **UnlockedDocs** | Line 29 | `{/* <UnlockedDocs /> */}` | Commented Out | Uncomment `<UnlockedDocs />` |
| **PoolInvestments** | Line 35 | `{/* <PoolInvestments /> */}` | Commented Out | Uncomment `<PoolInvestments />` |
| **DocumentUnlocks** | Line 37 | `{/* <DocumentUnlocks /> */}` | Commented Out | Uncomment `<DocumentUnlocks />` |
| **Newsletter** | Line 39 | `{/* <Newsletter /> */}` | Commented Out | Uncomment `<Newsletter />` |

---

## 2. Home Page Quick Action Cards ([`src/app/home/FiltersScreen.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/app/home/FiltersScreen.tsx))

| Feature | Line Number | Code Pattern | Status | How to Re-enable |
| :--- | :--- | :--- | :--- | :--- |
| **Pool Buying** | Line 61 | `.filter((btn) => btn.id !== "pool-buying" ...)` | Filtered Out | Remove `btn.id !== "pool-buying"` condition |
| **Maintenance of Farmland** | Line 61 | `.filter((btn) => ... btn.id !== "maintenance-farmland" ...)` | Filtered Out | Remove `btn.id !== "maintenance-farmland"` condition |
| **My Assets** | Line 61 | `.filter((btn) => ... btn.id !== "my-assets")` | Filtered Out | Remove `btn.id !== "my-assets"` condition |

---

## 3. Landing Page Sections ([`src/app/landing/page.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/app/landing/page.tsx))

| Feature / Section | Line Number | Code Pattern | Status | How to Re-enable |
| :--- | :--- | :--- | :--- | :--- |
| **Subscription (Pricing)** | Line 26 | `{/* <Pricing /> */}` | Commented Out | Uncomment `<Pricing />` |

---

## 4. Navigation Bar ([`src/components/Navbar.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/components/Navbar.tsx))

| Feature / Button | Line Number | Code Pattern | Status | How to Re-enable |
| :--- | :--- | :--- | :--- | :--- |
| **Pricing Button** (Desktop Capsule Menu) | Lines 193–211 | `{/* {active === "pricing" ? ... } */}` | Commented Out | Uncomment the Pricing block |
| **Unlocked Documents Icon** (Desktop Utility) | Lines 235–261 | `{/* <button ... aria-label="Unlocked Documents"> */}` | Commented Out | Uncomment the button block |
| **Unlocked Docs Item** (Mobile Dropdown Menu) | Line 450 | `.filter(item => item.activeKey !== "documents")` | Filtered Out | Remove `item.activeKey !== "documents"` condition |

---

## 5. Footer Links ([`src/components/Footer.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/components/Footer.tsx))

| Link Name | Line Number | Code Pattern | Status | How to Re-enable |
| :--- | :--- | :--- | :--- | :--- |
| **Pool Buying** (Mobile & Desktop) | Lines 91, 205 | `.filter((item) => item !== "Pool Buying")` | Filtered Out | Remove `"Pool Buying"` filter check |
| **Maintenance / Maintenance of Farmland** | Lines 114, 226 | `.filter((item) => item !== "Maintenance")` | Filtered Out | Remove `"Maintenance"` filter check |

---

## 6. Profile Page Buttons ([`src/app/profile/page.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/app/profile/page.tsx))

| Feature / Button | Line Number | Code Pattern | Status | How to Re-enable |
| :--- | :--- | :--- | :--- | :--- |
| **View Wallet History** (Mobile Card) | Lines 411–416 | `{/* <button ... >View Wallet History</button> */}` | Commented Out | Uncomment button block |
| **Wallet History & Manage Subscription** (Desktop Card) | Lines 836–845 | `{/* <div ... >Wallet History & Manage Subscription</div> */}` | Commented Out | Uncomment container block |

---

## 7. Landing Page Unauthenticated Access Restrictions

The following interactive controls on `/landing` check authentication state (`localStorage.getItem("token")`) and redirect unauthenticated users to `/login`:
- **AI Curation Button** ([`SparkleButton.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/components/SparkleButton.tsx))
- **Hero Search Bar & Search Icon** ([`Hero.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/components/Hero.tsx))
- **Pricing Select Plan Buttons** ([`Pricing.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/components/Pricing.tsx))
- **Footer Feature Links** ([`Footer.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/components/Footer.tsx))
- **How It Works Step Cards** ([`HowItWorks.tsx`](file:///c:/Users/DELL/OneDrive/Desktop/GLC/src/components/HowItWorks.tsx))
