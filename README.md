# CareerSetu AI 🇮🇳 — Smart AI Career Advisor for India

> **A modern, responsive, and intelligent career guidance platform designed specifically for students and young professionals in India.**  
> Built strictly with **HTML5, CSS3, and Vanilla JavaScript (ES6+)** — zero external frameworks, zero build steps, and 100% ready to run in any browser.

---

## 🌟 Overview

Navigating career options in India is uniquely complex: students and early-career professionals must weigh stream selections (Class 10/12 PCM, PCB, Commerce, Arts), intense competitive examinations (JEE, NEET, CAT, UPSC, GATE, CLAT), Tier-1 vs. Tier-2 college realities, regional tech and corporate hubs (Bengaluru, Mumbai, Delhi-NCR, Hyderabad, Pune), and compensation benchmarks defined in **₹ LPA (Lakhs Per Annum)**.

**CareerSetu AI** solves this by providing personalized, data-backed career roadmaps, intelligent match scores, and an interactive AI Mentor (**Aarav**) tailored to the Indian educational and economic landscape.

---

## 🚀 Key Features

### 1. 🎯 Modern Landing & Onboarding Hero
- **Value Proposition**: *"Find your ideal career path with AI — Tailored for India's competitive landscape."*
- **Aesthetic**: Premium dark slate (`#070A12`, `#0F172A`) with calming indigo (`#4F46E5`), emerald (`#10B981`), and amber accents.
- **Dynamic Stats**: 30+ High-Growth Indian Pathways, 100% ₹ LPA Realistic Benchmarks, and Top Exam Mappings.
- **Trending Exploration Pills**: Instant shortcuts into AI/ML, Product Management, Investment Banking, Civil Services, UI/UX Design, and Cloud DevOps.

### 2. 📋 Interactive 5-Step Assessment Wizard
- **Step 1: Current Education Level**:
  - Class 10 (Stream Selection PCM, PCB, Commerce, Arts)
  - Class 12 - Science (PCM / PCB)
  - Class 12 - Commerce / Arts & Humanities
  - Undergraduate (Engineering, B.Com, BBA, B.Sc, BA, Law)
  - Working Professional (0–3 yrs seeking transition/upskilling)
- **Step 2: Core Interests & Passions (Multi-Select)**:
  - Technology & Coding, AI & Data Science, Finance & Capital Markets, Design & UI/UX, Healthcare & Biotech, Public Policy & Civil Services, Management & Strategy, and more.
- **Step 3: Key Strengths & Aptitudes (Multi-Select)**:
  - Analytical & Logical Thinking, Creative Problem Solving, Verbal Communication & Persuasion, High Focus & Resilience, Quantitative Aptitude, etc.
- **Step 4: Work Style & Environment**:
  - Remote/Desk-based, High-Growth Indian Startup, Stable Corporate MNC, Fieldwork & Public Administration, Hybrid.
- **Step 5: Indian Goals & Constraints**:
  - Target Entry Salary (e.g., ₹6–10 LPA, ₹12–25 LPA, ₹25+ LPA).
  - Preferred Hubs (Bengaluru, Hyderabad, Mumbai, Delhi-NCR, Pune, Remote).
  - Target Competitive Exams (JEE, NEET, CAT/XAT, UPSC CSE, GATE, CLAT, CA ICAI, GRE).
  - Custom dilemmas/goals free-text input.

### 3. 🧠 Smart Matching & Recommendations Engine
- Evaluates education eligibility, interest synergy, strength overlap, and workstyle compatibility.
- Simulates an AI analysis state with an animated step-by-step progress scanner.
- Displays 3–4 best-fit career cards with:
  - **Match Score** (e.g., `96% Match`)
  - **Expected Indian Salary Ladder** (Entry to Senior in ₹ LPA)
  - **Growth Outlook & Hub Hotspots**
  - **Required Core Skills**
  - **"Explore Roadmap"** & **"Save Path"** actions.
- Interactive sorting by **Best Match**, **Highest Salary (₹ LPA)**, or **Market Demand**.

