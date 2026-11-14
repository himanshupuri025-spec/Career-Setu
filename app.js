/**
 * CAREERSETU AI — APPLICATION CORE ENGINE
 * Pure Vanilla JavaScript (ES6+)
 * Architecture:
 * 1. Indian Career Database (30+ High-Demand Pathways with ₹ LPA Benchmarks)
 * 2. Multi-Step Assessment Wizard State & Navigation
 * 3. Weighted Scoring & Matching Algorithm
 * 4. Dynamic Dashboard & Roadmap Modal Renderer
 * 5. Saved Paths & Interactive Action Plan Checklist (localStorage)
 * 6. AI Mentor Chat Engine (Local Indian Market Intelligence + Optional Gemini/OpenAI API)
 * 7. Toast & UI Utilities
 */

/* ==========================================================================
   1. INDIAN CAREER KNOWLEDGE BASE (DATABASE)
   ========================================================================== */
const CAREERS_DATABASE = [
  {
    id: 'ai-ml-engineer',
    title: 'AI & Machine Learning Engineer',
    category: 'Technology & AI',
    icon: 'fa-solid fa-brain',
    educationLevels: [
      'Class 12 - Science (PCM)',
      'Undergraduate (Engineering / Tech)',
      'Undergraduate (Arts / Science / Law / Other)',
      'Working Professional (0-3 yrs)'
    ],
    interests: ['Technology & Coding', 'AI & Data Science', 'Mathematics & Quantitative'],
    strengths: ['Coding & Technical Aptitude', 'Analytical & Logical Thinking', 'Creative Problem Solving'],
    workStyles: ['Remote / Desk-based', 'Hybrid (Mix of Office & Home)', 'High-Growth Indian Startup', 'Stable Corporate MNC'],
    salary: {
      entry: '₹8 - ₹16 LPA',
      mid: '₹18 - ₹35 LPA',
      senior: '₹38 - ₹75+ LPA',
      highlight: '₹8 - ₹35 LPA'
    },
    salaryNumeric: 16,
    marketDemand: 'Explosive Growth (Bengaluru, Hyderabad, Pune)',
    growthTier: 'high',
    overview: 'Develops generative AI systems, machine learning models, and automated inference pipelines for leading Indian tech companies, Global Capability Centers (GCCs), and AI startups.',
    requiredSkills: ['Python & PyTorch', 'Transformers & LLMs', 'Data Structures & Algorithms', 'Math & Linear Algebra', 'MLOps & Docker'],
    roadmap: [
      {
        stage: 'Stage 1: Core Mathematical & Programming Foundations',
        desc: 'Master Python, Linear Algebra, Multivariate Calculus, Probability, and Data Structures.',
        tags: ['Python', 'DSA', 'Linear Algebra', 'NPTEL / Coursera']
      },
      {
        stage: 'Stage 2: Machine Learning & Deep Learning Specialization',
        desc: 'Build supervised and unsupervised models; specialize in Deep Learning, PyTorch, and HuggingFace NLP.',
        tags: ['PyTorch', 'Scikit-Learn', 'Hugging Face', 'FastAI']
      },
      {
        stage: 'Stage 3: Production Projects & Open Source Contribution',
        desc: 'Deploy custom LLM RAG pipelines, fine-tune models, publish on GitHub and Kaggle, and seek Bengaluru/Gurgaon startup internships.',
        tags: ['RAG Pipelines', 'Docker & FastAPIs', 'Kaggle Medals', 'GitHub Portfolio']
      },
      {
        stage: 'Stage 4: Placements & High-Compensation Hiring',
        desc: 'Target product startups and MNCs through off-campus platforms (LinkedIn, Wellfound, Instahyre) and campus drives.',
        tags: ['System Design', 'ML System Design Interviews', 'Wellfound', 'Instahyre']
      }
    ],
    exams: ['GATE CS / DA (for M.Tech at IITs/IISc)', 'JEE Main/Adv (IITs/IIITs/NITs)', 'Direct Off-Campus GitHub/LeetCode Evaluation'],
    colleges: ['IIIT Hyderabad (Kohli Centre on Intelligent Systems)', 'IIT Bombay, Madras & Delhi', 'IISc Bengaluru', 'BITS Pilani'],
    pros: [
      'Highest entry-level compensation trajectories among Indian engineering roles.',
      'Massive global remote working opportunities paying in USD/EUR while living in India.',
      'At the epicenter of ongoing technological transformation across Indian GCCs.'
    ],
    cons: [
      'Rapid technological churn requiring weekly learning of new architectures and papers.',
      'Heavy math and algorithmic prerequisite barrier compared to standard web development.',
      'High competition for coveted product startup roles with steep screening rounds.'
    ],
    outlook: 'India hosts 1,600+ Global Capability Centers (GCCs) and a booming startup ecosystem transitioning to AI-native products. Demand for engineers who can fine-tune, deploy, and evaluate LLMs securely will outstrip supply through 2030.'
  },

  {
    id: 'product-manager',
    title: 'Product Manager (PM)',
    category: 'Product & Strategy',
    icon: 'fa-solid fa-cube',
    educationLevels: [
      'Undergraduate (Engineering / Tech)',
      'Undergraduate (Commerce / Management)',
      'Undergraduate (Arts / Science / Law / Other)',
      'Working Professional (0-3 yrs)'
    ],
    interests: ['Product & UI/UX Design', 'Business & Startups', 'Technology & Coding'],
    strengths: ['Leadership & Organization', 'Creative Problem Solving', 'Public Speaking & Pitching', 'Analytical & Logical Thinking'],
    workStyles: ['Hybrid (Mix of Office & Home)', 'High-Growth Indian Startup', 'Stable Corporate MNC'],
    salary: {
      entry: '₹9 - ₹18 LPA',
      mid: '₹20 - ₹42 LPA',
      senior: '₹45 - ₹85+ LPA',
      highlight: '₹9 - ₹42 LPA'
    },
    salaryNumeric: 18,
    marketDemand: 'Very High Growth (Bengaluru, Delhi-NCR, Mumbai)',
    growthTier: 'high',
    overview: 'Acts as the intersection of business, technology, and user experience. Defines the product roadmap, prioritizes feature backlogs, and leads cross-functional teams to launch successful consumer and SaaS apps in India.',
    requiredSkills: ['Product Discovery & User Research', 'Data Analytics (SQL, Mixpanel)', 'PRD Writing', 'A/B Testing', 'Stakeholder Management'],
    roadmap: [
      {
        stage: 'Stage 1: Understanding Tech, Design & Business Fundamentals',
        desc: 'Learn how software is built, basic database querying (SQL), and user journey wireframing (Figma).',
        tags: ['SQL', 'Figma', 'System Overview', 'Product Teardowns']
      },
      {
        stage: 'Stage 2: Product Metrics & APM Preparation',
        desc: 'Master North Star metrics, cohort retention, acquisition funnels, and unit economics in the Indian context (UPI, ONDC, D2C).',
        tags: ['Mixpanel / Amplitude', 'PRDs', 'A/B Testing', 'Growth Metrics']
      },
      {
        stage: 'Stage 3: Build & Ship a Live Side Project',
        desc: 'Solve a real Indian problem: build a no-code app, conduct 30 user interviews, launch on Product Hunt / X, and measure traction.',
        tags: ['Product Hunt', 'No-Code Webflow/Bubble', 'User Interviews', 'Case Studies']
      },
      {
        stage: 'Stage 4: Associate Product Manager (APM) Hiring',
        desc: 'Apply for APM programs at top Indian tech firms (Swiggy, Razorpay, Flipkart, Zomato, PhonePe) or complete an MBA from top IIMs/ISB.',
        tags: ['APM Programs', 'Case Competitions', 'CAT / IIMs', 'ISB Hyderabad']
      }
    ],
    exams: ['CAT / XAT (for IIMs / ISB / XLRI MBA pathway)', 'GMAT (for ISB & International Masters)', 'Direct APM Fellowship Challenges (NextLeap, UpRaised)'],
    colleges: ['IIM Ahmedabad, Bangalore, Calcutta', 'ISB Hyderabad / Mohali', 'IIT Bombay / Delhi / Kharagpur (Tech-to-PM)', 'FMS Delhi & XLRI Jamshedpur'],
    pros: [
      'Direct influence on company strategy, user adoption, and revenue.',
      'Tremendous compensation upside with early equity/ESOPs in Indian unicorns.',
      'Ideal springboard to becoming an entrepreneur or startup Founder/CEO.'
    ],
    cons: [
      'High accountability with zero formal authority over engineering teams.',
      'Frequent context switching and meeting-heavy workdays leading to mental fatigue.',
      'Subjective evaluation criteria during initial hiring without an established degree.'
    ],
    outlook: 'With Indian tech firms shifting from "growth at all costs" to "sustainable monetization and unit economics," experienced PMs who master user psychology and data science are in fierce demand across Bengaluru and Delhi-NCR.'
  },

  {
    id: 'data-analyst-bi',
    title: 'Data Analyst & BI Specialist',
    category: 'Technology & AI',
    icon: 'fa-solid fa-chart-pie',
    educationLevels: [
      'Class 12 - Commerce',
      'Class 12 - Science (PCM)',
      'Undergraduate (Engineering / Tech)',
      'Undergraduate (Commerce / Management)',
      'Undergraduate (Arts / Science / Law / Other)',
      'Working Professional (0-3 yrs)'
    ],
    interests: ['AI & Data Science', 'Finance & Stock Markets', 'Technology & Coding', 'Business & Startups'],
    strengths: ['Numerical & Math Aptitude', 'Analytical & Logical Thinking', 'Attention to Detail'],
    workStyles: ['Remote / Desk-based', 'Hybrid (Mix of Office & Home)', 'Stable Corporate MNC', 'High-Growth Indian Startup'],
    salary: {
      entry: '₹5 - ₹10 LPA',
      mid: '₹12 - ₹24 LPA',
      senior: '₹26 - ₹50+ LPA',
      highlight: '₹5 - ₹24 LPA'
    },
    salaryNumeric: 10,
    marketDemand: 'Consistently High (Pan-India)',
    growthTier: 'high',
    overview: 'Transforms raw enterprise and customer data into interactive dashboards, statistical insights, and executive decision frameworks for e-commerce, banking, and SaaS brands.',
    requiredSkills: ['SQL (Advanced Window Functions)', 'PowerBI / Tableau', 'Python / R (Pandas, Seaborn)', 'Excel Modeling', 'Business Acumen'],
    roadmap: [
      {
        stage: 'Stage 1: Master SQL & Business Spreadsheets',
        desc: 'Learn advanced Excel (Pivot, XLOOKUP) and master relational database querying (PostgreSQL / MySQL) on LeetCode.',
        tags: ['Advanced Excel', 'SQL Mastery', 'PostgreSQL', 'Data Cleaning']
      },
      {
        stage: 'Stage 2: Business Intelligence Dashboarding',
        desc: 'Build publication-grade interactive dashboards in Microsoft Power BI and Tableau tracking Indian retail, logistics, and FinTech data.',
        tags: ['Power BI DAX', 'Tableau Public', 'Data Storytelling', 'KPI Modeling']
      },
      {
        stage: 'Stage 3: Exploratory Data Analysis with Python',
        desc: 'Use Jupyter, Pandas, and NumPy for hypothesis testing, customer segmentation, and automated reporting.',
        tags: ['Python Pandas', 'Matplotlib/Seaborn', 'Statistical Testing', 'GitHub Portfolio']
      },
      {
        stage: 'Stage 4: Portfolio Presentation & Direct Placement',
        desc: 'Publish interactive Tableau Public dashboards and GitHub case studies; target BFSI, analytics consultancies (Mu Sigma, Fractal, Tiger), and GCCs.',
        tags: ['Tableau Public', 'LinkedIn Networking', 'Kaggle', 'Naukri.com']
      }
    ],
    exams: ['No mandatory exam required (Skills & Portfolio driven)', 'CAT / XAT (for MBA in Business Analytics)', 'Microsoft PL-300 Certification'],
    colleges: ['IITs / NITs (B.Tech / B.Sc Stats)', 'St. Xavier\'s & Loyola (Economics & Statistics)', 'IIM Calcutta / IIM Bangalore (Analytics Postgrad)', 'ISI Kolkata (Indian Statistical Institute)'],
    pros: [
      'Accessible entry point into high-paying tech for B.Com, B.Sc, and non-CS engineering graduates.',
      'Strong hybrid and remote availability across Indian IT hubs.',
      'Clear, predictable promotion ladder into Senior Data Scientist or Product Analyst.'
    ],
    cons: [
      'Initial entry-level market can be saturated with candidates holding superficial certificates.',
      'Routine ad-hoc data pull requests can feel repetitive without proactive business projects.',
      'Requires constant upskilling into Python and machine learning to reach top compensation tiers.'
    ],
    outlook: 'Every major Indian bank (HDFC, ICICI, Axis), telecom, and e-commerce firm relies on BI analysts to combat customer churn and optimize digital ad spend. Strong SQL and storytelling skills ensure lifelong career security.'
  },

  {
    id: 'investment-banking',
    title: 'Investment Banking & Equity Research Analyst',
    category: 'Finance & Strategy',
    icon: 'fa-solid fa-chart-line',
    educationLevels: [
      'Class 12 - Commerce',
      'Class 12 - Science (PCM)',
      'Undergraduate (Commerce / Management)',
      'Undergraduate (Engineering / Tech)',
      'Working Professional (0-3 yrs)'
    ],
    interests: ['Finance & Stock Markets', 'Business & Startups', 'Mathematics & Quantitative'],
    strengths: ['Numerical & Math Aptitude', 'Analytical & Logical Thinking', 'Attention to Detail'],
    workStyles: ['Stable Corporate MNC', 'Hybrid (Mix of Office & Home)', 'Collaborative Cross-Functional Team'],
    salary: {
      entry: '₹12 - ₹25 LPA',
      mid: '₹28 - ₹55 LPA',
      senior: '₹60 - ₹1.5 Cr+ LPA',
      highlight: '₹12 - ₹55 LPA'
    },
    salaryNumeric: 25,
    marketDemand: 'Very High Prestige & Compensation (Mumbai, Gurgaon, Bengaluru)',
    growthTier: 'high',
    overview: 'Advises corporations and private equity funds on multi-million dollar Mergers & Acquisitions (M&A), Initial Public Offerings (IPOs on NSE/BSE), and conducts in-depth equity valuations.',
    requiredSkills: ['Financial Modeling & DCF Valuation', 'Three-Statement Financial Analysis', 'Mergers & Acquisitions (M&A)', 'Pitchbook Creation', 'Bloomberg / Capital IQ'],
    roadmap: [
      {
        stage: 'Stage 1: Core Accounting & Corporate Finance',
        desc: 'Master the interaction between Balance Sheets, P&L, and Cash Flow statements; study Indian Companies Act and SEBI regulations.',
        tags: ['Financial Statement Analysis', 'Corporate Finance', 'SEBI Guidelines', 'B.Com / BBA']
      },
      {
        stage: 'Stage 2: Professional Certifications & Modeling',
        desc: 'Enroll in CFA Level 1 or CA Foundation/Inter; build dynamic 3-statement models and Discounted Cash Flow (DCF) valuation templates.',
        tags: ['CFA Program', 'DCF Valuation', 'LBO Modeling', 'Excel Macros']
      },
      {
        stage: 'Stage 3: Top Tier Business School or CA Articleship',
        desc: 'Crack CAT for IIM Ahmedabad, Bangalore, Calcutta, FMS, or complete elite Big-4 corporate finance articleship in Mumbai.',
        tags: ['CAT Exam', 'IIM A/B/C', 'FMS Delhi', 'Big-4 Corporate Finance']
      },
      {
        stage: 'Stage 4: Bulge Bracket & Indian Boutique IB Hiring',
        desc: 'Interview with Goldman Sachs, Morgan Stanley, J.P. Morgan, Kotak Investment Banking, and Avendus Capital.',
        tags: ['M&A Case Studies', 'Financial Modeling Tests', 'Wall Street / Dalal Street Networks']
      }
    ],
    exams: ['CAT (for Tier-1 IIMs / FMS)', 'CFA (Chartered Financial Analyst USA)', 'CA (ICAI Foundation, Inter, Final)', 'GMAT'],
    colleges: ['IIM Ahmedabad, Bangalore, Calcutta', 'FMS Delhi', 'Shri Ram College of Commerce (SRCC, Delhi University)', 'St. Xavier\'s College, Mumbai'],
    pros: [
      'Unmatched early career cash compensation and annual performance bonuses in India.',
      'Deep exposure to boardroom decisions, business valuations, and Dalal Street IPOs.',
      'Prestige gateway to Private Equity (PE), Venture Capital (VC), or CFO roles.'
    ],
    cons: [
      'Notorious 70–90 hour work weeks with weekend pitchbook turnarounds and tight deadlines.',
      'High stress and competitive workplace environment with steep performance filters.',
      'Strong bias toward tier-1 brand colleges (IIM A/B/C, SRCC, IITs) for front-end roles.'
    ],
    outlook: 'India\'s bustling IPO wave, startup consolidations, and renewable energy capital investments make Indian investment banking one of the fastest-growing M&A markets globally.'
  },

  {
    id: 'chartered-accountant',
    title: 'Chartered Accountant (CA) & Strategic Advisor',
    category: 'Finance & Strategy',
    icon: 'fa-solid fa-scale-balanced',
    educationLevels: [
      'Class 12 - Commerce',
      'Undergraduate (Commerce / Management)',
      'Working Professional (0-3 yrs)'
    ],
    interests: ['Finance & Stock Markets', 'Law & Public Policy', 'Business & Startups'],
    strengths: ['Attention to Detail', 'Numerical & Math Aptitude', 'Analytical & Logical Thinking'],
    workStyles: ['Stable Corporate MNC', 'Independent Practice / Freelance', 'Hybrid (Mix of Office & Home)'],
    salary: {
      entry: '₹9 - ₹16 LPA',
      mid: '₹18 - ₹32 LPA',
      senior: '₹35 - ₹70+ LPA',
      highlight: '₹9 - ₹32 LPA'
    },
    salaryNumeric: 16,
    marketDemand: 'Perennial High Demand (Pan-India)',
    growthTier: 'stable',
    overview: 'The statutory gold standard of Indian financial governance. Specializes in auditing, GST, direct taxation, forensic accounting, corporate restructuring, and CFO advisory.',
    requiredSkills: ['Indian Accounting Standards (Ind AS)', 'Direct & Indirect Tax (GST)', 'Statutory & Internal Audit', 'Corporate Law (Companies Act 2013)', 'ERP & SAP FICO'],
    roadmap: [
      {
        stage: 'Stage 1: CA Foundation Examination',
        desc: 'Register with ICAI after Class 12; clear Accounting, Business Laws, Quantitative Aptitude, and Business Economics.',
        tags: ['ICAI Registration', 'CA Foundation', 'Principles of Accounting', 'Business Law']
      },
      {
        stage: 'Stage 2: CA Intermediate (Group 1 & 2)',
        desc: 'Clear 6 papers covering Advanced Accounting, Taxation, Auditing, Financial Management, and Strategic Management.',
        tags: ['CA Intermediate', 'Taxation & GST', 'Audit Standards', 'ICITSS Training']
      },
      {
        stage: 'Stage 3: 2-Year Mandatory Practical Articleship',
        desc: 'Complete intensive hands-on articleship with a Big 4 (PwC, Deloitte, EY, KPMG) or reputed mid-size Indian CA firm.',
        tags: ['Big 4 Articleship', 'Client Audits', 'Tax Filing', 'Forensic Accounting']
      },
      {
        stage: 'Stage 4: CA Final & Campus Placement',
        desc: 'Clear CA Final exams, earn the ACA charter, and participate in ICAI national campus placements.',
        tags: ['CA Final', 'ICAI Campus Placements', 'Corporate CFO Tracks', 'Independent Practice']
      }
    ],
    exams: ['ICAI CA Examinations (Foundation, Intermediate, Final)'],
    colleges: ['ICAI (Statutory Regulatory Body across India)', 'Distance/Regular B.Com from Delhi University, Mumbai University, or IGNOU alongside CA'],
    pros: [
      'Exclusive statutory monopoly on signing audit reports and financial statements under Indian law.',
      'High social prestige, respect, and recession-proof career stability.',
      'Flexibility to choose between global corporate leadership or starting your own lucrative practice.'
    ],
    cons: [
      'Extremely rigorous examination pass percentage (typically 10%–15% in CA Final).',
      'Demanding multi-year articleship stipend alongside intensive study hours.',
      'Heavy penalties and legal liabilities for regulatory oversight errors.'
    ],
    outlook: 'India\'s GST implementation, dynamic tax reforms, and hundreds of startups preparing for SEBI compliance have cemented CAs as indispensable pillars of Indian commerce.'
  },

  {
    id: 'ui-ux-designer',
    title: 'UI/UX & Digital Product Designer',
    category: 'Product & Design',
    icon: 'fa-solid fa-wand-magic-sparkles',
    educationLevels: [
      'Class 12 - Arts / Humanities',
      'Class 12 - Science (PCM)',
      'Undergraduate (Engineering / Tech)',
      'Undergraduate (Arts / Science / Law / Other)',
      'Working Professional (0-3 yrs)'
    ],
    interests: ['Product & UI/UX Design', 'Psychology & Human Behavior', 'Technology & Coding', 'Media & Entertainment'],
    strengths: ['Creative Problem Solving', 'Empathy & Active Listening', 'Attention to Detail'],
    workStyles: ['Remote / Desk-based', 'High-Growth Indian Startup', 'Hybrid (Mix of Office & Home)', 'Independent Practice / Freelance'],
    salary: {
      entry: '₹6 - ₹13 LPA',
      mid: '₹15 - ₹28 LPA',
      senior: '₹30 - ₹60+ LPA',
      highlight: '₹6 - ₹28 LPA'
    },
    salaryNumeric: 13,
    marketDemand: 'High Demand (Bengaluru, Mumbai, Remote)',
    growthTier: 'high',
    overview: 'Designs intuitive mobile and web app interfaces for India\'s next billion digital consumers. Crafts user flows, wireframes, micro-interactions, and design systems in Figma.',
    requiredSkills: ['Figma & FigJam', 'Design Systems (Material / iOS)', 'User Research & Persona Mapping', 'Wireframing & Prototyping', 'Usability Testing'],
    roadmap: [
      {
        stage: 'Stage 1: Design Principles & Figma Mastery',
        desc: 'Master visual hierarchy, typography, color theory, spacing systems, and Figma component auto-layout.',
        tags: ['Figma Auto-Layout', 'Typography', 'Gestalt Principles', 'Color Theory']
      },
      {
        stage: 'Stage 2: UX Research for Indian Demographics',
        desc: 'Understand vernacular UI, low-bandwidth mobile optimization, micro-animations, and Bharat-focused fintech/commerce experiences.',
        tags: ['User Journeys', 'Information Architecture', 'Vernacular UI', 'Accessibility']
      },
      {
        stage: 'Stage 3: Deep Case Studies & Design Portfolio',
        desc: 'Publish 3 comprehensive UX case studies on Behance, Dribbble, or a personal Framer website showing end-to-end problem solving.',
        tags: ['Framer Portfolio', 'Behance', 'UX Case Studies', 'Design Critiques']
      },
      {
        stage: 'Stage 4: Product Startup & Agency Placement',
        desc: 'Target product design roles at Indian unicorns (CRED, Swiggy, Zerodha, Urban Company) or global remote design studios.',
        tags: ['Product Design Interviews', 'Whiteboard Challenges', 'Dribbble Networking']
      }
    ],
    exams: ['UCEED & CEED (IIT Bombay / IDC Design entrance)', 'NID DAT (National Institute of Design)', 'Direct Portfolio Review (90% of industry hiring is purely portfolio-driven)'],
    colleges: ['NID Ahmedabad / Bengaluru', 'IDC School of Design, IIT Bombay', 'Srishti Institute of Art, Design and Technology, Bengaluru', 'MIT Institute of Design, Pune'],
    pros: [
      'High creative autonomy blending psychology, aesthetics, and software strategy.',
      'Outstanding remote work flexibility with international design contracts.',
      'Immediate visual gratification of seeing millions of users interact with your designs.'
    ],
    cons: [
      'Subjective critique cycles from engineers, PMs, and business founders.',
      'High initial bar on portfolio quality (generic clone app projects are instantly rejected).',
      'Need to constantly balance visual delight against business conversion metrics.'
    ],
    outlook: 'Indian startups prioritizing clean, frictionless digital design (like Zerodha and CRED) have proved that great design drives billions in market cap. Skilled product designers remain prized assets.'
  },

  {
    id: 'cloud-devops-engineer',
    title: 'Cloud Architect & DevOps Engineer',
    category: 'Technology & AI',
    icon: 'fa-solid fa-cloud-arrow-up',
    educationLevels: [
      'Class 12 - Science (PCM)',
      'Undergraduate (Engineering / Tech)',
      'Working Professional (0-3 yrs)'
    ],
    interests: ['Technology & Coding', 'Operations & Logistics'],
    strengths: ['Coding & Technical Aptitude', 'Analytical & Logical Thinking', 'High Adaptability'],
    workStyles: ['Remote / Desk-based', 'Hybrid (Mix of Office & Home)', 'Stable Corporate MNC', 'High-Growth Indian Startup'],
    salary: {
      entry: '₹7 - ₹14 LPA',
      mid: '₹16 - ₹32 LPA',
      senior: '₹34 - ₹65+ LPA',
      highlight: '₹7 - ₹32 LPA'
    },
    salaryNumeric: 14,
    marketDemand: 'Very High Demand (Pan-India)',
    growthTier: 'high',
    overview: 'Architects and manages resilient cloud infrastructure on AWS, Azure, and GCP. Automates continuous deployment pipelines (CI/CD) and ensures 99.99% uptime for massive Indian internet applications.',
    requiredSkills: ['Linux & Bash Scripting', 'AWS / Azure Cloud', 'Docker & Kubernetes', 'Terraform (IaC)', 'CI/CD (GitHub Actions / Jenkins)'],
    roadmap: [
      {
        stage: 'Stage 1: System Fundamentals & Scripting',
        desc: 'Master Linux kernel internals, networking protocols (DNS, TCP/IP, SSL), and Bash/Python automation scripting.',
        tags: ['Linux RHEL/Ubuntu', 'Computer Networks', 'Bash Scripting', 'Python']
      },
      {
        stage: 'Stage 2: Cloud Specialization & Containers',
        desc: 'Earn AWS Solutions Architect Associate; containerize microservices using Docker and orchestrate with Kubernetes.',
        tags: ['AWS Solutions Architect', 'Docker', 'Kubernetes (K8s)', 'Microservices']
      },
      {
        stage: 'Stage 3: Infrastructure as Code & CI/CD Pipelines',
        desc: 'Automate multi-region cloud provisioning using Terraform; configure zero-downtime GitHub Actions deployment workflows.',
        tags: ['Terraform', 'GitHub Actions', 'Prometheus & Grafana', 'Site Reliability']
      },
      {
        stage: 'Stage 4: SRE & Cloud Architect Hiring',
        desc: 'Target high-scale Indian consumer platforms (Hotstar, Jio, Paytm, PhonePe) handling millions of concurrent requests during peak events like IPL.',
        tags: ['High Concurrency', 'IPL Scale Engineering', 'Naukri.com', 'LinkedIn']
      }
    ],
    exams: ['AWS Certified Solutions Architect', 'CKA (Certified Kubernetes Administrator)', 'HashiCorp Certified Terraform Associate'],
    colleges: ['IITs / NITs / BITS Pilani', 'Top State Engineering Colleges (COEP Pune, VJTI Mumbai, DTU Delhi)', 'Certifications + GitHub repos often override college pedigree'],
    pros: [
      'Incredible mission-critical value: every modern company requires reliable cloud deployment.',
      'Exceptional remote work potential across international engineering teams.',
      'Faster salary progression than traditional application maintenance roles.'
    ],
    cons: [
      'On-call rotations where infrastructure downtime at 2:00 AM requires urgent resolution.',
      'Requires deep troubleshooting across networking, security, and hardware configurations.',
      'Errors in infrastructure automation can cause expensive cloud bills if unchecked.'
    ],
    outlook: 'India\'s massive digitalization drive, digital public infrastructure (UPI, Aadhaar, DigiLocker), and cloud migrations ensure DevOps and SRE specialists remain among the most sought-after tech professionals.'
  },

  {
    id: 'civil-services-ias',
    title: 'Civil Services Officer (IAS / IPS / IFS)',
    category: 'Governance & Public Policy',
    icon: 'fa-solid fa-landmark',
    educationLevels: [
      'Class 12 - Arts / Humanities',
      'Class 12 - Science (PCM)',
      'Class 12 - Science (PCB)',
      'Class 12 - Commerce',
      'Undergraduate (Arts / Science / Law / Other)',
      'Undergraduate (Engineering / Tech)',
      'Undergraduate (Commerce / Management)',
      'Working Professional (0-3 yrs)'
    ],
    interests: ['Law & Public Policy', 'Psychology & Human Behavior', 'Business & Startups'],
    strengths: ['Leadership & Organization', 'Public Speaking & Pitching', 'Research & Synthesis', 'Empathy & Active Listening'],
    workStyles: ['Government / Civil Services / PSU', 'Fieldwork & On-ground Action'],
    salary: {
      entry: '₹9 - ₹14 LPA (Basic + DA + Perks)',
      mid: '₹15 - ₹24 LPA (Joint Secy)',
      senior: 'Apex ₹2.5L/mo (Cabinet Secy) + Official Residence & Security',
      highlight: '₹9 - ₹24 LPA + State Privileges'
    },
    salaryNumeric: 14,
    marketDemand: 'Pinnacle of Indian Public Service Prestige & Impact',
    growthTier: 'stable',
    overview: 'Leads district administration, public policy formulation, law enforcement, and developmental programs across Indian states, wielding tremendous societal impact and sovereign executive authority.',
    requiredSkills: ['Public Policy & Governance', 'Crisis Management', 'Constitutional Law', 'General Studies & Current Affairs', 'Ethics & Integrity'],
    roadmap: [
      {
        stage: 'Stage 1: Graduation & NCERT Foundation Building',
        desc: 'Complete any recognized undergraduate degree; build exhaustive conceptual foundations from Class 6-12 NCERT textbooks.',
        tags: ['Any Graduation', 'NCERT History/Polity/Geo', 'Newspaper Analysis', 'The Hindu / Indian Express']
      },
      {
        stage: 'Stage 2: UPSC CSE Syllabus Coverage & Optional Subject',
        desc: 'Complete GS Papers 1 to 4 (History, Governance, Economy, Ethics); master one high-scoring Optional Subject (PSIR, Sociology, Geography, Pub Ad, etc.).',
        tags: ['UPSC Prelims GS & CSAT', 'Mains Answer Writing', 'Optional Subject', 'Test Series']
      },
      {
        stage: 'Stage 3: Answer Writing & Prelims Mock Drills',
        desc: 'Practice daily answer writing with structured diagrams and constitutional articles; clear Prelims with 50+ mock exam evaluations.',
        tags: ['Daily Answer Writing', 'Prelims PYQs', 'Mains Test Series', 'Current Affairs Compilations']
      },
      {
        stage: 'Stage 4: Personality Test (Interview) & LBSNAA Training',
        desc: 'Face the UPSC Interview Board in Dholpur House, New Delhi; undergo foundational training at LBSNAA Mussoorie.',
        tags: ['UPSC Interview Board', 'LBSNAA Mussoorie', 'Cadre Allocation', 'District Training']
      }
    ],
    exams: ['UPSC CSE (Civil Services Examination — Prelims, Mains, Interview)', 'State PSC Exams (UPPSC, BPSC, MPSC, KPSC, etc.)'],
    colleges: ['Any UGC-recognized university degree (DU, JNU, IITs, NLUs, State Universities have strong peer cultures)'],
    pros: [
      'Unmatched direct societal impact impacting millions of citizens across health, education, and development.',
      'Sovereign executive authority, official government accommodations, security, and lifelong protocol.',
      'Complete immunity from private corporate recession and job layoffs.'
    ],
    cons: [
      'Intense competition: over 1 million aspirants compete for ~1,000 service seats (0.1% selection rate).',
      'Requires 1 to 3+ years of rigorous, monastic preparation with high opportunity cost.',
      'Political pressures, frequent inter-district transfers, and intense public scrutiny.'
    ],
    outlook: 'India\'s rapid socio-economic transition requires dynamic, tech-savvy administrators capable of managing smart cities, disaster resilience, and digital public infrastructure across diverse districts.'
  },

  {
    id: 'management-consultant',
    title: 'Management & Strategy Consultant',
    category: 'Finance & Strategy',
    icon: 'fa-solid fa-briefcase',
    educationLevels: [
      'Undergraduate (Engineering / Tech)',
      'Undergraduate (Commerce / Management)',
      'Undergraduate (Arts / Science / Law / Other)',
      'Working Professional (0-3 yrs)'
    ],
    interests: ['Business & Startups', 'Finance & Stock Markets', 'Technology & Coding'],
    strengths: ['Analytical & Logical Thinking', 'Creative Problem Solving', 'Public Speaking & Pitching', 'Leadership & Organization'],
    workStyles: ['Collaborative Cross-Functional Team', 'Stable Corporate MNC', 'Hybrid (Mix of Office & Home)'],
    salary: {
      entry: '₹14 - ₹26 LPA',
      mid: '₹28 - ₹55 LPA',
      senior: '₹65 - ₹1.2 Cr+ LPA',
      highlight: '₹14 - ₹55 LPA'
    },
    salaryNumeric: 26,
    marketDemand: 'Elite Demand (Gurgaon, Mumbai, Bengaluru)',
    growthTier: 'high',
    overview: 'Advises CXOs of Fortune 500 enterprises and Indian conglomerates (Tata, Reliance, Aditya Birla) on digital transformation, market entry, cost optimization, and growth strategy.',
    requiredSkills: ['Hypothesis-driven Problem Solving', 'Case Interview Frameworks', 'Financial Modeling', 'Executive Storytelling (Slide Making)', 'Market Sizing (Guesstimates)'],
    roadmap: [
      {
        stage: 'Stage 1: Top Academic Track Record & Case Competitions',
        desc: 'Maintain high GPA; participate in national business case competitions (Tata Crucible, HUL L.I.M.E., Mahindra War Room).',
        tags: ['Case Competitions', 'High GPA', 'Consulting Clubs', 'Undergrad Leadership']
      },
      {
        stage: 'Stage 2: Master Case Frameworks & Guesstimates',
        desc: 'Solve 100+ business cases covering profitability, market entry, pricing, and operational bottlenecks with peer case partners.',
        tags: ['Victor Cheng LOMS', 'Case in Point', 'Market Sizing', 'Structured Thinking']
      },
      {
        stage: 'Stage 3: Top Tier B-School (IIM A/B/C / ISB) or Direct Campus Hire',
        desc: 'Crack CAT exam to secure admission into IIM Ahmedabad, Bangalore, Calcutta, or ISB; secure Day 0 summer internships.',
        tags: ['CAT Exam', 'IIM A/B/C Day 0', 'Summer Associate', 'Big 4 Strategy']
      },
      {
        stage: 'Stage 4: MBB & Global Consulting Onboarding',
        desc: 'Join McKinsey & Company, Boston Consulting Group (BCG), Bain & Company, Kearney, or Strategy&.',
        tags: ['McKinsey & Co.', 'BCG', 'Bain & Co.', 'Executive Advisory']
      }
    ],
    exams: ['CAT / XAT (for top Indian B-Schools)', 'GMAT (for ISB & International MBAs)'],
    colleges: ['IIM Ahmedabad, Bangalore, Calcutta', 'ISB Hyderabad / Mohali', 'IIT Bombay & Delhi (Direct Undergrad Placement)', 'SRCC & St. Stephen\'s (Delhi University)'],
    pros: [
      'Phenomenal compensation packages with luxury 5-star travel and premier flight perks.',
      'Steep learning curve solving high-stakes challenges across diverse industries in 3-month stints.',
      'Highest-caliber alumni network opening doors to VC funds and corporate leadership.'
    ],
    cons: [
      'Frequent domestic and international travel with 60–75 hour intense client delivery weeks.',
      '"Up or Out" promotion policies that demand continuous performance demonstration.',
      'Recommendations can sometimes face client corporate politics and resistance to change.'
    ],
    outlook: 'India\'s ambition to reach a $5 Trillion economy has triggered massive demand for consultants to re-architect legacy manufacturing, green energy transition, and tech stacks.'
  },

  {
    id: 'corporate-tech-lawyer',
    title: 'Corporate & Tech Law Specialist',
    category: 'Governance & Public Policy',
    icon: 'fa-solid fa-gavel',
    educationLevels: [
      'Class 12 - Arts / Humanities',
      'Class 12 - Commerce',
      'Class 12 - Science (PCM)',
      'Undergraduate (Arts / Science / Law / Other)',
      'Working Professional (0-3 yrs)'
    ],
    interests: ['Law & Public Policy', 'Technology & Coding', 'Business & Startups'],
    strengths: ['Research & Synthesis', 'Public Speaking & Pitching', 'Attention to Detail', 'Analytical & Logical Thinking'],
    workStyles: ['Stable Corporate MNC', 'Collaborative Cross-Functional Team', 'Independent Practice / Freelance'],
    salary: {
      entry: '₹9 - ₹18 LPA',
      mid: '₹22 - ₹45 LPA',
      senior: '₹50 - ₹1 Cr+ LPA',
      highlight: '₹9 - ₹45 LPA'
    },
    salaryNumeric: 18,
    marketDemand: 'High Demand (Mumbai, Delhi-NCR, Bengaluru)',
    growthTier: 'high',
    overview: 'Drafts and negotiates multi-million dollar venture capital term sheets, Cross-Border M&A, data privacy (DPDP Act 2023), and AI copyright policies for top Indian law firms and tech giants.',
    requiredSkills: ['Contract Drafting & Negotiation', 'Companies Act 2013 & SEBI Regulations', 'Digital Personal Data Protection (DPDP)', 'Due Diligence', 'Intellectual Property (IP)'],
    roadmap: [
      {
        stage: 'Stage 1: CLAT Examination & NLU Admission',
        desc: 'Crack CLAT (Common Law Admission Test) after Class 12 to secure admission to a 5-year Integrated B.A. LL.B / B.B.A. LL.B.',
        tags: ['CLAT Exam', 'Top 5 NLUs', 'Constitutional Law', 'Legal Reasoning']
      },
      {
        stage: 'Stage 2: Moot Courts, Law Reviews & Tier-1 Internships',
        desc: 'Participate in international moot courts; publish papers on FinTech regulations; complete internships at Tier-1 law firms.',
        tags: ['Moot Court', 'Law Review Papers', 'SEBI / CCI Internships', 'Legal Research']
      },
      {
        stage: 'Stage 3: Corporate Law Firm Day Zero Placements',
        desc: 'Secure Day Zero job offers at Shardul Amarchand Mangaldas, Cyril Amarchand Mangaldas, AZB & Partners, Khaitan & Co, or Trilegal.',
        tags: ['Day Zero Campus Placements', 'M&A Due Diligence', 'VC Term Sheets']
      },
      {
        stage: 'Stage 4: Bar Council Enrollment & In-House Inroads',
        desc: 'Clear the All India Bar Examination (AIBE) and transition toward Senior Associate, Partner, or General Counsel at tech unicorns.',
        tags: ['AIBE Exam', 'Bar Council of India', 'General Counsel Track']
      }
    ],
    exams: ['CLAT (UG & PG for National Law Universities)', 'AILET (NLU Delhi)', 'AIBE (All India Bar Examination)'],
    colleges: ['NLSIU Bengaluru (National Law School)', 'NALSAR Hyderabad', 'WBNUJS Kolkata', 'NLU Delhi & NLU Jodhpur'],
    pros: [
      'Top Tier-1 Indian law firms match elite tech compensation for Day-0 hires.',
      'High intellectual stimulation navigating cutting-edge AI, crypto, and data privacy laws.',
      'Direct gateway to influential corporate boardrooms and judiciary pathways.'
    ],
    cons: [
      'High-stress closing hours during major M&A transactions with late-night document review.',
      'Steep entry competition heavily biased toward top 5 National Law Universities (NLUs).',
      'Requires painstaking meticulousness: a single misplaced comma in a clause can cost crores.'
    ],
    outlook: 'India\'s new Digital Personal Data Protection (DPDP) Act, Competition Commission scrutiny of big tech, and the surge in foreign venture capital make tech-specialized corporate lawyers essential.'
  },

  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst & Ethical Hacker',
    category: 'Technology & AI',
    icon: 'fa-solid fa-shield-halved',
    educationLevels: [
      'Class 12 - Science (PCM)',
      'Undergraduate (Engineering / Tech)',
      'Working Professional (0-3 yrs)'
    ],
    interests: ['Technology & Coding', 'Law & Public Policy', 'Operations & Logistics'],
    strengths: ['Coding & Technical Aptitude', 'Research & Synthesis', 'Attention to Detail'],
    workStyles: ['Remote / Desk-based', 'Stable Corporate MNC', 'Government / Civil Services / PSU'],
    salary: {
      entry: '₹6 - ₹12 LPA',
      mid: '₹14 - ₹28 LPA',
      senior: '₹30 - ₹55+ LPA',
      highlight: '₹6 - ₹28 LPA'
    },
    salaryNumeric: 12,
    marketDemand: 'Critical Shortage in India (High Demand)',
    growthTier: 'high',
    overview: 'Protects critical national infrastructure, banking systems (RBI guidelines), and consumer tech platforms from state-sponsored cyberattacks, ransomware, and zero-day vulnerabilities.',
    requiredSkills: ['Network Security & Wireshark', 'Penetration Testing (Metasploit, Burp Suite)', 'SOC Analysis (SIEM, Splunk)', 'Cryptography Fundamentals', 'Cloud Security'],
    roadmap: [
      {
        stage: 'Stage 1: Networking & Operating System Foundations',
        desc: 'Master Linux command line, TCP/IP networking, firewalls, and Python/Bash scripting for automated security auditing.',
        tags: ['CompTIA Security+', 'Linux Shell', 'TCP/IP', 'Python Scripting']
      },
      {
        stage: 'Stage 2: Hands-on Penetration Testing & CTF Challenges',
        desc: 'Practice ethical hacking on TryHackMe, Hack The Box; learn Web Application Penetration Testing using Burp Suite.',
        tags: ['TryHackMe', 'HackTheBox', 'Burp Suite', 'OWASP Top 10']
      },
      {
        stage: 'Stage 3: Industry-Recognized Certifications (CEH / OSCP)',
        desc: 'Earn Offensive Security Certified Professional (OSCP) or Certified Ethical Hacker (CEH); participate in Indian bug bounty programs.',
        tags: ['OSCP', 'CEH', 'Bug Bounty', 'HackerOne']
      },
      {
        stage: 'Stage 4: Enterprise SOC & Red Team Placement',
        desc: 'Join cybersecurity teams at Big 4 consultancies, Indian defense/CERT-In, BFSI giants, or dedicated cyber agencies.',
        tags: ['CERT-In', 'SOC Level 2', 'Threat Intelligence', 'Zero Trust Architecture']
      }
    ],
    exams: ['OSCP (Offensive Security)', 'CEH (Certified Ethical Hacker)', 'CompTIA Security+ / CySA+'],
    colleges: ['IITs / IIITs (Cybersecurity specializations)', 'Rashtriya Raksha University (National Security University)', 'Forensic Sciences Universities'],
    pros: [
      'Severe talent shortage in India guaranteeing rapid employability and career resilience.',
      'Exciting problem-solving defending real systems from adversarial malicious attacks.',
      'Strong dual opportunities in both elite corporate banking and Indian national defense agencies.'
    ],
    cons: [
      'High-stress incidents during live ransomware breaches requiring immediate mitigation.',
      'Requires constant self-study to track novel malware techniques and vulnerability exploits.',
      'Rigorous compliance paperwork and auditing protocols.'
    ],
    outlook: 'With India recording over 1.3 million cyber security incidents annually and RBI enforcing strict cybersecurity norms for all FinTechs and banks, certified cybersecurity analysts command premium compensation.'
  },

  {
    id: 'digital-growth-marketer',
    title: 'Digital Growth & Performance Marketer',
    category: 'Business & Growth',
    icon: 'fa-solid fa-bullhorn',
    educationLevels: [
      'Class 12 - Commerce',
      'Class 12 - Arts / Humanities',
      'Undergraduate (Commerce / Management)',
      'Undergraduate (Engineering / Tech)',
      'Undergraduate (Arts / Science / Law / Other)',
      'Working Professional (0-3 yrs)'
    ],
    interests: ['Business & Startups', 'Product & UI/UX Design', 'Psychology & Human Behavior'],
    strengths: ['Creative Problem Solving', 'Analytical & Logical Thinking', 'Numerical & Math Aptitude'],
    workStyles: ['Remote / Desk-based', 'High-Growth Indian Startup', 'Independent Practice / Freelance'],
    salary: {
      entry: '₹5 - ₹10 LPA',
      mid: '₹12 - ₹25 LPA',
      senior: '₹28 - ₹55+ LPA',
      highlight: '₹5 - ₹25 LPA'
    },
    salaryNumeric: 10,
    marketDemand: 'High Demand (Bengaluru, Mumbai, Delhi-NCR, Remote)',
    growthTier: 'high',
    overview: 'Scales user acquisition and revenue for Indian D2C brands, EdTech, and SaaS startups using performance ad campaigns (Meta, Google), SEO, conversion rate optimization, and viral loops.',
    requiredSkills: ['Performance Marketing (Meta Ads, Google Ads)', 'SEO & Content Marketing', 'Conversion Rate Optimization (CRO)', 'Customer Acquisition Cost (CAC) & LTV Analysis', 'Analytics (GA4)'],
    roadmap: [
      {
        stage: 'Stage 1: Analytics & Advertising Platform Foundations',
        desc: 'Master Google Analytics 4 (GA4), Meta Ads Manager, Google Search Console, and basic copywriting psychology.',
        tags: ['Google Ads', 'Meta Ads Manager', 'GA4', 'Copywriting']
      },
      {
        stage: 'Stage 2: Run Real Ad Campaigns with Real Budgets',
        desc: 'Manage micro-ad budgets for local Indian businesses or e-commerce stores; optimize click-through rates (CTR) and return on ad spend (ROAS).',
        tags: ['ROAS Optimization', 'Landing Page CRO', 'A/B Ad Creatives', 'Shopify D2C']
      },
      {
        stage: 'Stage 3: Full-Funnel Growth Engineering',
        desc: 'Build automated email/WhatsApp lifecycle funnels (CleverTap, MoEngage, WebEngage) for user retention.',
        tags: ['Retention Marketing', 'WhatsApp Marketing', 'CleverTap / MoEngage', 'Viral Growth']
      },
      {
        stage: 'Stage 4: Head of Growth & Agency Scale',
        desc: 'Lead performance marketing teams at fast-scaling Indian D2C and consumer internet brands.',
        tags: ['Growth Lead', 'D2C Brands', 'Performance Agencies', 'Freelance Consulting']
      }
    ],
    exams: ['Google Ads & Analytics Certifications', 'Meta Certified Digital Marketing Associate', 'HubSpot Inbound Marketing'],
    colleges: ['MICA Ahmedabad (Premier Institute for Strategic Marketing)', 'IIMs (MBA Marketing)', 'Top Commerce/Media Colleges'],
    pros: [
      'Direct, measurable correlation between your marketing campaigns and company revenue.',
      'Tremendous freelancing and agency-building potential serving international brands from India.',
      'Fun, fast-paced blend of creative psychology and quantitative data analysis.'
    ],
    cons: [
      'High daily stress managing volatile ad platform algorithm changes and ad account bans.',
      'Constant pressure on daily ROAS, Customer Acquisition Cost (CAC), and sales targets.',
      'Ad fatigue requiring continuous generation of fresh creative hooks and video ads.'
    ],
    outlook: 'India\'s Direct-to-Consumer (D2C) market is projected to cross $100 Billion, ensuring aggressive hiring for growth marketers who can scale profitable revenue without burning cash.'
  }
];

