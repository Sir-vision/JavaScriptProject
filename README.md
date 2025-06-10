# 🌐 Personal Portfolio Website

A simple and responsive personal portfolio website built with **HTML**, **CSS**, and **JavaScript**. It showcases my work, provides information about me, and includes a contact form for collaboration or freelance inquiries.

## 🚀 Features

- 🧑‍💼 About Me page
- 💼 Dynamic Projects page (cards rendered with JavaScript)
- 📬 Contact form with basic validation
- 🌗 Light/Dark Theme Toggle (with local storage persistence)
- 📱 Responsive design for mobile and desktop

## 📁 Project Structure
portfolio/
├── index.html # Homepage
├── about.html # About Me
├── projects.html # Dynamic Projects
├── contact.html # Contact Form
├── styles.css # Styling and themes
├── script.js # Theme switcher and dynamic rendering
├── projects-data.js # Project data source (array of objects)
└── README.md # Project documentation


## 🛠 Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)

## 🔧 Customization

To add or update your projects:

1. Open `projects-data.js`
2. Add a new object to the array:

```js
{
  title: "My Awesome Project",
  description: "A short description of what it does.",
  link: "https://example.com/my-awesome-project"
}
