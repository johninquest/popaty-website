# Popaty Landing Page Content Kit

## 1. Design System (Matches Client App)

Use these exact values to ensure the landing page feels identical to the app.

### Colors

| Element | Color | Usage |
|---------|-------|-------|
| Primary (Brand) | `#8c6a3a` | Copper/Brown |
| Primary Hover | `#76572f` | Interactive states |
| Background | `#F9FAFB` | Off-white |
| Text (Main) | `#202124` | Raven Black |
| Text (Muted) | `#6B7280` | Gray-500 |

### Typography

Based on asset files in `fonts`:

- **Font Family:** Roboto (Variable)
- **Weights:** Light (100) to Black (900)

---

## 2. Hero Section

- **App Name:** Popaty
- **Tagline:** Property rent & expense manager.
- **Value Proposition:** A lean, focused tool for DIY landlords. Stop wrestling with spreadsheets and track rent payments in seconds.
- **Primary CTA:** "Start Tracking Free"
- **Secondary CTA:** "View Demo"

---

## 3. Key Features

### 💰 Frictionless Rent Tracking

**The Problem:** Comprehensive suites are too complex.

**The Solution:** Record payments in 3 clicks: Select Property → Select Tenant → Save.

**Details:** Track partial payments, payment methods (Cash, Mobile Money), and due dates.

### 👥 Seamless Collaboration

**Email-First Sharing:** No complex team setups. Just type an email to grant access.

**Roles:** Assign "Managers" (can edit) or "Viewers" (read-only) to specific properties.

**Free for Teams:** Property owners pay, but managers and accountants access shared properties for free.

### 📊 Expense Management

**Categorized Tracking:** Log maintenance, repairs, utilities, taxes, and management fees.

**Vendor Tracking:** Keep a history of which vendors were paid for specific jobs.

**Multi-Currency:** Automatic currency formatting based on property country.

### 🛡️ Trust & Transparency

**Immutable Audit Logs:** Every action (creation, update, deletion) is permanently recorded.

**Dispute Resolution:** See exactly who changed a payment amount or tenant detail and when.

### 📱 Mobile-First Design

**PWA Ready:** Install directly to your phone's home screen.

**Offline Capable:** Works even with spotty internet connections.

---

## 4. How It Works

1. **Setup:** Create a Property → Add Units (optional) → Add Tenants.
2. **Daily Use:** Select Tenant → Enter Amount → Save.
3. **Delegate:** Property Settings → Share via Email → Assign Role.

---

## 5. Pricing Strategy

**Model:** Owner-Pays (SaaS)

| Tier | Properties | Details |
|------|-----------|---------|
| **Free** | 1 | Full features. Unlimited sharing. |
| **Starter** | Up to 3 | - |
| **Growth** | Up to 10 | - |
| **Pro** | Unlimited | Priority Support included. |

**Key Selling Point:** "Your property managers, spouses, and accountants never pay a dime. Only the property owner subscribes."

---

## 6. Technical Trust Signals (Footer/About)

To build confidence with tech-savvy users:

- **Security:** Row-level security ensuring data isolation.
- **Technology:** Built on modern SvelteKit & NestJS architecture.
- **Global:** Available in English, Hausa, and Deutsch.

---

## 7. Suggested UI Layout

- **Navbar:** Logo (Popaty), Login, Button: "Get Started"
- **Hero:** Large text, simple screenshot of the "Rent Entry" card (the most used feature)
- **Feature Grid:** 3 columns highlighting Rent, Expenses, and Sharing
- **Social Proof:** "Simple for owners, power for managers."
- **Pricing Table:** Highlight the "Free forever for collaborators" aspect
- **Footer:** Links, Copyright, Language Switcher