/* ==========================================================================
   2. APP STATE MANAGEMENT
   ========================================================================== */
const AppState = {
  currentStep: 1,
  totalSteps: 5,
  userProfile: {
    educationLevel: 'Undergraduate (Engineering / Tech)',
    interests: ['Technology & Coding', 'AI & Data Science'],
    strengths: ['Coding & Technical Aptitude', 'Analytical & Logical Thinking'],
    workEnvironment: 'Remote / Desk-based',
    orgType: 'High-Growth Indian Startup',
    teamDynamic: 'Collaborative Cross-Functional Team',
    salaryExpectation: '₹8-14 LPA',
    preferredLocation: 'Bengaluru / Hyderabad (Tech Capital)',
    examsUnderConsideration: ['Direct Job / Campus Hiring'],
    customNotes: ''
  },
  recommendedCareers: [],
  savedCareerIds: [],
  actionItems: [],
  mentorChatHistory: [],
  apiSettings: {
    provider: 'builtin', // 'builtin' | 'gemini' | 'openai'
    apiKey: '',
    model: 'gemini-1.5-flash'
  }
};

/* Storage Keys */
const STORAGE_KEYS = {
  SAVED_CAREERS: 'careersetu_saved_careers_v1',
  ACTION_ITEMS: 'careersetu_action_items_v1',
  API_SETTINGS: 'careersetu_api_settings_v1',
  USER_PROFILE: 'careersetu_user_profile_v1',
  CHAT_HISTORY: 'careersetu_chat_history_v1'
};

