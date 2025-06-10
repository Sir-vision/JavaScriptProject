# 🏠 Housing Location App

A simple front-end project for browsing and viewing affordable housing locations. Built using HTML, CSS, and plain JavaScript, this project dynamically loads housing data from a local JSON file (`db.json`) and allows users to view listings and see detailed pages.

---

## 📁 Project Structure

project-root/
├── index.html # Entry point (optional landing page)
├── db.json # Housing data source
├── script.js # JavaScript logic for homepage
├── assets/ # Images for housing listings
├── style.css # Global styles (optional)
└── pages/
└── home/
├── home.html # Listing page (shows housing cards)
├── home.css # Styles for listing page
├── detail.html # Detail view for each listing
├── detail.css # Styles for detail view
└── detail.js # Logic to render a single listing


---

## 🚀 Features

- ✅ Loads housing data from `db.json`
- ✅ Displays a grid of housing locations
- ✅ Allows basic filtering by city name
- ✅ Click **"Learn More"** to view listing details
- ✅ Detail page includes name, location, available units, amenities (Wi-Fi, laundry)

---

## 🔧 How to Run Locally

> ❗ Browsers block `fetch()` from the filesystem, so you must use a local server.

### Option 1: VS Code + Live Server

1. Open the project in Visual Studio Code.
2. Install the **Live Server** extension.
3. Right-click on `pages/home/home.html` → `Open with Live Server`.

### Option 2: Use Node's http-server

Make sure you have Node.js installed, then:

```bash
npx http-server .