### 4. 🗺️ Detailed Career Roadmap Modal
Clicking any career card reveals a comprehensive drawer/modal featuring:
- **3-Tier Salary Breakdown**: Entry-Level (0-2 yrs), Mid-Level (3-6 yrs), and Senior/Principal (7+ yrs) in ₹ LPA.
- **4-Stage Learning Timeline**: Clear step-by-step roadmap from foundations to advanced industry readiness with recommended certifications (NPTEL, AWS, Coursera, CFA Institute, ICAI).
- **Target Indian Entrance Exams & Top Institutes**: IITs, NITs, IIMs, AIIMS, NLUs, IISc, BITS, and premier universities.
- **Pros & Cons Breakdown**: Realistic assessment of work-life balance, entry barriers, travel, and financial upside.
- **5-Year India Market Outlook**: Industry trends, GCC expansion, and automation resilience.

### 5. 🤖 Interactive AI Mentor Chat ("Aarav")
- Dedicated slide-out drawer accessible from the navigation bar or floating action pill.
- **Pre-Engineered Contextual Indian Responses**:
  - *"How do I transition from B.Com to Data Analytics?"*
  - *"CA vs CFA: Which is better in India?"*
  - *"Should I take a drop year for UPSC or keep a corporate backup?"*
  - *"How to break into Product Management without an MBA?"*
- **Live LLM Integration Ready**:
  - Plug in your own **Google Gemini API Key** or **OpenAI API Key** via the built-in Settings dialog.
  - Keys are kept strictly client-side in the user's browser `localStorage`.
  - Seamless fallback to the built-in offline intelligence engine if no key is entered.

### 6. 📌 Saved Paths & Personal Action Plan Checklist
- Save and bookmark career tracks into browser `localStorage`.
- Auto-generates an actionable 5-step milestone checklist based on saved careers.
- Check off completed milestones with real-time completion percentage meters.
- Ability to add custom personalized tasks (e.g., *"Finish NPTEL Data Structures Course by December"*).

---

## 📂 Project Architecture

```
CareerSetu-AI/
├── index.html       # Complete semantic HTML5 structure (Hero, Wizard, Cards, Modal, Drawer)
├── styles.css       # Complete modern SaaS styling (Glassmorphism, CSS tokens, Responsive design)
├── app.js           # Full application logic (Career Catalog, Matching Algorithm, Chat, Storage)
└── README.md        # Documentation, setup guide, and architectural breakdown
```

### Key Technical Highlights
- **Zero Dependencies**: Pure HTML5, CSS3, and JavaScript (ES6+). No npm build steps, no webpack, no React/Vue/Angular needed.
- **Client-Side Security**: API keys are stored solely in `window.localStorage` and invoked directly from the browser; never sent to any third-party intermediate server.
- **Fully Responsive**: Custom media query breakpoints at `1024px`, `768px`, and `480px` for mobile phones, tablets, and high-resolution monitors.
- **Glassmorphic SaaS Design**: Smooth CSS transitions, CSS custom properties, backdrop filters, custom scrollbars, and accessible keyboard focus states.

---

## 💻 How to Run Locally

### Option 1: Direct File Open (Easiest)
1. Navigate to the project folder:
   ```
   c:\Users\Himanshu\OneDrive\Desktop\project\
   ```
2. Double-click on `index.html` to open it in **Google Chrome**, **Microsoft Edge**, **Brave**, or **Mozilla Firefox**.

### Option 2: Local HTTP Server (Recommended)
You can serve the project using Python's built-in web server:

```powershell
# Open terminal in the project directory
cd "c:\Users\Himanshu\OneDrive\Desktop\project"

# Start lightweight server on port 8080
python -m http.server 8080
```

Now open your browser and navigate to:
```
http://localhost:8080
```

---

## 🔑 Connecting Live AI Models & Troubleshooting

CareerSetu AI features a multi-provider live AI integration engine with built-in real-time connection diagnostics and a 100% offline fallback:

### Supported AI Providers
1. **Google Gemini (Recommended & Free Tier)**:
   - Models: `gemini-1.5-flash`, `gemini-2.0-flash`, `gemini-1.5-pro`
   - Key: Free from [Google AI Studio](https://aistudio.google.com/app/apikey) (starts with `AIzaSy...`)
2. **OpenAI**:
   - Models: `gpt-4o-mini`, `gpt-4o`, `gpt-3.5-turbo`
   - Key: From [OpenAI Platform](https://platform.openai.com/api-keys) (starts with `sk-...`)
3. **Groq Cloud (Ultra-Fast & Free Tier)**:
   - Models: `llama-3.3-70b-versatile`, `llama-3.1-8b-instant`
   - Key: Free from [Groq Console](https://console.groq.com/keys) (starts with `gsk_...`)
4. **OpenRouter (Unified Gateway)**:
   - Models: `deepseek/deepseek-chat`, `meta-llama/llama-3.3-70b-instruct:free`
   - Key: From [OpenRouter](https://openrouter.ai/keys)
5. **Built-in Curated Indian Career Engine**:
   - Always active, zero setup required, instant local offline responses.

### How to Connect & Verify Your Key
1. Click the **"API Settings"** button in the top navigation bar or the **Settings ⚙️** icon in the AI Mentor chat header.
2. Select your AI provider and preferred model from the dropdown.
3. Paste your API key. The validator will check the key prefix format and sanitize any outer quotes or accidental whitespace.
4. Click **"Test Connection"**:
   - The app runs a live ping test and reports back with latency (e.g. `✅ Connection Verified! 280ms`).
   - If an error occurs (such as an expired key or quota limit), an explicit diagnosis and fix suggestion will appear.
5. Click **"Save & Connect"**. All subsequent chat messages and recommendations will use your live LLM!

### Troubleshooting Connection Issues
- **"Failed to fetch / Browser Network Error"**:
  If using Brave browser Shields, uBlock Origin, or Privacy Badger, allow requests to `generativelanguage.googleapis.com` or `api.openai.com`.
- **"API key not valid (HTTP 400/401)"**:
  Ensure you copied the entire key string from Google AI Studio or OpenAI without truncation.
- **"Quota Exceeded (HTTP 429)"**:
  Free-tier keys may hit temporary rate limits during peak hours. You can switch to **Groq Cloud** (generous free rate limit) or the **Built-in Engine** with a single click.

---

## 🇮🇳 Comprehensive Indian Career Database Included

The application includes rich profiles for 12+ high-demand career pathways:
1. **AI & Machine Learning Engineer** (₹8 – ₹75+ LPA)
2. **Product Manager (B2B / B2C Tech)** (₹12 – ₹80+ LPA)
3. **Data Analyst & Business Intelligence Specialist** (₹5 – ₹30+ LPA)
4. **Chartered Accountant (CA)** (₹8 – ₹60+ LPA)
5. **Investment Banking & Equity Research Analyst** (₹14 – ₹90+ LPA)
6. **UI/UX & Digital Product Designer** (₹5 – ₹45+ LPA)
7. **Cloud Solutions Architect & DevOps Engineer** (₹7 – ₹65+ LPA)
8. **Civil Services Officer (IAS / IPS / IFS)** (Pay Level 10–17 + Governance Perks)
9. **Management Consultant** (₹12 – ₹70+ LPA)
10. **Corporate & Tech Lawyer** (₹8 – ₹75+ LPA)
11. **Cybersecurity Analyst & Ethical Hacker** (₹6 – ₹45+ LPA)
12. **Digital Growth & Performance Marketer** (₹4.5 – ₹35+ LPA)

---

## 📄 License & Credits
- **Designed & Developed for**: Indian Students, Undergraduates, and Early-Career Professionals.
- **Tech Stack**: HTML5, CSS3, Vanilla JavaScript.
- **Fonts**: Google Fonts (*Plus Jakarta Sans*, *Inter*, *JetBrains Mono*).
- **Icons**: FontAwesome 6 Free CDN.

#   C a r e e r - S e t u  
 