/* Preset Tag Master Catalogs */
const INTEREST_TAGS = [
  { name: 'Technology & Coding', icon: 'fa-solid fa-code' },
  { name: 'AI & Data Science', icon: 'fa-solid fa-brain' },
  { name: 'Finance & Stock Markets', icon: 'fa-solid fa-chart-line' },
  { name: 'Product & UI/UX Design', icon: 'fa-solid fa-wand-magic-sparkles' },
  { name: 'Business & Startups', icon: 'fa-solid fa-rocket' },
  { name: 'Law & Public Policy', icon: 'fa-solid fa-scale-balanced' },
  { name: 'Healthcare & Medicine', icon: 'fa-solid fa-stethoscope' },
  { name: 'Content & Writing', icon: 'fa-solid fa-pen-nib' },
  { name: 'Psychology & Human Behavior', icon: 'fa-solid fa-user-group' },
  { name: 'Operations & Logistics', icon: 'fa-solid fa-boxes-packing' },
  { name: 'Teaching & Research', icon: 'fa-solid fa-chalkboard-user' },
  { name: 'Media & Entertainment', icon: 'fa-solid fa-video' }
];

const STRENGTH_TAGS = [
  { name: 'Analytical & Logical Thinking', icon: 'fa-solid fa-magnifying-glass-chart' },
  { name: 'Creative Problem Solving', icon: 'fa-solid fa-lightbulb' },
  { name: 'Coding & Technical Aptitude', icon: 'fa-solid fa-laptop-code' },
  { name: 'Numerical & Math Aptitude', icon: 'fa-solid fa-calculator' },
  { name: 'Public Speaking & Pitching', icon: 'fa-solid fa-microphone-lines' },
  { name: 'Leadership & Organization', icon: 'fa-solid fa-people-roof' },
  { name: 'Empathy & Active Listening', icon: 'fa-solid fa-heart-pulse' },
  { name: 'Research & Synthesis', icon: 'fa-solid fa-book-bookmark' },
  { name: 'Attention to Detail', icon: 'fa-solid fa-bullseye' },
  { name: 'High Adaptability', icon: 'fa-solid fa-shuffle' },
  { name: 'Visual & Spatial Aesthetics', icon: 'fa-solid fa-palette' },
  { name: 'Negotiation & Persuasion', icon: 'fa-solid fa-handshake' }
];

