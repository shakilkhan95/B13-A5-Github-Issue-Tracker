# GitHub Issues Tracker

<div align="center">

![GitHub Issues Tracker Banner](./assets/github-logo.png)

### A clean, responsive issue tracking dashboard built with vanilla JavaScript, Tailwind CSS, and DaisyUI.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Reference](#-api-reference)
- [Usage](#-usage)
- [License](#-license)

---

## 🔍 Overview

**GitHub Issues Tracker** is a responsive web application that lets users browse, filter, and search through project issues fetched from a live REST API. Built with zero frontend frameworks — just clean HTML, Tailwind CSS, DaisyUI, and vanilla JavaScript — it demonstrates how a polished, production-ready UI can be achieved without the overhead of a JavaScript framework.

The app features a secure login gate, real-time issue filtering by status, keyword search, and a modal-based detail view — all wired up to a live backend API.

---

## 🚀 Live Demo

> **Default Credentials**
> - Username: `admin`
> - Password: `admin123`

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Authentication** | Login page with credential validation before accessing the dashboard |
| 📊 **Issue Dashboard** | Grid layout showing all issues fetched from a live REST API |
| 🔖 **Status Filtering** | Filter issues by `All`, `Open`, or `Closed` with active tab highlighting |
| 🔎 **Keyword Search** | Search issues by title or description via a dedicated search endpoint |
| 🏷️ **Label Badges** | Color-coded labels: `Bug`, `Enhancement`, `Documentation`, `Help Wanted`, `Good First Issue` |
| ⚡ **Priority Indicators** | Visual priority chips: `High`, `Medium`, `Low` |
| 🪟 **Issue Detail Modal** | Click any card to open a full detail view in a DaisyUI modal |
| 🔢 **Issue Counter** | Live counter updates as filters are applied |
| ⏳ **Loading Spinner** | Smooth loading state shown during API calls |
| 📱 **Fully Responsive** | Mobile-first layout, adapts across all screen sizes |

---

## 🖼️ Screenshots

### Login Page
> Clean, centered login form with demo credentials displayed for ease of access.

### Issues Dashboard
> Three-column responsive grid with status tabs, a search bar, and color-coded issue cards.

### Issue Detail Modal
> Full-detail overlay with labels, priority, assignee, author, and timestamps.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure |
| **CSS3** | Custom label, priority, and status color classes |
| **Vanilla JavaScript (ES6+)** | All DOM manipulation, event handling, and API calls |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Utility-first styling via browser CDN |
| **[DaisyUI v5](https://daisyui.com/)** | Pre-built UI components (buttons, inputs, modals, spinners) |
| **[Font Awesome 7](https://fontawesome.com/)** | Icon library |
| **[Geist Font](https://fonts.google.com/specimen/Geist)** | Clean, developer-friendly typeface |

---

## 📁 Project Structure

```
github-issues-tracker/
│
├── assets/                  # Images and icons
│   ├── github-logo.png
│   ├── Aperture.png
│   ├── open-Status.png
│   ├── closed-Status.png
│   ├── bug.png
│   ├── documentation.png
│   ├── enhancement.png
│   ├── good-first-issue.png
│   └── help-wanted.png
│
├── scripts/
│   ├── login.js             # Login form validation & redirect
│   └── main.js              # Core app logic (fetch, filter, search, modals)
│
├── styles/
│   └── style.css            # Custom label, priority, and status styles
│
├── index.html               # Login page
├── main.html                # Main dashboard page
├── tailwind.config.js       # Tailwind configuration
└── README.md
```

---

## 🏁 Getting Started

This project runs entirely in the browser with no build step required.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/github-issues-tracker.git
cd github-issues-tracker
```

### 2. Open in browser

Simply open `index.html` in your browser:

```bash
# macOS
open index.html

# Windows
start index.html

# Or use Live Server in VS Code
```

> ⚠️ **Note:** Due to CORS and path resolution, it's recommended to use a local development server like [VS Code Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) rather than opening files directly.

---

## 🌐 API Reference

All data is served from a live REST API:

**Base URL:** `https://phi-lab-server.vercel.app/api/v1/lab`

| Endpoint | Method | Description |
|---|---|---|
| `/issues` | `GET` | Fetch all issues |
| `/issue/:id` | `GET` | Fetch a single issue by ID |
| `/issues/search?q={query}` | `GET` | Search issues by keyword |

### Sample Issue Object

```json
{
  "id": 1,
  "title": "Fix navbar overflow on mobile",
  "description": "The navigation overflows on small screens...",
  "status": "open",
  "priority": "high",
  "labels": ["bug", "help wanted"],
  "author": "john_doe",
  "assignee": "jane_smith",
  "createdAt": "2024-01-15",
  "updatedAt": "2024-01-20"
}
```

---

## 📖 Usage

### Logging In
1. Open `index.html`
2. Enter the credentials (`admin` / `admin123`)
3. You'll be redirected to the main dashboard

### Browsing Issues
- All issues load automatically on page open
- Use the **All / Open / Closed** tabs to filter by status
- The issue counter at the top updates with each filter

### Searching
- Type a keyword in the search bar and hit **Search**
- Results are filtered from the API in real time

### Viewing Issue Details
- Click any issue card to open a detailed modal
- The modal shows title, status, labels, priority, description, author, assignee, and timestamps
- Click **Close** to dismiss

---

## 🧠 Key JavaScript Concepts Used

This project is a practical application of core JavaScript concepts:

- **`async/await` & `fetch()`** — for all API calls
- **DOM manipulation** — dynamically rendering cards and modal content
- **Event Delegation** — tab switching, search, and modal triggers
- **Template Literals** — building complex HTML strings cleanly
- **Array methods (`forEach`, `filter`, `map`)** — processing and filtering issue data
- **Scope & closures** — managing active status state across functions

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Built with ❤️ using vanilla JavaScript & Tailwind CSS

</div>




- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 
    - 1️⃣ What is the difference between var, let, and const?
    - Answer: Var is global scope variable and let and const are block scope variable
    - 
    - 2️⃣ What is the spread operator (...)?
    - Answer: spread operator is used to spread or expand elements of array, string, and object.
    - 
    - 3️⃣ What is the difference between map(), filter(), and forEach()?
    - Answer: map() loop through all elements and applied the condition then return a new array. filter() loop through elements based on condition provided and return a new array. forEach() loop through all elements and applied condition to all of them and don't return any values.
    - 
    - 4️⃣ What is an arrow function?
    - Answer: It's an ES6 feature. It's shorter and cleaner version of regular function.
    - 
    - 5️⃣ What are template literals?
    - It's used to write string with backtick (``) instead of quote (""). It's give us the power to use variables, embed expressions and lot of things in string. It's also allows us to write multiline string.
