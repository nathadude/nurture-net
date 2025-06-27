# nurture-net
 AI homunculus created by AI and Human

# 🧠 Human Fool Architecture Overview

## 📱 1. Client
- **Mobile/Web Client**
  - Built with **React** / **React Native**
  - User interface for:
    - Drawing input
    - Vocabulary challenges
    - Progression feedback

---

## 🌐 2. API Gateway
- Powered by **Express.js** or **FastAPI**
- Central routing layer:
  - Handles requests from client
  - Forwards to appropriate engine or service

---

## 🔧 3. Core Engines

### 🔤 Text Engine
- Powered by **GPT-J / Mistral**
- Uses a **filtered vocabulary** via a **token map**
- Supports:
  - Word generation
  - Contextual teaching
  - Word-guessing mechanics

### 🎨 Drawing Engine
- Built on **Stable Diffusion**
- Simulates **artistic skill growth**
- Evaluates:
  - User-submitted drawings
  - Style development over time

### ⏳ Progression Engine
- Controls:
  - **Cooldowns**
  - **Unlocks**
  - **Emotional simulation** via Emotion Sim API
- Manages:
  - Challenge pacing
  - Emotional feedback systems

---

## 🧩 4. Logic & Tracking

### 🧠 Gating Logic Layer
- Unlock mechanics based on:
  - XP
  - In-game currency
  - Skill tree dependencies

### 📈 Interaction Tracker
- Tracks and logs:
  - Words taught
  - Drawings submitted
  - Player progress metrics

---

## 💾 5. Data Storage

### 🗃️ Database
- **PostgreSQL**:
  - Persistent user data
  - Vocabulary metadata
  - Progression status
- **Redis**:
  - Temporary session caching
  - Real-time cooldown timers

---

## 🧙 6. Admin & Analytics

### 🛠️ Admin Panel / Telemetry
- View real-time usage and progression data
- Monitor player behavior and pain points
- Laugh maniacally while plotting monetization 💸

---