/* Default Action Plan Milestones */
const DEFAULT_ACTION_ITEMS = [
  { id: 'item-1', text: 'Complete CareerSetu 2-minute assessment to identify top pathways', completed: true, tag: 'Assessment' },
  { id: 'item-2', text: 'Bookmark 2 high-matching career paths to compare roadmap stages', completed: false, tag: 'Exploration' },
  { id: 'item-3', text: 'Build a targeted LinkedIn & GitHub / Portfolio profile highlighting key skills', completed: false, tag: 'Networking' },
  { id: 'item-4', text: 'Enroll in 1 foundational certification course (NPTEL, Coursera, or CFA/ICAI)', completed: false, tag: 'Skills' },
  { id: 'item-5', text: 'Ask AI Mentor Aarav about realistic college cutoffs and internship platforms in India', completed: false, tag: 'Mentorship' }
];

/* ==========================================================================
   3. INITIALIZATION & LIFECYCLE
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  loadPersistedData();
  renderInterestTags();
  renderStrengthTags();
  setupOptionEventListeners();
  updateSavedBadges();
  renderActionPlanChecklist();
  
  // Run initial scoring on default inputs so dashboard is ready immediately if navigated to
  computeCareerRecommendations();
  renderRecommendationsDashboard();
});

/**
 * Load state from localStorage
 */
function loadPersistedData() {
  try {
    const savedCareers = localStorage.getItem(STORAGE_KEYS.SAVED_CAREERS);
    if (savedCareers) AppState.savedCareerIds = JSON.parse(savedCareers);

    const savedActions = localStorage.getItem(STORAGE_KEYS.ACTION_ITEMS);
    if (savedActions) {
      AppState.actionItems = JSON.parse(savedActions);
    } else {
      AppState.actionItems = [...DEFAULT_ACTION_ITEMS];
    }

    const savedApi = localStorage.getItem(STORAGE_KEYS.API_SETTINGS);
    if (savedApi) {
      AppState.apiSettings = JSON.parse(savedApi);
      updateApiIndicator();
    }

    const savedProfile = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    if (savedProfile) {
      AppState.userProfile = JSON.parse(savedProfile);
      syncProfileToFormInputs();
    }
  } catch (e) {
    console.warn('Error reading from localStorage:', e);
  }
}

/**
 * Persist helper
 */
function saveStateToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Failed saving to storage:', e);
  }
}

/* ==========================================================================
   4. ASSESSMENT WIZARD & NAVIGATION
   ========================================================================== */

/**
 * Render Interest Tags Grid (Step 2)
 */
function renderInterestTags() {
  const container = document.getElementById('interests-grid');
  if (!container) return;

  container.innerHTML = INTEREST_TAGS.map(tag => {
    const isSelected = AppState.userProfile.interests.includes(tag.name);
    return `
      <button type="button" class="tag-select-btn ${isSelected ? 'active' : ''}" 
              onclick="toggleTagSelection(this, 'interests', '${tag.name}')">
        <span class="tag-icon-circle"><i class="${tag.icon}"></i></span>
        <span>${tag.name}</span>
      </button>
    `;
  }).join('');
}

/**
 * Render Strength Tags Grid (Step 3)
 */
function renderStrengthTags() {
  const container = document.getElementById('strengths-grid');
  if (!container) return;

  container.innerHTML = STRENGTH_TAGS.map(tag => {
    const isSelected = AppState.userProfile.strengths.includes(tag.name);
    return `
      <button type="button" class="tag-select-btn ${isSelected ? 'active' : ''}" 
              onclick="toggleTagSelection(this, 'strengths', '${tag.name}')">
        <span class="tag-icon-circle"><i class="${tag.icon}"></i></span>
        <span>${tag.name}</span>
      </button>
    `;
  }).join('');
}

/**
 * Toggle multi-select tag
 */
function toggleTagSelection(buttonElem, category, tagName) {
  buttonElem.classList.toggle('active');
  const list = AppState.userProfile[category];
  const idx = list.indexOf(tagName);
  if (idx > -1) {
    list.splice(idx, 1);
  } else {
    list.push(tagName);
  }
  saveStateToStorage(STORAGE_KEYS.USER_PROFILE, AppState.userProfile);
}

/**
 * Setup event listeners for radio cards, pills, selects
 */
function setupOptionEventListeners() {
  // Education Level Radios
  document.querySelectorAll('input[name="educationLevel"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      document.querySelectorAll('.option-card[data-group="education"]').forEach(card => card.classList.remove('selected'));
      e.target.closest('.option-card').classList.add('selected');
      AppState.userProfile.educationLevel = e.target.value;
      saveStateToStorage(STORAGE_KEYS.USER_PROFILE, AppState.userProfile);
    });
  });

  // Work Environment Pills
  document.querySelectorAll('#work-env-group .pill-option').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#work-env-group .pill-option').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.userProfile.workEnvironment = pill.getAttribute('data-val');
      saveStateToStorage(STORAGE_KEYS.USER_PROFILE, AppState.userProfile);
    });
  });

  // Organization Type Pills
  document.querySelectorAll('#org-type-group .pill-option').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#org-type-group .pill-option').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.userProfile.orgType = pill.getAttribute('data-val');
      saveStateToStorage(STORAGE_KEYS.USER_PROFILE, AppState.userProfile);
    });
  });

  // Team Dynamic Pills
  document.querySelectorAll('#team-dynamic-group .pill-option').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#team-dynamic-group .pill-option').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.userProfile.teamDynamic = pill.getAttribute('data-val');
      saveStateToStorage(STORAGE_KEYS.USER_PROFILE, AppState.userProfile);
    });
  });

  // Exam Pills (Multi-select)
  document.querySelectorAll('#exam-pills-group .exam-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const examName = pill.getAttribute('data-exam');
      pill.classList.toggle('active');
      const exams = AppState.userProfile.examsUnderConsideration;
      const idx = exams.indexOf(examName);
      if (idx > -1) exams.splice(idx, 1);
      else exams.push(examName);
      saveStateToStorage(STORAGE_KEYS.USER_PROFILE, AppState.userProfile);
    });
  });

  // Salary & Location Selects
  const salarySelect = document.getElementById('salary-expectation');
  if (salarySelect) {
    salarySelect.addEventListener('change', (e) => {
      AppState.userProfile.salaryExpectation = e.target.value;
      saveStateToStorage(STORAGE_KEYS.USER_PROFILE, AppState.userProfile);
    });
  }

  const citiesSelect = document.getElementById('preferred-cities');
  if (citiesSelect) {
    citiesSelect.addEventListener('change', (e) => {
      AppState.userProfile.preferredLocation = e.target.value;
      saveStateToStorage(STORAGE_KEYS.USER_PROFILE, AppState.userProfile);
    });
  }

  // Custom Notes
  const notesTextarea = document.getElementById('user-custom-notes');
  if (notesTextarea) {
    notesTextarea.addEventListener('input', (e) => {
      AppState.userProfile.customNotes = e.target.value;
      saveStateToStorage(STORAGE_KEYS.USER_PROFILE, AppState.userProfile);
    });
  }
}

/**
 * Sync form inputs if user already had saved profile
 */
function syncProfileToFormInputs() {
  const p = AppState.userProfile;
  if (!p) return;

  // Education Radio
  const matchedRadio = document.querySelector(`input[name="educationLevel"][value="${p.educationLevel}"]`);
  if (matchedRadio) {
    matchedRadio.checked = true;
    document.querySelectorAll('.option-card[data-group="education"]').forEach(c => c.classList.remove('selected'));
    matchedRadio.closest('.option-card').classList.add('selected');
  }

  // Salary
  const salSelect = document.getElementById('salary-expectation');
  if (salSelect && p.salaryExpectation) salSelect.value = p.salaryExpectation;

  // Location
  const locSelect = document.getElementById('preferred-cities');
  if (locSelect && p.preferredLocation) locSelect.value = p.preferredLocation;

  // Notes
  const notesTextarea = document.getElementById('user-custom-notes');
  if (notesTextarea && p.customNotes) notesTextarea.value = p.customNotes;
}

/**
 * Step Navigation: Next Step
 */
function goToNextStep() {
  // Validate current step
  if (AppState.currentStep === 1) {
    if (!AppState.userProfile.educationLevel) {
      showToast('Please select your current education level', 'warning');
      return;
    }
  } else if (AppState.currentStep === 2) {
    if (AppState.userProfile.interests.length === 0) {
      showToast('Please select at least 1 core interest area', 'warning');
      return;
    }
  } else if (AppState.currentStep === 3) {
    if (AppState.userProfile.strengths.length === 0) {
      showToast('Please select at least 1 key strength or skill', 'warning');
      return;
    }
  }

  if (AppState.currentStep < AppState.totalSteps) {
    AppState.currentStep++;
    updateWizardUI();
  } else {
    // Reached final step -> Trigger Analysis Animation
    triggerAnalyzingFlow();
  }
}

/**
 * Step Navigation: Previous Step
 */
function goToPreviousStep() {
  if (AppState.currentStep > 1) {
    AppState.currentStep--;
    updateWizardUI();
  }
}

/**
 * Update Wizard UI (Step titles, progress, buttons)
 */
function updateWizardUI() {
  // Hide all steps
  for (let i = 1; i <= AppState.totalSteps; i++) {
    const stepEl = document.getElementById(`wizard-step-${i}`);
    if (stepEl) stepEl.classList.remove('active');
  }

  // Show active step
  const activeStepEl = document.getElementById(`wizard-step-${AppState.currentStep}`);
  if (activeStepEl) activeStepEl.classList.add('active');

  // Step Meta
  const stepTitles = [
    'What is your current education level?',
    'What are your core interests & passions?',
    'What are your key strengths & skills?',
    'What is your preferred work style?',
    'Specific goals, salary targets & Indian exams'
  ];

  const stepSubtitles = [
    'Tell us where you are in your academic or professional journey in India.',
    'Select the industries, domains, and fields that genuinely excite your curiosity.',
    'Highlight the cognitive, technical, and interpersonal skills you enjoy using.',
    'Choose your preferred work environment, company culture, and team structure.',
    'Set realistic compensation goals (₹ LPA), preferred cities, and target entrance tests.'
  ];

  const titleEl = document.getElementById('step-title');
  const subEl = document.getElementById('step-subtitle');
  const indEl = document.getElementById('step-indicator-text');
  const progressFill = document.getElementById('progress-bar-fill');
  const progressPctText = document.getElementById('progress-pct-text');
  const prevBtn = document.getElementById('btn-wizard-prev');
  const nextBtn = document.getElementById('btn-wizard-next');

  if (titleEl) titleEl.textContent = stepTitles[AppState.currentStep - 1];
  if (subEl) subEl.textContent = stepSubtitles[AppState.currentStep - 1];
  if (indEl) indEl.textContent = `Step ${AppState.currentStep} of ${AppState.totalSteps}`;

  const pct = Math.round((AppState.currentStep / AppState.totalSteps) * 100);
  if (progressFill) progressFill.style.width = `${pct}%`;
  if (progressPctText) progressPctText.textContent = `${pct}%`;

  // Previous button visibility
  if (prevBtn) {
    prevBtn.style.display = AppState.currentStep === 1 ? 'none' : 'inline-flex';
  }

  // Next button text
  if (nextBtn) {
    if (AppState.currentStep === AppState.totalSteps) {
      nextBtn.innerHTML = '<span>Generate My Career Matches</span> <i class="fa-solid fa-wand-magic-sparkles"></i>';
    } else {
      nextBtn.innerHTML = '<span>Continue</span> <i class="fa-solid fa-arrow-right"></i>';
    }
  }
}

/**
 * Analyzing screen & transition to recommendations dashboard
 */
