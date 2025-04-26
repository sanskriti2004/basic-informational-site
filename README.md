# 🧭 Basic Node.js Routing Server

This is a simple **Node.js web server** that uses the core `http`, `fs`, and `url` modules to handle basic routing. It serves static HTML files for different routes (`/`, `/about-me`, `/contact-me`) and returns a custom 404 page for undefined paths.

## 📁 Project Structure

```
project-folder/
│
├── index.html          # Home page
├── about-me.html       # About Me page
├── contact-me.html     # Contact Me page
├── 404.html            # Custom 404 Not Found page
└── index.js           # Node.js routing server (this file)
```

## 🚀 How to Run

1. Make sure you have **Node.js** installed.
2. Clone this repo or copy the files to your local system.
3. Run the server:

```bash
node index.js
```

4. Visit the app at `http://localhost:8000/`

## 🌐 Available Routes

| Route           | Description         |
|----------------|---------------------|
| `/`            | Home page           |
| `/about-me`    | About Me page       |
| `/contact-me`  | Contact Me page     |
| (any other)    | 404 Not Found page  |

## 📦 Built With

- Node.js (Core Modules: `http`, `fs`, `url`)
- HTML (static pages)

## ✍️ Author

**Sanskriti Gogoi**

---
