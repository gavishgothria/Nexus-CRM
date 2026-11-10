// ============================================================================
// NEXUS CRM — ENTERPRISE SEED DATA & SCHEMA DEFINITIONS (INR ₹ BASE)
// ============================================================================

window.NEXUS_SEED_DATA = {
  version: "2.5.0",
  currentUser: {
    id: "usr_01",
    name: "Gavish Gothria",
    email: "gavish@nexuscrm.io",
    role: "Admin", // Admin | Sales Manager | Account Executive | Viewer
    title: "VP of Revenue Operations",
    avatar: "GG",
    quota: 105000000 // ₹10.50 Cr
  },
  stages: [
    { id: "discovery", name: "Discovery", probability: 20, color: "#6366f1", slaDays: 14 },
    { id: "qualified", name: "Qualified", probability: 40, color: "#0ea5e9", slaDays: 10 },
    { id: "proposal", name: "Solution Proposal", probability: 65, color: "#f59e0b", slaDays: 12 },
    { id: "negotiation", name: "Legal & Negotiation", probability: 85, color: "#8b5cf6", slaDays: 7 },
    { id: "closed_won", name: "Closed Won", probability: 100, color: "#10b981", slaDays: 0 },
    { id: "closed_lost", name: "Closed Lost", probability: 0, color: "#ef4444", slaDays: 0 }
  ],
  companies: [
    {
      id: "cmp_01",
      name: "Stripe FinTech Global",
      domain: "stripe.com",
      industry: "FinTech & Payments",
      employees: "5,000+",
      arr: 41000000, // ₹4.10 Cr
      tier: "Enterprise",
      healthScore: 94,
      location: "Bengaluru / SF",
      owner: "Gavish Gothria",
      parentCompanyId: null,
      lastTouch: "2026-11-09T16:40:00Z"
    },
    {
      id: "cmp_02",
      name: "Vercel Cloud Systems",
      domain: "vercel.com",
      industry: "Cloud Infrastructure",
      employees: "500-1,000",
      arr: 17500000, // ₹1.75 Cr
      tier: "Mid-Market",
      healthScore: 88,
      location: "Mumbai / Remote",
      owner: "Elena Rostova",
      parentCompanyId: null,
      lastTouch: "2026-11-10T08:15:00Z"
    },
    {
      id: "cmp_03",
      name: "Razorpay India Ltd",
      domain: "razorpay.com",
      industry: "FinTech & Payments",
      employees: "2,500+",
      arr: 28500000, // ₹2.85 Cr
      tier: "Enterprise",
      healthScore: 91,
      location: "Bengaluru, India",
      owner: "Gavish Gothria",
      parentCompanyId: null,
      lastTouch: "2026-11-10T09:30:00Z"
    },
    {
      id: "cmp_04",
      name: "Linear Orbit Labs",
      domain: "linear.app",
      industry: "Developer Tools",
      employees: "100-250",
      arr: 10500000, // ₹1.05 Cr
      tier: "Growth",
      healthScore: 79,
      location: "Hyderabad, India",
      owner: "Marcus Vance",
      parentCompanyId: null,
      lastTouch: "2026-11-07T14:20:00Z"
    },
    {
      id: "cmp_05",
      name: "Datadog Telemetry Corp",
      domain: "datadoghq.com",
      industry: "Observability & Security",
      employees: "5,000+",
      arr: 52000000, // ₹5.20 Cr
      tier: "Enterprise",
      healthScore: 62,
      location: "Pune, India",
      owner: "Elena Rostova",
      parentCompanyId: null,
      lastTouch: "2026-10-28T11:00:00Z"
    },
    {
      id: "cmp_06",
      name: "Zomato Hyperpure",
      domain: "zomato.com",
      industry: "B2B Supply Chain",
      employees: "5,000+",
      arr: 24800000, // ₹2.48 Cr
      tier: "Enterprise",
      healthScore: 86,
      location: "Gurugram, India",
      owner: "Gavish Gothria",
      parentCompanyId: null,
      lastTouch: "2026-11-10T06:45:00Z"
    },
    {
      id: "cmp_07",
      name: "Notion Workspace Inc",
      domain: "notion.so",
      industry: "Productivity SaaS",
      employees: "1,000-2,500",
      arr: 15000000, // ₹1.50 Cr
      tier: "Mid-Market",
      healthScore: 82,
      location: "Bengaluru, India",
      owner: "Marcus Vance",
      parentCompanyId: null,
      lastTouch: "2026-11-08T19:10:00Z"
    },
    {
      id: "cmp_08",
      name: "Anthropic AI Research",
      domain: "anthropic.com",
      industry: "Artificial Intelligence",
      employees: "500-1,000",
      arr: 74500000, // ₹7.45 Cr
      tier: "Enterprise",
      healthScore: 97,
      location: "Gurugram / Global",
      owner: "Gavish Gothria",
      parentCompanyId: null,
      lastTouch: "2026-11-10T10:05:00Z"
    }
  ],
  contacts: [
    {
      id: "cnt_01",
      name: "Claire Hughes Johnson",
      email: "claire.hj@stripe.com",
      phone: "+91 98101 23110",
      role: "EVP of Global Operations",
      companyId: "cmp_01",
      companyName: "Stripe FinTech Global",
      leadScore: 96,
      sentiment: "Champion",
      status: "Active Customer",
      source: "Executive Referral",
      owner: "Gavish Gothria",
      lastContacted: "2h ago",
      tags: ["Decision Maker", "C-Suite", "Multi-Year"]
    },
    {
      id: "cnt_02",
      name: "Guillermo Rauch",
      email: "rauchg@vercel.com",
      phone: "+91 98204 99412",
      role: "Chief Executive Officer",
      companyId: "cmp_02",
      companyName: "Vercel Cloud Systems",
      leadScore: 91,
      sentiment: "Positive",
      status: "SQL",
      source: "Product-Led Sign Up",
      owner: "Elena Rostova",
      lastContacted: "4h ago",
      tags: ["Founder", "Technical Buyer", "Q4 Target"]
    },
    {
      id: "cnt_03",
      name: "Harshil Mathur",
      email: "harshil@razorpay.com",
      phone: "+91 98801 44210",
      role: "Managing Director & CEO",
      companyId: "cmp_03",
      companyName: "Razorpay India Ltd",
      leadScore: 94,
      sentiment: "Champion",
      status: "SQL",
      source: "APAC Fintech Summit",
      owner: "Gavish Gothria",
      lastContacted: "1d ago",
      tags: ["APAC Enterprise", "Decision Maker", "Fast-Track"]
    },
    {
      id: "cnt_04",
      name: "Karri Saarinen",
      email: "karri@linear.app",
      phone: "+91 98450 88210",
      role: "Co-Founder & CEO",
      companyId: "cmp_04",
      companyName: "Linear Orbit Labs",
      leadScore: 84,
      sentiment: "Neutral",
      status: "MQL",
      source: "Inbound Demo Request",
      owner: "Marcus Vance",
      lastContacted: "3d ago",
      tags: ["Design-Conscious", "API Heavy"]
    },
    {
      id: "cnt_05",
      name: "Olivier Pomel",
      email: "olivier.p@datadoghq.com",
      phone: "+91 98230 55901",
      role: "VP of Infrastructure",
      companyId: "cmp_05",
      companyName: "Datadog Telemetry Corp",
      leadScore: 58,
      sentiment: "At Risk",
      status: "Security Review",
      source: "Outbound Sequence",
      owner: "Elena Rostova",
      lastContacted: "13d ago",
      tags: ["SOC2 Blocker", "Renewal Risk", "Enterprise"]
    },
    {
      id: "cnt_06",
      name: "Deepinder Goyal",
      email: "deepinder@zomato.com",
      phone: "+91 98112 77830",
      role: "Founder & CEO",
      companyId: "cmp_06",
      companyName: "Zomato Hyperpure",
      leadScore: 89,
      sentiment: "Positive",
      status: "SQL",
      source: "Partner Network",
      owner: "Gavish Gothria",
      lastContacted: "5h ago",
      tags: ["India NCR", "Supply Chain", "High Velocity"]
    },
    {
      id: "cnt_07",
      name: "Akshay Kothari",
      email: "akshay@notion.so",
      phone: "+91 98860 77319",
      role: "Chief Operating Officer",
      companyId: "cmp_07",
      companyName: "Notion Workspace Inc",
      leadScore: 82,
      sentiment: "Positive",
      status: "SQL",
      source: "Webinar Attendee",
      owner: "Marcus Vance",
      lastContacted: "2d ago",
      tags: ["Expansion", "AI Seat Add-on"]
    },
    {
      id: "cnt_08",
      name: "Daniela Amodei",
      email: "daniela@anthropic.com",
      phone: "+91 98109 92441",
      role: "President",
      companyId: "cmp_08",
      companyName: "Anthropic AI Research",
      leadScore: 98,
      sentiment: "Champion",
      status: "Active Customer",
      source: "Board Introduction",
      owner: "Gavish Gothria",
      lastContacted: "1h ago",
      tags: ["Strategic Account", "AI Native", "VIP"]
    }
  ],
  deals: [
    {
      id: "dl_01",
      title: "Anthropic Global Revenue Cloud Rollout",
      companyId: "cmp_08",
      companyName: "Anthropic AI Research",
      contactId: "cnt_08",
      contactName: "Daniela Amodei",
      amount: 35000000, // ₹3.50 Cr
      stage: "negotiation",
      probability: 85,
      closeDate: "2026-11-24",
      owner: "Gavish Gothria",
      daysInStage: 4,
      priority: "High",
      forecastCategory: "Commit",
      meddic: { metrics: true, economicBuyer: true, decisionCriteria: true, decisionProcess: true, identifyPain: true, champion: true },
      nextStep: "Finalize MSA redlines with Legal team",
      products: [
        { name: "Enterprise Seat License (500 seats)", qty: 500, price: 60000, discount: 0 },
        { name: "AI Copilot Intelligence Add-On", qty: 1, price: 5000000, discount: 0 }
      ]
    },
    {
      id: "dl_02",
      title: "Stripe APAC Multi-Region Expansion",
      companyId: "cmp_01",
      companyName: "Stripe FinTech Global",
      contactId: "cnt_01",
      contactName: "Claire Hughes Johnson",
      amount: 26500000, // ₹2.65 Cr
      stage: "closed_won",
      probability: 100,
      closeDate: "2026-11-04",
      owner: "Gavish Gothria",
      daysInStage: 2,
      priority: "High",
      forecastCategory: "Closed",
      meddic: { metrics: true, economicBuyer: true, decisionCriteria: true, decisionProcess: true, identifyPain: true, champion: true },
      nextStep: "Kickoff onboarding with Solutions Architect",
      products: [
        { name: "Enterprise Seat License (350 seats)", qty: 350, price: 75714, discount: 0 }
      ]
    },
    {
      id: "dl_03",
      title: "Razorpay Merchant Operations Suite",
      companyId: "cmp_03",
      companyName: "Razorpay India Ltd",
      contactId: "cnt_03",
      contactName: "Harshil Mathur",
      amount: 20500000, // ₹2.05 Cr
      stage: "proposal",
      probability: 65,
      closeDate: "2026-11-28",
      owner: "Gavish Gothria",
      daysInStage: 6,
      priority: "High",
      forecastCategory: "Commit",
      meddic: { metrics: true, economicBuyer: true, decisionCriteria: true, decisionProcess: false, identifyPain: true, champion: true },
      nextStep: "Present custom CPQ quote to CFO on Friday",
      products: [
        { name: "Growth Seat License (300 seats)", qty: 300, price: 62500, discount: 0 },
        { name: "Dedicated Sandbox & SSO", qty: 1, price: 1750000, discount: 0 }
      ]
    },
    {
      id: "dl_04",
      title: "Vercel Enterprise RevOps Pipeline",
      companyId: "cmp_02",
      companyName: "Vercel Cloud Systems",
      contactId: "cnt_02",
      contactName: "Guillermo Rauch",
      amount: 14000000, // ₹1.40 Cr
      stage: "proposal",
      probability: 65,
      closeDate: "2026-12-05",
      owner: "Elena Rostova",
      daysInStage: 5,
      priority: "Medium",
      forecastCategory: "Best Case",
      meddic: { metrics: true, economicBuyer: true, decisionCriteria: true, decisionProcess: false, identifyPain: true, champion: false },
      nextStep: "Deliver Next.js webhook integration POC",
      products: [
        { name: "Enterprise Seat License (200 seats)", qty: 200, price: 70000, discount: 0 }
      ]
    },
    {
      id: "dl_05",
      title: "Datadog Global Sales Telemetry Renewal",
      companyId: "cmp_05",
      companyName: "Datadog Telemetry Corp",
      contactId: "cnt_05",
      contactName: "Olivier Pomel",
      amount: 32000000, // ₹3.20 Cr
      stage: "negotiation",
      probability: 85,
      closeDate: "2026-11-30",
      owner: "Elena Rostova",
      daysInStage: 14, // Stale SLA trigger! (> 7 days)
      priority: "High",
      forecastCategory: "Best Case",
      meddic: { metrics: true, economicBuyer: false, decisionCriteria: true, decisionProcess: true, identifyPain: true, champion: false },
      nextStep: "Resolve InfoSec questionnaire item #42",
      products: [
        { name: "Enterprise Seat License (400 seats)", qty: 400, price: 80000, discount: 0 }
      ]
    },
    {
      id: "dl_06",
      title: "Zomato Hyperpure B2B Field CRM",
      companyId: "cmp_06",
      companyName: "Zomato Hyperpure",
      contactId: "cnt_06",
      contactName: "Deepinder Goyal",
      amount: 16500000, // ₹1.65 Cr
      stage: "qualified",
      probability: 40,
      closeDate: "2026-12-12",
      owner: "Gavish Gothria",
      daysInStage: 3,
      priority: "High",
      forecastCategory: "Pipeline",
      meddic: { metrics: true, economicBuyer: true, decisionCriteria: false, decisionProcess: false, identifyPain: true, champion: true },
      nextStep: "Demo mobile territory routing for NCR fleet",
      products: [
        { name: "Field Sales Pro (250 seats)", qty: 250, price: 66000, discount: 0 }
      ]
    },
    {
      id: "dl_07",
      title: "Notion AI Sales Intelligence Upgrade",
      companyId: "cmp_07",
      companyName: "Notion Workspace Inc",
      contactId: "cnt_07",
      contactName: "Akshay Kothari",
      amount: 11250000, // ₹1.13 Cr
      stage: "qualified",
      probability: 40,
      closeDate: "2026-12-18",
      owner: "Marcus Vance",
      daysInStage: 7,
      priority: "Medium",
      forecastCategory: "Pipeline",
      meddic: { metrics: true, economicBuyer: false, decisionCriteria: true, decisionProcess: false, identifyPain: true, champion: true },
      nextStep: "Schedule security architecture review",
      products: [
        { name: "AI Copilot Intelligence Add-On", qty: 150, price: 75000, discount: 0 }
      ]
    },
    {
      id: "dl_08",
      title: "Linear Product-Led Growth Analytics",
      companyId: "cmp_04",
      companyName: "Linear Orbit Labs",
      contactId: "cnt_04",
      contactName: "Karri Saarinen",
      amount: 7400000, // ₹74.00 L
      stage: "discovery",
      probability: 20,
      closeDate: "2026-12-22",
      owner: "Marcus Vance",
      daysInStage: 4,
      priority: "Medium",
      forecastCategory: "Pipeline",
      meddic: { metrics: false, economicBuyer: true, decisionCriteria: false, decisionProcess: false, identifyPain: true, champion: false },
      nextStep: "Discovery call on GraphQL sync latency",
      products: [
        { name: "Growth Seat License (110 seats)", qty: 110, price: 67272, discount: 0 }
      ]
    },
    {
      id: "dl_09",
      title: "Stripe Radar Fraud Operations Desk",
      companyId: "cmp_01",
      companyName: "Stripe FinTech Global",
      contactId: "cnt_01",
      contactName: "Claire Hughes Johnson",
      amount: 23000000, // ₹2.30 Cr
      stage: "closed_won",
      probability: 100,
      closeDate: "2026-10-19",
      owner: "Gavish Gothria",
      daysInStage: 1,
      priority: "High",
      forecastCategory: "Closed",
      meddic: { metrics: true, economicBuyer: true, decisionCriteria: true, decisionProcess: true, identifyPain: true, champion: true },
      nextStep: "Completed deployment",
      products: [
        { name: "Enterprise Seat License (275 seats)", qty: 275, price: 83636, discount: 0 }
      ]
    }
  ],
  activities: [
    {
      id: "act_01",
      type: "call",
      title: "Executive Commercial Review with Daniela Amodei",
      entityName: "Anthropic AI Research",
      dealId: "dl_01",
      contactId: "cnt_08",
      owner: "Gavish Gothria",
      dueDate: "2026-11-10",
      time: "14:00",
      status: "pending",
      priority: "High",
      notes: "Walk through multi-year volume discount tiers and SLA commitments."
    },
    {
      id: "act_02",
      type: "email",
      title: "Send Updated CPQ Order Form & SOC2 Type II Report",
      entityName: "Razorpay India Ltd",
      dealId: "dl_03",
      contactId: "cnt_03",
      owner: "Gavish Gothria",
      dueDate: "2026-11-10",
      time: "16:30",
      status: "pending",
      priority: "High",
      notes: "Include INR billing schedule option and 18% GST tax breakdown."
    },
    {
      id: "act_03",
      type: "meeting",
      title: "Escalate Stalled Security Questionnaire #42",
      entityName: "Datadog Telemetry Corp",
      dealId: "dl_05",
      contactId: "cnt_05",
      owner: "Elena Rostova",
      dueDate: "2026-11-09", // Overdue
      time: "11:00",
      status: "overdue",
      priority: "High",
      notes: "Deal has been in Legal & Negotiation for 14 days (SLA is 7 days)."
    },
    {
      id: "act_04",
      type: "call",
      title: "NCR Territory Mapping Technical Demo",
      entityName: "Zomato Hyperpure",
      dealId: "dl_06",
      contactId: "cnt_06",
      owner: "Gavish Gothria",
      dueDate: "2026-11-11",
      time: "11:30",
      status: "pending",
      priority: "Medium",
      notes: "Demonstrate offline mobile check-ins for field warehouse reps."
    },
    {
      id: "act_05",
      type: "task",
      title: "Provision Production SSO SAML Keys for Stripe APAC",
      entityName: "Stripe FinTech Global",
      dealId: "dl_02",
      contactId: "cnt_01",
      owner: "Gavish Gothria",
      dueDate: "2026-11-08",
      time: "17:00",
      status: "completed",
      priority: "High",
      notes: "Okta metadata XML verified and activated."
    }
  ],
  workflows: [
    {
      id: "wf_01",
      name: "High-Value Deal Alert & Executive Sponsor Assignment",
      trigger: "When Deal Amount > ₹1.50 Cr AND Stage moves to Proposal",
      actions: ["Post Slack alert to #enterprise-deals", "Assign VP RevOps as Executive Sponsor", "Create Legal Pre-Check Task"],
      active: true,
      executions: 142,
      conversionLift: "+18.4%",
      lastRun: "12 mins ago"
    },
    {
      id: "wf_02",
      name: "Stale Pipeline SLA Rotting Escalation (7-Day Rule)",
      trigger: "When Deal stays in Negotiation > 7 Days without activity",
      actions: ["Flag Deal badge as 'SLA Breach'", "Trigger AI Re-engagement Email Draft", "Notify Sales Manager"],
      active: true,
      executions: 68,
      conversionLift: "+24.1%",
      lastRun: "1 hour ago"
    },
    {
      id: "wf_03",
      name: "Inbound Product-Led Qualification (PLG -> SQL)",
      trigger: "When Contact Lead Score crosses >= 85 AND Workspace seats > 20",
      actions: ["Enrich Company via Clearbit/Apollo API", "Route to Round-Robin Enterprise AE", "Enroll in 4-Step Executive Cadence"],
      active: true,
      executions: 894,
      conversionLift: "+31.0%",
      lastRun: "4 mins ago"
    },
    {
      id: "wf_04",
      name: "Closed-Won Customer Success & Provisioning Handoff",
      trigger: "When Deal Stage changes to Closed Won",
      actions: ["Generate GST Tax Invoice", "Create Onboarding Project in Linear", "Send Welcome Kit to Champion"],
      active: true,
      executions: 53,
      conversionLift: "100% SLA",
      lastRun: "2 days ago"
    },
    {
      id: "wf_05",
      name: "Churn Risk Health Score Intervention (< 65)",
      trigger: "When Account Health Score drops below 65",
      actions: ["Create Urgent QBR Task for Account Owner", "Pause Automated Upsell Sequences"],
      active: false,
      executions: 19,
      conversionLift: "+12.2%",
      lastRun: "5 days ago"
    }
  ],
  tickets: [
    {
      id: "TCK-9041",
      subject: "SAML 2.0 JIT Provisioning Group Mapping Latency",
      companyName: "Stripe FinTech Global",
      contactName: "Claire Hughes Johnson",
      priority: "High",
      slaStatus: "On Track (1h 42m left)",
      status: "In Engineering",
      assignee: "DevOps Escalation",
      created: "3h ago"
    },
    {
      id: "TCK-9038",
      subject: "Custom Webhook Rate Limit Increase Request (5,000 req/min)",
      companyName: "Anthropic AI Research",
      contactName: "Daniela Amodei",
      priority: "Critical",
      slaStatus: "Resolved (22m response)",
      status: "Resolved",
      assignee: "Gavish Gothria",
      created: "1d ago"
    },
    {
      id: "TCK-9032",
      subject: "SOC2 Type II Bridge Letter & Penetration Test Summary",
      companyName: "Datadog Telemetry Corp",
      contactName: "Olivier Pomel",
      priority: "High",
      slaStatus: "Breach Risk (18m left)",
      status: "Awaiting Legal",
      assignee: "Elena Rostova",
      created: "2d ago"
    },
    {
      id: "TCK-9027",
      subject: "INR Multi-State GST Tax Invoice Formatting",
      companyName: "Razorpay India Ltd",
      contactName: "Harshil Mathur",
      priority: "Medium",
      slaStatus: "On Track (6h left)",
      status: "Open",
      assignee: "Finance Ops",
      created: "2d ago"
    }
  ],
  emailTemplates: [
    {
      id: "tpl_exec_align",
      name: "Executive Mutual Action Plan (MAP) Follow-up",
      subject: "{{company}} x Nexus CRM — Executive Alignment & Target Go-Live Schedule",
      body: "Hi {{first_name}},\n\nThank you for walking through {{company}}'s Q4 revenue architecture priorities today. Based on our discussion, consolidating your pipeline telemetry and automating CPQ approvals will cut deal cycle time by ~28%.\n\nI've attached our Mutual Action Plan outlining:\n1. InfoSec & SOC2 Type II verification (Target: Friday)\n2. Sandbox webhook POC with your engineering lead\n3. Commercial MSA redlines & volume tier sign-off for {{deal_amount}}\n\nLet me know if Thursday at 2:00 PM IST works to review the commercial order form together.\n\nBest regards,\n{{sender_name}}\nVP of Revenue Operations, Nexus CRM"
    },
    {
      id: "tpl_stale_rescue",
      name: "SLA Stalled Deal Unblocker (Negotiation Rescue)",
      subject: "Unblocking {{company}} security & commercial review",
      body: "Hi {{first_name}},\n\nI noticed we have a pending item on the security review for {{deal_title}}. To make sure your team hits the planned deployment window before quarter-end, I've looped in our Principal Security Architect to directly address question #42.\n\nIf priorities have shifted on your side, no problem at all—just let me know how we should adjust the target launch date.\n\nWarmly,\n{{sender_name}}"
    },
    {
      id: "tpl_cfo_roi",
      name: "CFO Business Case & TCO Justification",
      subject: "ROI Model: {{company}} Revenue Consolidation ({{deal_amount}} Proposal)",
      body: "Hi {{first_name}},\n\nFor your finance review with the CFO, here is the executive summary of the 3-year Total Cost of Ownership (TCO) for {{company}}:\n\n• Legacy tool consolidation savings: ₹1.18 Cr / yr\n• Rep administrative time recovered: 6.4 hrs / rep / week\n• Projected payback period: 4.2 months\n\nI have generated the formal PDF Quote & GST Order Form in the portal. Happy to jump on a 15-minute call with your procurement lead.\n\nBest,\n{{sender_name}}"
    }
  ],
  customAttributes: [
    { id: "attr_01", object: "Contact", name: "AI Propensity Score", key: "leadScore", type: "Number (0-100)", system: true },
    { id: "attr_02", object: "Contact", name: "Buying Committee Role", key: "sentiment", type: "Select Badge", system: true },
    { id: "attr_03", object: "Deal", name: "MEDDIC Qualification Matrix", key: "meddic", type: "6-Point Checklist", system: true },
    { id: "attr_04", object: "Deal", name: "Forecast Category", key: "forecastCategory", type: "Commit / Best Case / Pipeline", system: true },
    { id: "attr_05", object: "Company", name: "Customer Health Score", key: "healthScore", type: "Weighted Index", system: true },
    { id: "attr_06", object: "Deal", name: "Competitor Displaced", key: "competitor", type: "Multi-Select", system: false }
  ],
  auditLogs: [
    { id: "log_01", timestamp: "2026-11-10 11:15:02", actor: "Gavish Gothria (Admin)", action: "Updated Deal Stage", target: "Anthropic Global Rollout -> Negotiation (₹3,50,00,000)", ip: "103.21.124.88" },
    { id: "log_02", timestamp: "2026-11-10 10:42:19", actor: "System Workflow #wf_02", action: "Flagged SLA Breach", target: "Datadog Global Sales Telemetry Renewal (14d in stage)", ip: "internal-worker-04" },
    { id: "log_03", timestamp: "2026-11-10 09:30:44", actor: "Gavish Gothria (Admin)", action: "Generated CPQ Quote #Q-2026-884", target: "Razorpay India Ltd (₹2,05,00,000)", ip: "103.21.124.88" },
    { id: "log_04", timestamp: "2026-11-09 18:12:05", actor: "Elena Rostova (AE)", action: "Logged Discovery Call", target: "Guillermo Rauch (Vercel Cloud Systems)", ip: "172.56.21.90" }
  ],
  monthlyRevenueSeries: [
    { month: "Jun", closedWon: 32000000, weightedForecast: 34500000, target: 33500000 },
    { month: "Jul", closedWon: 37500000, weightedForecast: 38800000, target: 37800000 },
    { month: "Aug", closedWon: 42800000, weightedForecast: 41600000, target: 42000000 },
    { month: "Sep", closedWon: 41200000, weightedForecast: 44500000, target: 43600000 },
    { month: "Oct", closedWon: 49500000, weightedForecast: 51200000, target: 46200000 },
    { month: "Nov", closedWon: 49500000, weightedForecast: 94600000, target: 71400000 }
  ]
};