function triggerAnalyzingFlow() {
  const wizardBody = document.querySelector('.wizard-body');
  const wizardFooter = document.getElementById('wizard-footer-controls');
  const analyzingScreen = document.getElementById('wizard-analyzing');

  // Hide active step, show analyzing
  document.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));
  if (wizardFooter) wizardFooter.style.display = 'none';
  if (analyzingScreen) analyzingScreen.classList.remove('hidden');

  const statusMessages = [
    'Mapping your strengths to high-growth Indian career clusters...',
    'Analyzing 2026 salary trends in Bengaluru, Mumbai, Gurgaon & Hyderabad...',
    'Filtering relevant entrance exams (CAT, UPSC, GATE, JEE, CLAT)...',
    'Synthesizing personalized educational and project milestones...'
  ];

  let msgIdx = 0;
  const statusEl = document.getElementById('analyzing-status-text');
  const interval = setInterval(() => {
    msgIdx++;
    if (statusEl && statusMessages[msgIdx]) {
      statusEl.textContent = statusMessages[msgIdx];
    }
  }, 400);

  setTimeout(() => {
    clearInterval(interval);
    computeCareerRecommendations();
    renderRecommendationsDashboard();

    // Reset wizard view state in background
    if (analyzingScreen) analyzingScreen.classList.add('hidden');
    if (wizardFooter) wizardFooter.style.display = 'flex';
    AppState.currentStep = 1;
    updateWizardUI();

    // Reveal Recommendations
    const recSection = document.getElementById('recommendations');
    if (recSection) {
      recSection.classList.remove('hidden');
      recSection.scrollIntoView({ behavior: 'smooth' });
    }

    showToast('Your AI Career Matches are ready!', 'success');
  }, 1400);
}

function startAssessmentFlow() {
  navigateToSection('assessment');
  AppState.currentStep = 1;
  updateWizardUI();
  const card = document.querySelector('.assessment-card');
  if (card) card.scrollIntoView({ behavior: 'smooth' });
}

function resetAssessmentConfirm() {
  if (confirm('Do you want to reset your assessment inputs?')) {
    AppState.currentStep = 1;
    AppState.userProfile.interests = ['Technology & Coding'];
    AppState.userProfile.strengths = ['Analytical & Logical Thinking'];
    renderInterestTags();
    renderStrengthTags();
    updateWizardUI();
    showToast('Assessment inputs reset', 'info');
  }
}

/* ==========================================================================
   5. WEIGHTED SCORING & CAREER MATCHING ALGORITHM
   ========================================================================== */
function computeCareerRecommendations() {
  const profile = AppState.userProfile;

  // Score each career in catalog
  const scoredCareers = CAREERS_DATABASE.map(career => {
    let score = 50; // Base score

    // 1. Education Level Compatibility (up to 20 pts)
    if (career.educationLevels.includes(profile.educationLevel)) {
      score += 20;
    } else {
      score += 5;
    }

    // 2. Interests Overlap (up to 30 pts)
    let interestMatches = 0;
    career.interests.forEach(ci => {
      if (profile.interests.some(pi => pi.toLowerCase().includes(ci.toLowerCase()) || ci.toLowerCase().includes(pi.toLowerCase()))) {
        interestMatches++;
      }
    });
    score += Math.min(30, interestMatches * 15);

    // 3. Strengths Overlap (up to 25 pts)
    let strengthMatches = 0;
    career.strengths.forEach(cs => {
      if (profile.strengths.some(ps => ps.toLowerCase().includes(cs.toLowerCase()) || cs.toLowerCase().includes(ps.toLowerCase()))) {
        strengthMatches++;
      }
    });
    score += Math.min(25, strengthMatches * 12);

    // 4. Work Style & Org Type Compatibility (up to 15 pts)
    if (career.workStyles.some(ws => ws.includes(profile.workEnvironment) || profile.workEnvironment.includes(ws))) {
      score += 8;
    }
    if (career.workStyles.some(ws => ws.includes(profile.orgType) || profile.orgType.includes(ws))) {
      score += 7;
    }

    // 5. Custom Notes Semantic Boosting (bonus up to 10 pts)
    if (profile.customNotes) {
      const notesLower = profile.customNotes.toLowerCase();
      if (notesLower.includes(career.title.toLowerCase()) || 
          career.requiredSkills.some(s => notesLower.includes(s.toLowerCase()))) {
        score += 10;
      }
    }

    // Clamp score to realistic high-match bracket (72% to 98%)
    const finalMatch = Math.min(98, Math.max(72, Math.round(score * 0.95)));

    return {
      ...career,
      matchScore: finalMatch
    };
  });

  // Sort descending by match score
  scoredCareers.sort((a, b) => b.matchScore - a.matchScore);

  // Take top 4 tailored recommendations
  AppState.recommendedCareers = scoredCareers.slice(0, 4);
}

/* ==========================================================================
   6. RECOMMENDATIONS DASHBOARD RENDERER
   ========================================================================== */
function renderRecommendationsDashboard() {
  const container = document.getElementById('recommendations-cards-container');
  if (!container) return;

  const summaryEdu = document.getElementById('summary-education-tag');
  const summaryInterests = document.getElementById('summary-interests-preview');
  const matchCountNum = document.getElementById('match-count-num');

  if (summaryEdu) summaryEdu.textContent = AppState.userProfile.educationLevel;
  if (summaryInterests) {
    summaryInterests.textContent = AppState.userProfile.interests.slice(0, 3).join(', ');
  }
  if (matchCountNum) matchCountNum.textContent = AppState.recommendedCareers.length;

  if (AppState.recommendedCareers.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box" style="grid-column: 1 / -1;">
        <i class="fa-solid fa-magnifying-glass empty-icon"></i>
        <h4>No career matches found</h4>
        <p>Try adjusting your education level or interest tags to view tailored matches.</p>
        <button class="btn btn-primary btn-sm" onclick="startAssessmentFlow()">Adjust Inputs</button>
      </div>
    `;
    return;
  }

  container.innerHTML = AppState.recommendedCareers.map(career => {
    const isBookmarked = AppState.savedCareerIds.includes(career.id);
    return `
      <div class="career-card card-glass" id="career-card-${career.id}">
        
        <div class="career-card-top">
          <div class="career-role-header">
            <div class="career-icon-box">
              <i class="${career.icon}"></i>
            </div>
            <div class="career-title-wrap">
              <h3 class="career-card-title">${career.title}</h3>
              <span class="career-card-category">${career.category}</span>
            </div>
          </div>
          <button class="bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" 
                  onclick="toggleBookmarkCareer('${career.id}')"
                  title="${isBookmarked ? 'Remove from Saved' : 'Save this career'}"
                  aria-label="Bookmark ${career.title}">
            <i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
          </button>
        </div>

        <div class="match-score-strip">
          <div class="match-score-pill">
            <i class="fa-solid fa-circle-check"></i>
            <span>${career.matchScore}% Match</span>
          </div>
          <span class="market-demand-badge">${career.marketDemand}</span>
        </div>

        <p class="career-overview-text">${career.overview}</p>

        <div class="salary-highlight-box">
          <div class="salary-box-header">
            <span class="salary-box-label"><i class="fa-solid fa-indian-rupee-sign"></i> Expected Indian Package (LPA)</span>
            <span class="text-emerald font-mono" style="font-size:0.75rem;">Entry to Mid</span>
          </div>
          <div class="salary-range-value">${career.salary.highlight}</div>
        </div>

        <div class="career-skills-list">
          ${career.requiredSkills.slice(0, 4).map(skill => `<span class="skill-chip">${skill}</span>`).join('')}
        </div>

        <div class="career-card-footer">
          <button class="btn btn-primary btn-sm btn-glow" style="flex: 1;" onclick="openCareerRoadmapModal('${career.id}')">
            <span>View Full Roadmap</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
          <button class="btn btn-secondary btn-sm" onclick="askAiAboutRole('${career.title}')" title="Ask AI Mentor about this role">
            <i class="fa-solid fa-robot"></i>
          </button>
        </div>

      </div>
    `;
  }).join('');
}

/**
 * Sort recommendations on the dashboard
 */
function sortRecommendations(criteria, e) {
  const ev = e || window.event;
  // Update button active states
  document.querySelectorAll('.filter-group .filter-chip').forEach(btn => btn.classList.remove('active'));
  if (ev && ev.target) {
    const chip = ev.target.closest('.filter-chip') || ev.target;
    chip.classList.add('active');
  }

  if (criteria === 'match') {
    AppState.recommendedCareers.sort((a, b) => b.matchScore - a.matchScore);
  } else if (criteria === 'salary') {
    AppState.recommendedCareers.sort((a, b) => b.salaryNumeric - a.salaryNumeric);
  } else if (criteria === 'growth') {
    AppState.recommendedCareers.sort((a, b) => (b.growthTier === 'high' ? 1 : -1));
  }
  renderRecommendationsDashboard();
}

/**
 * Quick filter from hero trending pills
 */
function quickFilterFromHero(careerNameKeyword) {
  const found = CAREERS_DATABASE.find(c => c.title.toLowerCase().includes(careerNameKeyword.toLowerCase()));
  if (found) {
    openCareerRoadmapModal(found.id);
  } else {
    toggleMentorDrawer(`Tell me about realistic salaries, exams, and career roadmaps for: ${careerNameKeyword}`);
  }
}

/* ==========================================================================
   7. CAREER ROADMAP MODAL / DRAWER
   ========================================================================== */
let activeModalCareerId = null;

function openCareerRoadmapModal(careerId) {
  const career = CAREERS_DATABASE.find(c => c.id === careerId);
  if (!career) return;
  activeModalCareerId = careerId;

  // Header Elements
  const modalTitle = document.getElementById('modal-career-title');
  const modalSub = document.getElementById('modal-career-subtitle');
  const matchBadge = document.getElementById('modal-match-badge');
  const growthBadge = document.getElementById('modal-growth-badge');
  const categoryBadge = document.getElementById('modal-category-badge');

  if (modalTitle) modalTitle.textContent = career.title;
  if (modalSub) modalSub.textContent = career.overview;
  
  // Find current match score if calculated, otherwise default 90%
  const currentMatch = career.matchScore || 92;
  if (matchBadge) matchBadge.textContent = `${currentMatch}% Match`;
  if (growthBadge) growthBadge.textContent = career.marketDemand;
  if (categoryBadge) categoryBadge.textContent = career.category;

  // Salary Tiers
  const entrySal = document.getElementById('modal-salary-entry');
  const midSal = document.getElementById('modal-salary-mid');
  const seniorSal = document.getElementById('modal-salary-senior');

  if (entrySal) entrySal.textContent = career.salary.entry;
  if (midSal) midSal.textContent = career.salary.mid;
  if (seniorSal) seniorSal.textContent = career.salary.senior;

  // Stepper Roadmap Timeline
  const timelineContainer = document.getElementById('modal-timeline-container');
  if (timelineContainer && career.roadmap) {
    timelineContainer.innerHTML = career.roadmap.map((stage, idx) => `
      <div class="timeline-stage">
        <div class="stage-marker">${idx + 1}</div>
        <div class="stage-content">
          <h4 class="stage-title">${stage.stage}</h4>
          <p class="stage-desc">${stage.desc}</p>
          <div class="stage-tags">
            ${stage.tags.map(t => `<span class="stage-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  // Exams List
  const examsList = document.getElementById('modal-exams-list');
  if (examsList && career.exams) {
    examsList.innerHTML = career.exams.map(e => `<li>${e}</li>`).join('');
  }

  // Colleges List
  const collegesList = document.getElementById('modal-colleges-list');
  if (collegesList && career.colleges) {
    collegesList.innerHTML = career.colleges.map(c => `<li>${c}</li>`).join('');
  }

  // Pros & Cons
  const prosList = document.getElementById('modal-pros-list');
  if (prosList && career.pros) {
    prosList.innerHTML = career.pros.map(p => `<li>${p}</li>`).join('');
  }

  const consList = document.getElementById('modal-cons-list');
  if (consList && career.cons) {
    consList.innerHTML = career.cons.map(c => `<li>${c}</li>`).join('');
  }

  // Outlook
  const outlookText = document.getElementById('modal-outlook-text');
  if (outlookText && career.outlook) {
    outlookText.textContent = career.outlook;
  }

  // Update Bookmark button state
  updateModalBookmarkButton();

  // Show Modal
  const modal = document.getElementById('roadmap-modal');
  if (modal) modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeRoadmapModal() {
  const modal = document.getElementById('roadmap-modal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = 'auto';
  activeModalCareerId = null;
}

function updateModalBookmarkButton() {
  const btn = document.getElementById('modal-bookmark-toggle-btn');
  if (!btn || !activeModalCareerId) return;

  const isBookmarked = AppState.savedCareerIds.includes(activeModalCareerId);
  if (isBookmarked) {
    btn.innerHTML = '<i class="fa-solid fa-bookmark text-amber"></i> <span>Saved to My Paths</span>';
  } else {
    btn.innerHTML = '<i class="fa-regular fa-bookmark"></i> <span>Save to My Paths</span>';
  }
}

function handleModalBookmarkToggle() {
  if (!activeModalCareerId) return;
  toggleBookmarkCareer(activeModalCareerId);
  updateModalBookmarkButton();
}

/**
 * Add the 4 roadmap stages of this career directly into user's personal Action Plan checklist
 */
function addModalRoadmapToMilestones() {
  const career = CAREERS_DATABASE.find(c => c.id === activeModalCareerId);
  if (!career || !career.roadmap) return;

  career.roadmap.forEach((stage, idx) => {
    const newId = `stage-${career.id}-${idx + 1}-${Date.now()}`;
    // Avoid duplicate text
    const exists = AppState.actionItems.some(item => item.text === `${career.title}: ${stage.stage}`);
    if (!exists) {
      AppState.actionItems.unshift({
        id: newId,
        text: `${career.title}: ${stage.stage} — ${stage.tags.join(', ')}`,
        completed: false,
        tag: career.title.split(' ')[0]
      });
    }
  });

  saveStateToStorage(STORAGE_KEYS.ACTION_ITEMS, AppState.actionItems);
  renderActionPlanChecklist();
  showToast(`Added ${career.roadmap.length} milestones for ${career.title} to your Action Plan!`, 'success');
}

function askAiAboutCurrentModalRole() {
  const career = CAREERS_DATABASE.find(c => c.id === activeModalCareerId);
  closeRoadmapModal();
  if (career) {
    toggleMentorDrawer(`What are the highest-paying entry routes and interview expectations for ${career.title} in India?`);
  }
}

/* ==========================================================================
   8. SAVED PATHS & ACTION PLAN TRACKER
   ========================================================================== */
function toggleBookmarkCareer(careerId) {
  const career = CAREERS_DATABASE.find(c => c.id === careerId);
  if (!career) return;

  const idx = AppState.savedCareerIds.indexOf(careerId);
  if (idx > -1) {
    AppState.savedCareerIds.splice(idx, 1);
    showToast(`Removed "${career.title}" from saved paths`, 'info');
  } else {
    AppState.savedCareerIds.push(careerId);
    showToast(`Saved "${career.title}" to your career hub!`, 'success');
  }

  saveStateToStorage(STORAGE_KEYS.SAVED_CAREERS, AppState.savedCareerIds);
  updateSavedBadges();
  renderSavedCareersList();
  renderRecommendationsDashboard(); // re-sync card icon
}

function updateSavedBadges() {
  const count = AppState.savedCareerIds.length;
  const navBadge = document.getElementById('saved-count-badge');
  const mobBadge = document.getElementById('saved-count-mobile');
  const cardBadge = document.getElementById('saved-cards-count');

  if (navBadge) navBadge.textContent = count;
  if (mobBadge) mobBadge.textContent = count;
  if (cardBadge) cardBadge.textContent = count;
}

function renderSavedCareersList() {
  const container = document.getElementById('saved-cards-list');
  const emptyState = document.getElementById('saved-empty-state');
  if (!container) return;

  if (AppState.savedCareerIds.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box">
        <div class="empty-icon"><i class="fa-regular fa-bookmark"></i></div>
        <h4>No saved careers yet</h4>
        <p>Complete the assessment and click the bookmark button on any career card to save it here.</p>
        <button class="btn btn-secondary btn-sm" onclick="startAssessmentFlow()">Start Assessment</button>
      </div>
    `;
    return;
  }

  container.innerHTML = AppState.savedCareerIds.map(id => {
    const career = CAREERS_DATABASE.find(c => c.id === id);
    if (!career) return '';
    return `
      <div class="saved-mini-card">
        <div class="mini-card-left">
          <div class="mini-icon"><i class="${career.icon}"></i></div>
          <div class="mini-info">
            <h4>${career.title}</h4>
            <span class="mini-salary"><i class="fa-solid fa-indian-rupee-sign"></i> ${career.salary.highlight}</span>
          </div>
        </div>
        <div class="mini-actions">
          <button class="btn btn-primary btn-xs" onclick="openCareerRoadmapModal('${career.id}')">Roadmap</button>
          <button class="icon-btn" onclick="toggleBookmarkCareer('${career.id}')" title="Remove"><i class="fa-solid fa-xmark"></i></button>
        </div>
      </div>
    `;
  }).join('');
}

/* Action Checklist */
function renderActionPlanChecklist() {
  const container = document.getElementById('action-checklist-container');
  if (!container) return;

  const total = AppState.actionItems.length;
  const completed = AppState.actionItems.filter(i => i.completed).length;
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);

  const pctLabel = document.getElementById('checklist-pct-label');
  const barFill = document.getElementById('checklist-progress-bar');
  const statText = document.getElementById('action-plan-completion-stat');

  if (pctLabel) pctLabel.textContent = `${pct}% Done`;
  if (barFill) barFill.style.width = `${pct}%`;
  if (statText) statText.textContent = `${completed} of ${total} Milestones Completed`;

  if (AppState.actionItems.length === 0) {
    container.innerHTML = `
      <p class="text-muted" style="text-align: center; padding: 2rem 0;">No active milestones. Add your custom task above or click "Reload Recommended Milestones".</p>
    `;
    return;
  }

  container.innerHTML = AppState.actionItems.map(item => `
    <div class="checklist-item ${item.completed ? 'completed' : ''}" id="item-${item.id}">
      <div class="checkbox-custom" onclick="toggleActionItem('${item.id}')">
        ${item.completed ? '<i class="fa-solid fa-check"></i>' : ''}
      </div>
      <span class="item-text" onclick="toggleActionItem('${item.id}')">${item.text}</span>
      ${item.tag ? `<span class="item-tag">${item.tag}</span>` : ''}
      <button class="btn-ghost item-delete-btn" onclick="deleteActionItem('${item.id}')" title="Delete task">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `).join('');
}

function toggleActionItem(id) {
  const item = AppState.actionItems.find(i => i.id === id);
  if (!item) return;
  item.completed = !item.completed;
  saveStateToStorage(STORAGE_KEYS.ACTION_ITEMS, AppState.actionItems);
  renderActionPlanChecklist();
}

function deleteActionItem(id) {
  AppState.actionItems = AppState.actionItems.filter(i => i.id !== id);
  saveStateToStorage(STORAGE_KEYS.ACTION_ITEMS, AppState.actionItems);
  renderActionPlanChecklist();
}

function handleCustomTaskAdd(e) {
  e.preventDefault();
  const input = document.getElementById('custom-task-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  AppState.actionItems.unshift({
    id: 'custom-' + Date.now(),
    text: text,
    completed: false,
    tag: 'Custom Goal'
  });

  input.value = '';
  saveStateToStorage(STORAGE_KEYS.ACTION_ITEMS, AppState.actionItems);
  renderActionPlanChecklist();
  showToast('Milestone added to your Action Plan!', 'success');
}

