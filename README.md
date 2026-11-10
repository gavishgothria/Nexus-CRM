# Nexus CRM — Enterprise Revenue & Customer Intelligence Platform (v2.5 INR Edition)

**Nexus CRM** is a production-ready, enterprise-grade Customer Relationship Management (CRM) web application built with native **Indian Rupee (`INR ₹`)** numbering (`en-IN` Lakhs & Crores formatting and 18% GST CPQ calculations). It combines the speed and relational flexibility of **Attio** and **Linear**, the workflow automation of **HubSpot Smart CRM**, and the revenue forecasting and CPQ rigor of **Salesforce Revenue Cloud**.

## Key Enterprise Capabilities

1. **Executive Revenue & Telemetry Dashboard (INR Crores & Lakhs)**
   - Real-time KPIs: Active Pipeline (`₹ Cr`), AI Weighted Forecast (Commit + Best Case), Closed-Won ARR, and Portfolio Health Score.
   - Zero-dependency High-DPI SVG charts for **6-Month Revenue Trajectory vs. Quota** and **Stage Conversion Funnels**.
   - Account Executive Quota Attainment tracker (Closed Won vs. Weighted Pipeline coverage).

2. **Interactive Kanban Deal Pipeline + MEDDIC + SLA Rotting**
   - Drag-and-drop cards across 6 customizable stages (`Discovery`, `Qualified`, `Solution Proposal`, `Legal & Negotiation`, `Closed Won`, `Closed Lost`).
   - Automatic **SLA Breach / Rotting detection** (`SLA Rotting`) when deals stagnate beyond stage thresholds.
   - Built-in **6-Point MEDDIC Qualification progress bars** (`Metrics`, `Economic Buyer`, `Decision Criteria`, `Decision Process`, `Identify Pain`, `Champion`).

3. **Slide-Over 360° Record Inspector & AI Deal Copilot**
   - Click any deal, contact, or account to open the right-hand 360° drawer.
   - **AI Deal Intelligence Copilot** analyzes missing MEDDIC pillars and recommends next best actions.
   - **Smart Sequence Email Composer** with instant merge-tag hydration (`{{first_name}}`, `{{company}}`, `{{deal_title}}`, `{{deal_amount}}`) and 1-click timeline logging.

4. **Omnichannel Contacts, ABM Accounts & Data Hygiene**
   - AI Propensity Lead Scoring (`0–100`) and Buying Committee Sentiment badges (`Champion`, `Positive`, `Neutral`, `At Risk`).
   - **1-Click Duplicate Hygiene Scanner** to detect and prevent duplicate email records.
   - **CSV Bulk Contact Importer** and **CSV / JSON Exporter**.

5. **Built-In Configure, Price, Quote (CPQ) GST Order Builder**
   - Select any pipeline deal, add custom SKU line items in `INR (₹)`, configure volume discounts (%) and India GST (18%), sync the net total back to the deal record, or generate a clean **Print / PDF Commercial Order Form**.

6. **No-Code Event-Driven Workflow Automation & Service Desk**
   - Toggle active IF/THEN revenue playbooks and run live trigger simulations.
   - Manage post-sales Customer Success escalation tickets with live SLA countdown timers.

7. **Enterprise Governance: RBAC, Custom Schema & Security Audit Log**
   - Live **RBAC Role Switcher** (`Admin`, `Sales Manager`, `Account Executive`, `Viewer`) that enforces write/mutation permissions across the UI.
   - Define custom relational schema attributes and inspect the **Immutable Security Audit Log** (with timestamp, actor, action, and IP).
   - **Command Palette (`Cmd+K` or `Ctrl+K`)**, **Native `INR (₹)` Formatting (`₹3,50,00,000` / `₹3.50 Cr`)**, and **Dark / Light Theme Toggle**.

## Repository Structure

```text
CRM Tool/
├── index.html               # Application shell, sidebar, topbar, modals & 360° drawer
├── package.json             # NPM scripts & project metadata
├── .gitignore               # Git ignore rules for clean repository commits
├── LICENSE                  # MIT Open Source License
├── README.md                # Documentation & quick-start guide
├── AUDIT_AND_CRITIQUE.md    # Competitive feature matrix & production self-critique log
└── src/
    ├── styles.css           # Design tokens, dark/light themes, Kanban, tables & print CSS
    ├── data.js              # Seed enterprise dataset in INR (Deals, Contacts, ABM Accounts, Workflows)
    ├── charts.js            # Zero-dependency SVG Revenue Trajectory & Funnel chart engine (Cr/L)
    └── app.js               # State store, RBAC guards, Command Palette, CPQ & UI controller
```

## Quick Start (Local Development & Deployment)

Because Nexus CRM is engineered with zero external runtime dependencies, you can open `index.html` directly in any browser or serve the folder locally:

```bash
# Option 1: Using Python (pre-installed on macOS/Linux)
python3 -m http.server 8080

# Option 2: Using Node / NPX
npm start
```