function clearCompletedMilestones() {
  AppState.actionItems = AppState.actionItems.filter(i => !i.completed);
  saveStateToStorage(STORAGE_KEYS.ACTION_ITEMS, AppState.actionItems);
  renderActionPlanChecklist();
  showToast('Cleared completed items', 'info');
}

function resetDefaultMilestones() {
  AppState.actionItems = [...DEFAULT_ACTION_ITEMS];
  saveStateToStorage(STORAGE_KEYS.ACTION_ITEMS, AppState.actionItems);
  renderActionPlanChecklist();
  showToast('Reset to recommended milestones', 'success');
}

/* ==========================================================================
   9. INTERACTIVE AI MENTOR CHAT SYSTEM ("AARAV")
   ========================================================================== */
function toggleMentorDrawer(initialMessage = null) {
  const drawer = document.getElementById('mentor-drawer');
  const backdrop = document.getElementById('mentor-backdrop');
  if (!drawer) return;

  const isOpen = drawer.classList.contains('open');
  if (isOpen && !initialMessage) {
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
  } else {
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    
    if (initialMessage) {
      sendQuickPrompt(initialMessage);
    } else {
      const input = document.getElementById('mentor-chat-input');
      if (input) setTimeout(() => input.focus(), 300);
    }
  }
}

function askAiAboutRole(roleTitle) {
  toggleMentorDrawer(`What is the step-by-step roadmap, required certifications, and entry salary for ${roleTitle} in India?`);
}

function sendQuickPrompt(promptText) {
  const input = document.getElementById('mentor-chat-input');
  if (input) {
    input.value = promptText;
    handleMentorChatSubmit(new Event('submit'));
  }
}

function handleChatInputKeydown(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    handleMentorChatSubmit(e);
  }
}

let lastFailedUserPrompt = '';

async function handleMentorChatSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();
  const input = document.getElementById('mentor-chat-input');
  if (!input) return;

  const userQuery = input.value.trim();
  if (!userQuery) return;

  lastFailedUserPrompt = userQuery;

  // Append user bubble & save to memory
  appendChatBubble('user', userQuery);
  AppState.mentorChatHistory.push({ sender: 'user', text: userQuery });
  input.value = '';

  // Show typing indicator
  const typingIndicatorId = appendTypingIndicator();

  // Scroll to bottom
  scrollChatToBottom();

  const provider = AppState.apiSettings.provider || 'builtin';
  const apiKey = sanitizeApiKey(AppState.apiSettings.apiKey);
  const targetModel = AppState.apiSettings.model;

  try {
    let aiResponse = '';
    let badgeHtml = '';

    if (provider === 'gemini' && apiKey) {
      aiResponse = await executeGeminiRequest(userQuery, apiKey, targetModel, AppState.mentorChatHistory);
      badgeHtml = `<span class="chat-provider-badge gemini"><i class="fa-solid fa-bolt"></i> Gemini (${targetModel || '1.5 Flash'})</span>`;
    } else if (provider === 'openai' && apiKey) {
      aiResponse = await executeOpenAiRequest(userQuery, apiKey, targetModel, AppState.mentorChatHistory);
      badgeHtml = `<span class="chat-provider-badge openai"><i class="fa-solid fa-bolt"></i> OpenAI (${targetModel || 'GPT-4o Mini'})</span>`;
    } else if (provider === 'groq' && apiKey) {
      aiResponse = await executeGroqRequest(userQuery, apiKey, targetModel, AppState.mentorChatHistory);
      badgeHtml = `<span class="chat-provider-badge groq"><i class="fa-solid fa-bolt"></i> Groq (${targetModel || 'Llama 3.3'})</span>`;
    } else if (provider === 'openrouter' && apiKey) {
      aiResponse = await executeOpenRouterRequest(userQuery, apiKey, targetModel, AppState.mentorChatHistory);
      badgeHtml = `<span class="chat-provider-badge openrouter"><i class="fa-solid fa-bolt"></i> OpenRouter</span>`;
    } else {
      // Built-in Curated Indian Knowledge Engine
      aiResponse = generateLocalMentorResponse(userQuery);
      badgeHtml = `<span class="chat-provider-badge"><i class="fa-solid fa-brain"></i> Built-in Advisor</span>`;
    }

    removeTypingIndicator(typingIndicatorId);
    appendChatBubble('ai', aiResponse, badgeHtml);
    AppState.mentorChatHistory.push({ sender: 'ai', text: aiResponse });
  } catch (err) {
    console.error('LLM API Error:', err);
    removeTypingIndicator(typingIndicatorId);
    
    // Parse friendly diagnostic message
    const parsed = parseApiErrorMessage(err, provider);
    appendChatErrorCard(parsed.message, PROVIDER_CONFIGS[provider]?.name || provider, userQuery);
  }

  scrollChatToBottom();
}

function retryLastUserPrompt() {
  if (!lastFailedUserPrompt) return;
  const input = document.getElementById('mentor-chat-input');
  if (input) {
    input.value = lastFailedUserPrompt;
    handleMentorChatSubmit(new Event('submit'));
  }
}

function answerLastPromptWithBuiltIn() {
  if (!lastFailedUserPrompt) return;
  const typingIndicatorId = appendTypingIndicator();
  setTimeout(() => {
    removeTypingIndicator(typingIndicatorId);
    const fallback = generateLocalMentorResponse(lastFailedUserPrompt);
    const badge = `<span class="chat-provider-badge"><i class="fa-solid fa-brain"></i> Built-in Advisor</span>`;
    appendChatBubble('ai', fallback, badge);
    AppState.mentorChatHistory.push({ sender: 'ai', text: fallback });
    scrollChatToBottom();
  }, 400);
}

function appendChatErrorCard(errMessage, providerName, userQuery) {
  const container = document.getElementById('mentor-messages');
  if (!container) return;

  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble ai';
  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  bubble.innerHTML = `
    <div class="bubble-sender">
      <i class="fa-solid fa-triangle-exclamation text-rose"></i> 
      <span>Connection Error</span>
      <span class="chat-provider-badge" style="background: rgba(244, 63, 94, 0.15); color: #FB7185; border-color: rgba(244, 63, 94, 0.3);">
        ${providerName}
      </span>
    </div>
    <div class="chat-error-card">
      <div class="chat-error-title">
        <i class="fa-solid fa-circle-xmark"></i> Live API call failed
      </div>
      <div class="chat-error-message">${errMessage}</div>
      <div class="chat-error-actions">
        <button class="chat-error-btn primary" onclick="answerLastPromptWithBuiltIn()">
          <i class="fa-solid fa-brain"></i> Answer with Built-in Engine
        </button>
        <button class="chat-error-btn secondary" onclick="retryLastUserPrompt()">
          <i class="fa-solid fa-rotate-right"></i> Retry API Call
        </button>
        <button class="chat-error-btn secondary" onclick="openApiModal()">
          <i class="fa-solid fa-gear"></i> Change API Key
        </button>
      </div>
    </div>
    <span class="bubble-time">${now}</span>
  `;

  container.appendChild(bubble);
  scrollChatToBottom();
}

function appendChatBubble(sender, text, providerBadge = '') {
  const container = document.getElementById('mentor-messages');
  if (!container) return;

  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender}`;

  const formattedText = formatChatMessage(text);
  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  bubble.innerHTML = `
    <div class="bubble-sender">
      <i class="fa-solid ${sender === 'ai' ? 'fa-brain' : 'fa-user'}"></i> 
      ${sender === 'ai' ? 'Aarav AI' : 'You'}
      ${providerBadge}
    </div>
    <div class="bubble-text">${formattedText}</div>
    <span class="bubble-time">${now}</span>
  `;

  container.appendChild(bubble);
}

function appendTypingIndicator() {
  const container = document.getElementById('mentor-messages');
  if (!container) return null;

  const id = 'typing-' + Date.now();
  const typingBubble = document.createElement('div');
  typingBubble.className = 'chat-bubble ai';
  typingBubble.id = id;
  typingBubble.innerHTML = `
    <div class="bubble-sender"><i class="fa-solid fa-brain"></i> Aarav AI</div>
    <div class="bubble-text" style="display: flex; gap: 6px; align-items: center; padding: 12px 18px;">
      <i class="fa-solid fa-circle text-indigo" style="font-size: 8px; animation: bounce 1.2s infinite 0.1s;"></i>
      <i class="fa-solid fa-circle text-indigo" style="font-size: 8px; animation: bounce 1.2s infinite 0.3s;"></i>
      <i class="fa-solid fa-circle text-indigo" style="font-size: 8px; animation: bounce 1.2s infinite 0.5s;"></i>
    </div>
  `;

  container.appendChild(typingBubble);
  return id;
}

function removeTypingIndicator(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function scrollChatToBottom() {
  const container = document.getElementById('mentor-messages');
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
}

function clearMentorChatHistory() {
  const container = document.getElementById('mentor-messages');
  if (container) {
    container.innerHTML = `
      <div class="chat-bubble ai">
        <div class="bubble-sender"><i class="fa-solid fa-brain"></i> Aarav AI</div>
        <div class="bubble-text">
          Chat cleared! Ask me anything regarding career switches, Indian salaries (₹ LPA), college entrance exams (JEE, NEET, CAT, UPSC), or building a strong resume.
        </div>
        <span class="bubble-time">Just now</span>
      </div>
    `;
    showToast('Chat history cleared', 'info');
  }
}

function formatChatMessage(text) {
  // Simple markdown converter (bold, line breaks, bullet lists)
  let formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n- /g, '<br>• ')
    .replace(/\n\d+\. /g, '<br>• ');
  return formatted;
}

/**
 * Built-in Nuanced Indian Career Advisory Knowledge Generator
 */
function generateLocalMentorResponse(query) {
  const q = query.toLowerCase();
  const profile = AppState.userProfile;

  // 1. Transition from B.Com / Non-Tech to Data Analytics
  if (q.includes('b.com') || q.includes('non-tech') || (q.includes('transition') && q.includes('data'))) {
    return `Transitioning from **B.Com / Non-Tech to Data Analytics** in India is one of the most viable and lucrative pivots today. Here is the pragmatic playbook:

1. **Leverage Your Core Accounting Advantage**:
   Tech grads know code, but lack business acumen. As a commerce grad, you understand P&L, balance sheets, and churn. Frame yourself as a **Financial Data Analyst** or **BI Specialist**.

2. **Core 3-Tool Stack (4 Months)**:
   - **SQL (Top Priority)**: Window functions, GROUP BY, joins. Practice on LeetCode and Stratascratch.
   - **Microsoft Power BI**: DAX formulas, interactive dashboards. Build 2 published dashboards on Tableau Public or NovyPro.
   - **Practical Excel**: XLOOKUP, Index-Match, pivot models.

3. **Compensation & Hiring in India**:
   - Starting packages range between **₹4.5 LPA to ₹8.5 LPA** at analytics consultancies (Fractal, Mu Sigma, Genpact) and FinTechs (Paytm, Cred, Groww).
   - After 3 years, skilled analysts command **₹14 - ₹22 LPA**.

Would you like me to suggest 2 realistic portfolio projects using Indian stock market or Swiggy dataset?`;
  }

  // 2. CA vs CFA Comparison
  if ((q.includes('ca') && q.includes('cfa')) || q.includes('chartered accountant vs')) {
    return `Here is an honest, objective breakdown of **CA (ICAI) vs. CFA (US Institute)** in India:

• **Chartered Accountancy (CA)**:
  - **Focus**: Audit, Taxation, GST, Corporate Law, Accounting Standards (Ind AS).
  - **Statutory Power**: CAs hold an exclusive legal monopoly under Indian law to sign off balance sheets and statutory audit reports.
  - **Difficulty & Duration**: 4–5 years with a mandatory 2-year articleship; pass rate ~10-15%. Low academic fees (< ₹80,000 total).
  - **Average Starting Salary**: **₹9 - ₹15 LPA** in Big 4 and corporate finance.

• **Chartered Financial Analyst (CFA)**:
  - **Focus**: Equity Research, Portfolio Management, Fixed Income, Derivatives, M&A.
  - **Scope**: Best for Investment Banking (Mumbai/London/NY), Private Equity, and Mutual Funds.
  - **Cost**: Higher cost (~₹2.5 to ₹4 Lakhs total across 3 levels in USD fees).
  - **Average Starting Salary**: **₹8 - ₹16 LPA** (greatly amplified if paired with an MBA from IIM/ISB).

**Verdict for India**: If you love tax, corporate law, and statutory auditing, choose **CA**. If you want to work on Dalal Street, global hedge funds, and equity valuation, go for **CFA**!`;
  }

  // 3. Tier-3 College Engineer to Top Tech
  if (q.includes('tier-3') || q.includes('tier 3') || q.includes('off-campus') || q.includes('faang')) {
    return `Cracking top product startups and MNCs from a **Tier-3 engineering college in India** is no longer a myth. Here is the blueprint proven by hundreds of Indian engineers:

1. **Ditch Generic Mass-Recruiter Prep**:
   Wipro/TCS/Infosys NQT prep will not get you into high-paying product firms. You must target product hiring tracks.

2. **Master DSA on LeetCode (300+ Problems)**:
   Focus on Patterns: Two Pointers, Sliding Window, Trees, Graphs, Dynamic Programming. Solve the NeetCode 150 list.

3. **Build Full-Stack or AI Artifacts (Not Clones)**:
   Avoid generic Netflix/Spotify clones. Build tools that solve real Indian developer needs (e.g., an automated UPI billing webhook service, an open-source Indian vernacular LLM wrapper).

4. **Off-Campus Platforms That Actually Work**:
   - **Wellfound (formerly AngelList India)**: Highest response rate for Series A/B startups.
   - **Instahyre & Cutshort**: Direct recruiters looking for skill over college name.
   - **Cold DM on LinkedIn / X**: Message Senior Engineers directly with a 2-minute Loom video demo of your project.

Starting salaries at these startups range from **₹10 LPA to ₹24 LPA** for talent regardless of college pedigree.`;
  }

  // 4. UPSC Drop Year vs Corporate Backup
  if (q.includes('upsc') || q.includes('drop year') || q.includes('civil services')) {
    return `Taking a drop year for **UPSC Civil Services (CSE)** is one of the most critical dilemmas in India. Here is the realistic risk-reward framework:

1. **The Hard Mathematics**:
   Over 10 Lakh aspirants apply, ~5 Lakh sit for Prelims, and only ~1,000 make the final list (0.2% success rate).

2. **When 1 Drop Year is Justified**:
   - If you have financial stability to sustain yourself in Delhi/home for 12 months.
   - If your optional subject and basic NCERTs (Class 6-12) are already completed.
   - If you are prepared to study 8–10 hours daily with monk-like discipline.

3. **The 2-Attempt Rule (Golden Recommendation)**:
   - Give **Attempt 1 with full dedication** (1 full drop year).
   - If you don't clear Prelims/Mains by Attempt 2, **immediately take up a corporate job, M.Tech, or MBA**.
   - You can continue preparing on weekends alongside a job. A 4-year blank career gap severely damages private sector hiring if you eventually exit UPSC.`;
  }

  // 5. Product Management without MBA
  if (q.includes('product manager') || q.includes('pm without') || q.includes('apm')) {
    return `Yes! You can definitely become a **Product Manager in India without an MBA**. In fact, top startups (Razorpay, Swiggy, Zerodha, CRED) actively favor builders over theoretical degrees.

**The 3 Proven Entry Routes**:
1. **The APM (Associate Product Manager) Programs**:
   Companies like Flipkart, PhonePe, and Swiggy run annual APM hiring drives that test product thinking, teardowns, and user empathy rather than an MBA degree.

2. **The Internal Transition Route (Fastest)**:
   Join a startup as a Software Engineer, Data Analyst, or Customer Support Lead. Shadow the PM, write PRDs, solve customer tickets, and request an internal transfer after 9–12 months.

3. **Build & Ship Proof of Work**:
   Create a Notion portfolio of 3 comprehensive Product Teardowns (e.g. "How Zomato can reduce cancelled food orders using real-time delivery slot bidding"). Share it on Twitter/LinkedIn and tag founders.

Entry-level APM packages in Bengaluru/Gurgaon range from **₹9 LPA to ₹18 LPA**.`;
  }

  // 6. Generic Contextual Fallback
  return `Thank you for asking! In the context of your background (**${profile.educationLevel}**) and target goals in the Indian market:

1. **Market Trajectory**:
   Roles aligned with **${profile.interests.slice(0, 2).join(' & ')}** are currently seeing strong demand across Indian tech hubs (Bengaluru, Hyderabad, Gurgaon, Mumbai).

2. **Skill Prerequisites**:
   Ensure you balance theoretical knowledge with demonstrable proof-of-work (GitHub repos, published Notion case studies, or cleared certifications).

3. **Compensation Outlook**:
   Based on current Indian market compensation data, candidates with verified practical skills in this domain command **${profile.salaryExpectation}** at entry to mid levels.

Would you like to explore specific entrance exams (like CAT, GATE, or UPSC), or should we discuss building your resume for campus/off-campus placements?`;
}

/* ==========================================================================
   10. LIVE LLM API CONNECTORS & PROVIDER CONFIGS
   ========================================================================== */
const PROVIDER_CONFIGS = {
  builtin: {
    name: 'Built-in Indian Career Engine',
    models: [{ id: 'local-indian-advisor', name: 'Built-in Curated Intelligence (100% Offline)' }],
    defaultModel: 'local-indian-advisor',
    helpText: 'No API key required. Pre-loaded with 12+ verified Indian career paths, college cutoffs, and ₹ LPA benchmarks.'
  },
  gemini: {
    name: 'Google Gemini',
    models: [
      { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash (Recommended • Free Tier)' },
      { id: 'gemini-2.0-flash', name: 'Gemini 2.0 Flash (Next-Gen Fast)' },
      { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro (Deep Reasoning & Analysis)' },
      { id: 'gemini-1.5-flash-8b', name: 'Gemini 1.5 Flash-8B (Lightweight & Low Latency)' },
      { id: 'custom', name: 'Custom Model ID...' }
    ],
    defaultModel: 'gemini-1.5-flash',
    helpText: 'Get a free Gemini API key from <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">Google AI Studio</a>.'
  },
  openai: {
    name: 'OpenAI',
    models: [
      { id: 'gpt-4o-mini', name: 'GPT-4o Mini (Fast & Cost-Effective)' },
      { id: 'gpt-4o', name: 'GPT-4o (High Intelligence Flagship)' },
      { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo (Legacy)' },
      { id: 'custom', name: 'Custom Model ID...' }
    ],
    defaultModel: 'gpt-4o-mini',
    helpText: 'Get an API key from <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener">OpenAI Platform</a>.'
  },
  groq: {
    name: 'Groq Cloud',
    models: [
      { id: 'llama-3.3-70b-versatile', name: 'Llama 3.3 70B Versatile (Free & Ultra-Fast)' },
      { id: 'llama-3.1-8b-instant', name: 'Llama 3.1 8B Instant (Ultra-Low Latency)' },
      { id: 'mixtral-8x7b-32768', name: 'Mixtral 8x7B (High Context)' },
      { id: 'custom', name: 'Custom Model ID...' }
    ],
    defaultModel: 'llama-3.3-70b-versatile',
    helpText: 'Get a free, ultra-fast key from <a href="https://console.groq.com/keys" target="_blank" rel="noopener">Groq Console</a>.'
  },
  openrouter: {
    name: 'OpenRouter',
    models: [
      { id: 'deepseek/deepseek-chat', name: 'DeepSeek V3 (Top Performance & Low Cost)' },
      { id: 'meta-llama/llama-3.3-70b-instruct:free', name: 'Llama 3.3 70B Instruct (Free Tier)' },
      { id: 'google/gemini-2.0-flash-exp:free', name: 'Gemini 2.0 Flash Exp (Free Tier)' },
      { id: 'anthropic/claude-3.5-sonnet', name: 'Claude 3.5 Sonnet' },
      { id: 'custom', name: 'Custom Model ID...' }
    ],
    defaultModel: 'deepseek/deepseek-chat',
    helpText: 'Get an API key from <a href="https://openrouter.ai/keys" target="_blank" rel="noopener">OpenRouter</a>.'
  }
};

/**
 * Clean & sanitize user-pasted API key
 */
function sanitizeApiKey(rawKey) {
  if (!rawKey) return '';
  return rawKey
    .trim()
    .replace(/^["']|["']$/g, '')       // remove accidental outer quotes
    .replace(/^Bearer\s+/i, '');        // remove accidental 'Bearer ' prefix
}

/**
 * Build rich Indian student context for LLM prompt
 */
function buildMentorSystemPrompt() {
  const profile = AppState.userProfile;
  return `You are Aarav, an empathetic, highly knowledgeable, and realistic AI Career Advisor designed specifically for students and young professionals across India.

User Profile:
- Education Level: ${profile.educationLevel}
- Core Interests: ${profile.interests.join(', ')}
- Key Strengths: ${profile.strengths.join(', ')}
- Work Style: ${profile.workEnvironment} | ${profile.orgType}
- Target Salary: ${profile.salaryExpectation} (in ₹ LPA)
- Preferred Hub: ${profile.preferredLocation}
- Target Indian Exams: ${profile.examsUnderConsideration.join(', ')}
${profile.customNotes ? `- User Background Notes: ${profile.customNotes}` : ''}

Strict Mentorship Guidelines for India:
1. Always contextualize advice to the Indian academic, examination, and recruitment landscape.
2. Quote all compensation benchmarks in Indian ₹ LPA (Lakhs Per Annum) with realistic entry (0-2y), mid (3-5y), and senior (6+y) splits.
3. Mention specific Indian exams (JEE, NEET, CAT, XAT, UPSC CSE, GATE, CLAT, CA ICAI) and premier institutions (IITs, IIMs, NLUs, AIIMS, BITS, IISc) when relevant.
4. Address Tier-1 vs Tier-3 realities, off-campus placement tactics, and direct proof-of-work (GitHub, Portfolio, LinkedIn).
5. Be concise, encouraging, well-structured (bullet points & bold headers), and pragmatic.`;
}

/**
 * Google Gemini API Request Execution with Fallbacks
 */
async function executeGeminiRequest(userPrompt, apiKey, model, conversationHistory = []) {
  const cleanKey = sanitizeApiKey(apiKey);
  let cleanModel = (model || 'gemini-1.5-flash').trim().replace(/^models\//, '');
  if (cleanModel === 'custom') cleanModel = 'gemini-1.5-flash';

  const systemContext = buildMentorSystemPrompt();

  // Try v1beta first
  const urlV1beta = `https://generativelanguage.googleapis.com/v1beta/models/${cleanModel}:generateContent?key=${encodeURIComponent(cleanKey)}`;

  // Build contents with past conversation turns
  const contents = [];
  if (conversationHistory && conversationHistory.length > 0) {
    const recent = conversationHistory.slice(-6);
    recent.forEach(msg => {
      contents.push({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      });
    });
  }

  // Current prompt turn
  contents.push({
    role: 'user',
    parts: [{ text: `${systemContext}\n\nUser Question: ${userPrompt}` }]
  });

  let response;
  try {
    response = await fetch(urlV1beta, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents })
    });
  } catch (netErr) {
    throw new Error(`Browser Network Error: Failed to fetch from Google Gemini API. If using Brave Shields or an AdBlocker, please allow generativelanguage.googleapis.com.`);
  }

  // If 404 on v1beta, attempt fallback to v1 endpoint
  if (response.status === 404) {
    const urlV1 = `https://generativelanguage.googleapis.com/v1/models/${cleanModel}:generateContent?key=${encodeURIComponent(cleanKey)}`;
    try {
      response = await fetch(urlV1, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents })
      });
    } catch (_) {
      // Proceed to status check below
    }
  }

  if (!response.ok) {
    let errorDetails = '';
    try {
      const errJson = await response.json();
      errorDetails = errJson.error?.message || JSON.stringify(errJson);
    } catch (_) {
      errorDetails = await response.text();
    }
    throw new Error(`Google Gemini Error (HTTP ${response.status}): ${errorDetails}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    if (data.promptFeedback?.blockReason) {
      throw new Error(`Gemini flagged this query under content safety policy: ${data.promptFeedback.blockReason}`);
    }
    throw new Error('Empty response received from Google Gemini.');
  }

  return text;
}

/**
 * OpenAI API Request Execution
 */
async function executeOpenAiRequest(userPrompt, apiKey, model, conversationHistory = []) {
  const cleanKey = sanitizeApiKey(apiKey);
  let cleanModel = (model || 'gpt-4o-mini').trim();
  if (cleanModel === 'custom') cleanModel = 'gpt-4o-mini';

  const systemContext = buildMentorSystemPrompt();
  const messages = [{ role: 'system', content: systemContext }];

  if (conversationHistory && conversationHistory.length > 0) {
    conversationHistory.slice(-6).forEach(msg => {
      messages.push({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      });
    });
  }

  messages.push({ role: 'user', content: userPrompt });

  let response;
  try {
    response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cleanKey}`
      },
      body: JSON.stringify({
        model: cleanModel,
        messages: messages,
        temperature: 0.7
      })
    });
  } catch (netErr) {
    throw new Error(`Network Error: Unable to reach OpenAI API (api.openai.com). Check your internet connection or ad-blocker.`);
  }

  if (!response.ok) {
    let errorDetails = '';
    try {
      const errJson = await response.json();
      errorDetails = errJson.error?.message || JSON.stringify(errJson);
    } catch (_) {
      errorDetails = await response.text();
    }
    throw new Error(`OpenAI Error (HTTP ${response.status}): ${errorDetails}`);
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content;
  if (!text) throw new Error('Empty response received from OpenAI.');
  return text;
}

/**
 * Groq Cloud API Request Execution
 */
async function executeGroqRequest(userPrompt, apiKey, model, conversationHistory = []) {
  const cleanKey = sanitizeApiKey(apiKey);
  let cleanModel = (model || 'llama-3.3-70b-versatile').trim();
  if (cleanModel === 'custom') cleanModel = 'llama-3.3-70b-versatile';

  const systemContext = buildMentorSystemPrompt();
  const messages = [{ role: 'system', content: systemContext }];

  if (conversationHistory && conversationHistory.length > 0) {
    conversationHistory.slice(-6).forEach(msg => {
      messages.push({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      });
    });
  }

  messages.push({ role: 'user', content: userPrompt });

  let response;
  try {
    response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cleanKey}`
      },
      body: JSON.stringify({
        model: cleanModel,
        messages: messages,
        temperature: 0.6
      })
    });
  } catch (netErr) {
    throw new Error(`Network Error: Unable to reach Groq Cloud API (api.groq.com).`);
  }

  if (!response.ok) {
    let errorDetails = '';
    try {
      const errJson = await response.json();
      errorDetails = errJson.error?.message || JSON.stringify(errJson);
    } catch (_) {
      errorDetails = await response.text();
    }
    throw new Error(`Groq Error (HTTP ${response.status}): ${errorDetails}`);
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content;
  if (!text) throw new Error('Empty response received from Groq Cloud.');
  return text;
}

/**
 * OpenRouter API Request Execution
 */
async function executeOpenRouterRequest(userPrompt, apiKey, model, conversationHistory = []) {
  const cleanKey = sanitizeApiKey(apiKey);
  let cleanModel = (model || 'deepseek/deepseek-chat').trim();
  if (cleanModel === 'custom') cleanModel = 'deepseek/deepseek-chat';

  const systemContext = buildMentorSystemPrompt();
  const messages = [{ role: 'system', content: systemContext }];

  if (conversationHistory && conversationHistory.length > 0) {
    conversationHistory.slice(-6).forEach(msg => {
      messages.push({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      });
    });
  }

  messages.push({ role: 'user', content: userPrompt });

  let response;
  try {
    response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cleanKey}`,
        'HTTP-Referer': window.location.href,
        'X-Title': 'CareerSetu AI'
      },
      body: JSON.stringify({
        model: cleanModel,
        messages: messages
      })
    });
  } catch (netErr) {
    throw new Error(`Network Error: Unable to reach OpenRouter API (openrouter.ai).`);
  }

  if (!response.ok) {
    let errorDetails = '';
    try {
      const errJson = await response.json();
      errorDetails = errJson.error?.message || JSON.stringify(errJson);
    } catch (_) {
      errorDetails = await response.text();
    }
    throw new Error(`OpenRouter Error (HTTP ${response.status}): ${errorDetails}`);
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content;
  if (!text) throw new Error('Empty response received from OpenRouter.');
  return text;
}

/**
 * Extract human-friendly diagnostic advice from API error
 */
function parseApiErrorMessage(err, provider) {
  const rawMsg = err.message || String(err);
  let suggestion = 'Please check your API key, model selection, or network connection.';

  if (rawMsg.includes('API key not valid') || rawMsg.includes('API_KEY_INVALID') || rawMsg.includes('HTTP 401') || rawMsg.includes('Unauthorized') || rawMsg.includes('Incorrect API key')) {
    suggestion = `The API key was rejected by ${PROVIDER_CONFIGS[provider]?.name || 'provider'}. Please verify you copied the complete key without extra spaces.`;
  } else if (rawMsg.includes('RESOURCE_EXHAUSTED') || rawMsg.includes('HTTP 429') || rawMsg.includes('quota') || rawMsg.includes('Rate limit')) {
    suggestion = `Free tier rate limit or quota exceeded on this API key. You can switch to our Built-in Knowledge Engine (always free) or try Groq Cloud.`;
  } else if (rawMsg.includes('not found') || rawMsg.includes('NOT_FOUND') || rawMsg.includes('HTTP 404')) {
    suggestion = `The selected model was not found for this API key. Try switching the model dropdown to "gemini-1.5-flash" (for Gemini) or "gpt-4o-mini" (for OpenAI).`;
  } else if (rawMsg.includes('Failed to fetch') || rawMsg.includes('Network Error') || rawMsg.includes('CORS')) {
    suggestion = `Browser network restriction detected. If using Brave Shields or an ad-blocker, please allow requests to this API endpoint or test in a standard window.`;
  }

  return { message: rawMsg, suggestion };
}

/* ==========================================================================
   11. API SETTINGS MODAL & TEST DIAGNOSTICS
   ========================================================================== */
function openApiModal() {
  const modal = document.getElementById('api-modal');
  if (modal) modal.classList.add('active');

  const providerSelect = document.getElementById('api-provider-select');
  const keyInput = document.getElementById('custom-api-key');
  const resultEl = document.getElementById('api-test-result');

  if (resultEl) {
    resultEl.style.display = 'none';
    resultEl.className = 'api-test-result';
    resultEl.innerHTML = '';
  }

  const currentProvider = AppState.apiSettings.provider || 'builtin';
  if (providerSelect) providerSelect.value = currentProvider;
  if (keyInput) keyInput.value = AppState.apiSettings.apiKey || '';

  handleApiProviderChange(AppState.apiSettings.model);
  handleApiKeyInputValidate();
}

function closeApiModal() {
  const modal = document.getElementById('api-modal');
  if (modal) modal.classList.remove('active');
}

function handleApiProviderChange(savedModel = null) {
  const provider = document.getElementById('api-provider-select').value;
  const keyGroup = document.getElementById('api-key-input-group');
  const modelGroup = document.getElementById('api-model-group');
  const helpLink = document.getElementById('api-key-help-link');
  const resultEl = document.getElementById('api-test-result');

  if (resultEl) resultEl.style.display = 'none';

  if (provider === 'builtin') {
    if (keyGroup) keyGroup.style.display = 'none';
    if (modelGroup) modelGroup.style.display = 'none';
  } else {
    if (keyGroup) keyGroup.style.display = 'block';
    if (modelGroup) modelGroup.style.display = 'block';

    const config = PROVIDER_CONFIGS[provider] || PROVIDER_CONFIGS.builtin;
    if (helpLink) helpLink.innerHTML = config.helpText || '';

    const modelToUse = savedModel || (AppState.apiSettings.provider === provider ? AppState.apiSettings.model : null) || config.defaultModel;
    renderModelOptionsForProvider(provider, modelToUse);
  }

  handleApiKeyInputValidate();
}

function renderModelOptionsForProvider(provider, selectedModel) {
  const modelSelect = document.getElementById('custom-model-select');
  const customModelInput = document.getElementById('custom-model-name');
  if (!modelSelect) return;

  const config = PROVIDER_CONFIGS[provider] || PROVIDER_CONFIGS.builtin;
  const models = config.models || [];

  modelSelect.innerHTML = models.map(m => {
    return `<option value="${m.id}">${m.name}</option>`;
  }).join('');

  const exists = models.some(m => m.id === selectedModel);
  if (exists) {
    modelSelect.value = selectedModel;
    if (customModelInput) {
      customModelInput.style.display = selectedModel === 'custom' ? 'block' : 'none';
      if (selectedModel !== 'custom') customModelInput.value = selectedModel;
    }
  } else if (selectedModel && selectedModel !== 'local-indian-advisor') {
    modelSelect.value = 'custom';
    if (customModelInput) {
      customModelInput.style.display = 'block';
      customModelInput.value = selectedModel;
    }
  } else {
    modelSelect.value = config.defaultModel;
    if (customModelInput) {
      customModelInput.style.display = 'none';
      customModelInput.value = config.defaultModel;
    }
  }
}

function handleModelSelectChange() {
  const modelSelect = document.getElementById('custom-model-select');
  const customModelInput = document.getElementById('custom-model-name');
  if (!modelSelect || !customModelInput) return;

  if (modelSelect.value === 'custom') {
    customModelInput.style.display = 'block';
    customModelInput.focus();
  } else {
    customModelInput.style.display = 'none';
    customModelInput.value = modelSelect.value;
  }
}

function handleApiKeyInputValidate() {
  const provider = document.getElementById('api-provider-select')?.value;
  const keyInput = document.getElementById('custom-api-key');
  const warningEl = document.getElementById('api-key-warning-pill');
  const formatInd = document.getElementById('key-format-indicator');
  if (!keyInput || !warningEl) return;

  const val = keyInput.value.trim();
  if (!val) {
    warningEl.style.display = 'none';
    if (formatInd) formatInd.textContent = '';
    return;
  }

  // Cross-provider accidental mismatch checks
  if (provider === 'gemini' && val.startsWith('sk-')) {
    warningEl.style.display = 'flex';
    warningEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Notice: This key starts with "sk-", which is typically an OpenAI key. For Google Gemini, keys usually start with "AIzaSy".';
  } else if (provider === 'openai' && val.startsWith('AIzaSy')) {
    warningEl.style.display = 'flex';
    warningEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Notice: This key starts with "AIzaSy", which is a Google Gemini key. For OpenAI, keys start with "sk-".';
  } else if (provider === 'groq' && !val.startsWith('gsk_')) {
    warningEl.style.display = 'flex';
    warningEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Groq keys typically start with "gsk_". Please verify.';
  } else if (provider === 'openrouter' && !val.startsWith('sk-or-')) {
    warningEl.style.display = 'flex';
    warningEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> OpenRouter keys typically start with "sk-or-".';
  } else {
    warningEl.style.display = 'none';
  }

  if (formatInd) {
    formatInd.textContent = `${val.length} chars`;
  }
}

function getActiveSelectedModel(provider) {
  const modelSelect = document.getElementById('custom-model-select');
  const customModelInput = document.getElementById('custom-model-name');
  if (!modelSelect) return PROVIDER_CONFIGS[provider]?.defaultModel || 'gemini-1.5-flash';

  if (modelSelect.value === 'custom' && customModelInput && customModelInput.value.trim()) {
    return customModelInput.value.trim();
  }
  return modelSelect.value || PROVIDER_CONFIGS[provider]?.defaultModel || 'gemini-1.5-flash';
}

/**
 * Interactive Real-Time Connection Diagnostic Test
 */
async function testCurrentApiConnection() {
  const resultEl = document.getElementById('api-test-result');
  const testBtn = document.getElementById('btn-test-connection');
  const provider = document.getElementById('api-provider-select').value;
  const keyInput = document.getElementById('custom-api-key');
  const rawKey = keyInput ? keyInput.value : '';
  const cleanKey = sanitizeApiKey(rawKey);
  const targetModel = getActiveSelectedModel(provider);

  if (!resultEl) return;
  resultEl.style.display = 'flex';

  if (provider === 'builtin') {
    resultEl.className = 'api-test-result success';
    resultEl.innerHTML = '<i class="fa-solid fa-circle-check"></i> <div><strong>Built-in Indian Career Engine Active:</strong> No API key required! Instant offline intelligence with 12+ career tracks and ₹ LPA benchmarks.</div>';
    return;
  }

  if (!cleanKey) {
    resultEl.className = 'api-test-result error';
    resultEl.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> <div><strong>Missing API Key:</strong> Please paste your ${PROVIDER_CONFIGS[provider]?.name || provider} API key before testing.</div>`;
    return;
  }

  // Loading indicator
  resultEl.className = 'api-test-result loading';
  resultEl.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <div>Connecting to <strong>${PROVIDER_CONFIGS[provider]?.name}</strong> with model <code>${targetModel}</code>...</div>`;
  if (testBtn) testBtn.disabled = true;

  const startTime = Date.now();
  try {
    let testResponse = '';
    if (provider === 'gemini') {
      testResponse = await executeGeminiRequest('Respond with "OK" only.', cleanKey, targetModel);
    } else if (provider === 'openai') {
      testResponse = await executeOpenAiRequest('Respond with "OK" only.', cleanKey, targetModel);
    } else if (provider === 'groq') {
      testResponse = await executeGroqRequest('Respond with "OK" only.', cleanKey, targetModel);
    } else if (provider === 'openrouter') {
      testResponse = await executeOpenRouterRequest('Respond with "OK" only.', cleanKey, targetModel);
    }

    const elapsed = Date.now() - startTime;
    resultEl.className = 'api-test-result success';
    resultEl.innerHTML = `
      <i class="fa-solid fa-circle-check text-emerald"></i> 
      <div>
        <strong>Connection Verified! (${elapsed}ms)</strong><br>
        Successfully communicated with <strong>${PROVIDER_CONFIGS[provider]?.name}</strong> using model <code>${targetModel}</code>. The AI Mentor is ready for live answers!
      </div>
    `;
    showToast(`Connected to ${PROVIDER_CONFIGS[provider]?.name}!`, 'success');
  } catch (err) {
    console.error('Test API error:', err);
    resultEl.className = 'api-test-result error';
    const parsed = parseApiErrorMessage(err, provider);
    resultEl.innerHTML = `
      <i class="fa-solid fa-triangle-exclamation"></i>
      <div>
        <strong>Connection Test Failed:</strong><br>
        <span style="font-family: var(--font-mono); font-size: 0.78rem;">${parsed.message}</span>
        <div style="margin-top: 0.4rem; font-size: 0.76rem; color: #FEE2E2;">${parsed.suggestion}</div>
      </div>
    `;
  } finally {
    if (testBtn) testBtn.disabled = false;
  }
}

function saveApiKeySettings() {
  const provider = document.getElementById('api-provider-select').value;
  const rawKey = document.getElementById('custom-api-key')?.value || '';
  const cleanKey = sanitizeApiKey(rawKey);
  const targetModel = getActiveSelectedModel(provider);

  if (provider !== 'builtin' && !cleanKey) {
    showToast('Please enter an API key or switch to Built-in AI', 'warning');
    return;
  }

  AppState.apiSettings = {
    provider,
    apiKey: cleanKey,
    model: targetModel
  };

  saveStateToStorage(STORAGE_KEYS.API_SETTINGS, AppState.apiSettings);
  updateApiIndicator();
  closeApiModal();
  showToast(`Connected to ${PROVIDER_CONFIGS[provider]?.name || 'AI Engine'}!`, 'success');
}

function clearApiKeySettings() {
  AppState.apiSettings = {
    provider: 'builtin',
    apiKey: '',
    model: 'gemini-1.5-flash'
  };
  saveStateToStorage(STORAGE_KEYS.API_SETTINGS, AppState.apiSettings);
  updateApiIndicator();
  openApiModal();
  showToast('API key cleared; switched to Built-in Engine', 'info');
}

function updateApiIndicator() {
  const navIndicator = document.getElementById('api-status-indicator');
  const chatLabel = document.getElementById('chat-engine-label');
  const mentorStatusText = document.getElementById('mentor-status-text');
  const mentorStatusPill = document.getElementById('mentor-status-pill');

  const { provider, apiKey, model } = AppState.apiSettings;

  if (mentorStatusPill) {
    mentorStatusPill.className = `mentor-status-pill ${provider}`;
  }

  if (provider === 'gemini' && apiKey) {
    if (navIndicator) {
      navIndicator.textContent = 'Gemini Live';
      navIndicator.style.color = '#38BDF8';
    }
    if (mentorStatusText) mentorStatusText.textContent = `Gemini (${model || '1.5 Flash'})`;
    if (chatLabel) chatLabel.textContent = `Powered by Google Gemini (${model || '1.5 Flash'}) Live API`;
  } else if (provider === 'openai' && apiKey) {
    if (navIndicator) {
      navIndicator.textContent = 'OpenAI Live';
      navIndicator.style.color = '#34D399';
    }
    if (mentorStatusText) mentorStatusText.textContent = `OpenAI (${model || 'GPT-4o Mini'})`;
    if (chatLabel) chatLabel.textContent = `Powered by OpenAI (${model || 'GPT-4o Mini'}) Live API`;
  } else if (provider === 'groq' && apiKey) {
    if (navIndicator) {
      navIndicator.textContent = 'Groq Live';
      navIndicator.style.color = '#F59E0B';
    }
    if (mentorStatusText) mentorStatusText.textContent = `Groq (${model || 'Llama 3.3'})`;
    if (chatLabel) chatLabel.textContent = `Powered by Groq Cloud (${model || 'Llama 3.3'}) Live API`;
  } else if (provider === 'openrouter' && apiKey) {
    if (navIndicator) {
      navIndicator.textContent = 'OpenRouter';
      navIndicator.style.color = '#A78BFA';
    }
    if (mentorStatusText) mentorStatusText.textContent = 'OpenRouter Live';
    if (chatLabel) chatLabel.textContent = `Powered by OpenRouter (${model || 'DeepSeek'}) Live API`;
  } else {
    if (navIndicator) {
      navIndicator.textContent = 'Built-in AI';
      navIndicator.style.color = '#10B981';
    }
    if (mentorStatusText) mentorStatusText.textContent = 'Built-in Engine';
    if (chatLabel) chatLabel.textContent = 'Powered by Indian Career Knowledge Engine';
  }
}

function toggleApiKeyVisibility() {
  const input = document.getElementById('custom-api-key');
  const icon = document.getElementById('api-eye-icon');
  if (!input || !icon) return;

  if (input.type === 'password') {
    input.type = 'text';
    icon.className = 'fa-solid fa-eye-slash';
  } else {
    input.type = 'password';
    icon.className = 'fa-solid fa-eye';
  }
}

/* ==========================================================================
   12. NAVIGATION & UTILITIES
   ========================================================================== */
function navigateToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.remove('hidden');
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleNavClick(e, sectionId) {
  if (e && e.preventDefault) e.preventDefault();
  navigateToSection(sectionId);
}

// Mobile drawer controls
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileDrawer = document.getElementById('mobile-drawer');
const mobileBackdrop = document.getElementById('mobile-backdrop');

if (mobileBtn && mobileDrawer && mobileBackdrop) {
  mobileBtn.addEventListener('click', () => {
    mobileDrawer.classList.add('open');
    mobileBackdrop.classList.add('active');
  });
}

function closeMobileDrawer() {
  if (mobileDrawer) mobileDrawer.classList.remove('open');
  if (mobileBackdrop) mobileBackdrop.classList.remove('active');
}

/**
 * Toast Dispatcher
 */
function showToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const iconMap = {
    success: 'fa-circle-check text-emerald',
    error: 'fa-circle-exclamation text-rose',
    warning: 'fa-triangle-exclamation text-amber',
    info: 'fa-circle-info text-indigo'
  };

  toast.innerHTML = `
    <i class="fa-solid ${iconMap[type] || iconMap.info}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

