# 🌐 Responsive Landing Page
A modern responsive bakery-themed landing page built with HTML, CSS, JavaScript, and Tailwind CSS. This project demonstrates an interactive fixed navigation menu that remains visible while scrolling, changes its appearance based on scroll position, and provides smooth hover effects for an engaging user experience. The layout is fully responsive, ensuring a seamless experience across desktop, tablet, and mobile devices.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://shreyakantha.github.io/SCT_WD_1/)

---
## 📑 Table of Contents

- [Goal](#goal)
- [Features](#features)
- [Key Concepts Used](#key-concepts-used)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Run Locally](#run-locally)
- [Deployment](#deployment)
- [How It Works](#how-it-works)
- [Optimizations](#optimizations)
- [Roadmap](#roadmap)
- [Lessons Learned](#lessons-learned)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [FAQ](#faq)
- [Acknowledgements](#acknowledgements)
- [License](#license)
- [Support](#support)
- [Feedback](#feedback)
- [Appendix](#appendix)

---
## 🎯 Goal

To build a responsive and interactive landing page that demonstrates a fixed navigation menu with **scroll-based styling** and **hover effects**, while strengthening front-end development skills through `HTML`, `CSS`, `JavaScript`, `Tailwind CSS`, `responsive design`, and `DOM manipulation`.

---
## ⭐ Features

- Fixed navigation bar that remains visible while scrolling.
- Navigation bar dynamically changes its appearance on scroll.
- Smooth hover effects for navigation links and interactive elements.
- Active navigation indicator highlighting the current section.
- Fully responsive layout optimized for desktop, tablet, and mobile devices.
- Modern bakery-themed user interface with clean and visually appealing sections.
- Interactive product cards with smooth hover animations.
- Smooth scrolling navigation between page sections.
- Dynamic logo switching based on scroll position.
- Clean, modern, and user-friendly interface.

---
## 🧠 Key Concepts Used

- `Responsive Web Design`
- `Semantic HTML5`
- `Tailwind CSS` utility classes
- `DOM Manipulation`
- `Event Listeners`
- `Scroll-Based Interactions`
- `Conditional Statements` [`if`, `else`]
- `Dynamic Class Manipulation` [`classList.add()`, `classList.remove()`]
- `CSS Transitions` and `Hover Effects`
- `Smooth Scrolling`
- `Fixed Positioning` and `Z-Index`
- `Flexbox` and `CSS Grid`
- Separation of Concerns [`HTML`, `CSS`, `JavaScript`]

---
## 🛠 Tech Stack

- `HTML5`
- `CSS3`
- `JavaScript (ES6)`
- `Tailwind CSS`
- `Google Fonts`
- `Material Symbols`

---

## ⚙️ Requirements
- A modern web browser (e.g., Chrome, Edge, Firefox, or Safari)
- A code editor such as `Visual Studio Code` (recommended)
- Internet connection (to load `Tailwind CSS`, `Google Fonts`, and `Material Symbols` via CDN)

---
## 📂 Project Structure
```text
SCT_WD_1/
│
├── index.html
├── style.css
├── script.js
├── logo.png
├── logo-pink.png
├── README.md
└── LICENSE
```
---
## 📥 Installation 

 Clone the repository using Git :    
 ```bash    
git clone https://github.com/shreyakantha/SCT_WD_1    
cd SCT_WD_1   
```  
*Open the project in your preferred code editor.*

*(recommended: `Visual Studio Code`).*

---
## 🖥 Run Locally

Choose either of the following methods :

**Option 1 :** Open the `index.html` file directly in your web browser.

**Option 2 (Recommended) :** Use the **Live Server** extension in `Visual Studio Code`.

- Open the project folder in `Visual Studio Code`.
- Install the **Live Server** extension (if not already installed).
- Right-click on `index.html`.
- Select **Open with Live Server**.

---
## 🚀 Deployment

This project is deployed and hosted for free using **GitHub Pages**.

**Live Site:** [https://shreyakantha.github.io/SCT_WD_1/](https://shreyakantha.github.io/SCT_WD_1/)

To deploy your own copy:

1. Push this repository to GitHub.
2. Go to your repository's **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*.
4. Choose the `main` branch and `/ (root)` as the folder, then click **Save**.
5. Your site will be live at `https://<username>.github.io/<repo-name>/` within a few minutes.

---
## ⚙️ How It Works

- The landing page loads with a transparent, fixed navigation bar that remains visible while scrolling.
- As the user scrolls, JavaScript detects the scroll position and dynamically updates the navigation bar's appearance.
- The active navigation link is highlighted based on the section currently in view.
- Smooth scrolling allows users to navigate seamlessly between different sections of the page.
- Hover effects and CSS transitions provide interactive feedback for navigation links, buttons, and cards.
- The layout automatically adapts to different screen sizes, ensuring a consistent experience across desktop, tablet, and mobile devices.

---
## ⚡ Optimizations

- Implemented a fixed navigation bar for improved accessibility.
- Optimized scroll event handling for smooth navigation updates.
- Used CSS transitions to create fluid animations and hover effects.
- Designed a fully responsive layout for multiple screen sizes.
- Organized the project into separate `HTML`, `CSS`, and `JavaScript` files for better maintainability.
- Leveraged Tailwind CSS utility classes to write cleaner and more efficient styles.
- Minimized unnecessary code to improve readability and performance.

---
## 🧭 Roadmap

Future enhancements planned for this project:

- **Functional Shopping Cart** - Add items to a cart with quantity controls and a working checkout flow.
- **Product Filtering & Sorting** - Make the filter/sort buttons in "Our Best Sellers" actually functional.
- **Live Countdown Timer** - Replace the static timer in "Daily Baker's Dozen" with a real-time countdown.
- **Dark Mode** - Enable dark mode using the `darkMode: "class"` configuration already set up in `script.js`.
- **Self-Hosted Assets** - Replace CDN image URLs with locally hosted images for better reliability and performance.
- **Order / Contact Form** - Add a functional order form and contact form.

---
## 📚 Lessons Learned
Through this project, I learned how to :
- Build responsive layouts that adapt seamlessly to different screen sizes.
- Create an interactive fixed navigation menu using JavaScript.
- Implement scroll-based styling and dynamic UI updates.
- Enhance user experience with smooth animations and hover effects.
- Organize front-end code by separating `HTML`, `CSS`, and `JavaScript`.
- Write cleaner, more maintainable, and reusable code using `Tailwind CSS`.
- Improve the overall usability and visual consistency of a landing page.

---
## 📄 Documentation

The project is organized into separate files to maintain a clean, readable, and easy-to-maintain codebase. Each file has a specific responsibility:

- `index.html` defines the structure and content of the landing page.
- `style.css` manages the styling, responsive layout, animations, and visual appearance.
- `script.js` handles the interactive functionality, including scroll-based navigation, active link highlighting, dynamic logo switching, and button interactions.
- `logo.png` is displayed when the navigation bar changes after scrolling.
- `logo-pink.png` is displayed by default before the page is scrolled.

The code follows a clear structure with meaningful class names, organized sections, and modular JavaScript to improve readability and simplify future enhancements.

---
## 🤝 Contributing

Contributions are always welcome! If you have a suggestion that would make this project better, please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add some amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a **Pull Request**.

---
## 🧩 FAQ

**Why does the page need an internet connection?**
The project loads `Tailwind CSS`, `Google Fonts`, and `Material Symbols` from CDNs, so an internet connection is required for the full styling and icons to load.

**How do I change the theme colors?**
The color palette is defined in the `tailwind.config` block inside `script.js`. Update the color values there (e.g., `primary`, `secondary`, `tertiary`) and the entire page will update automatically.

**How does the navigation bar change on scroll?**
`script.js` listens for the scroll event. When `window.scrollY` exceeds `50`, it adds the `.scrolled` class to the navigation bar, which applies a pink background, blur effect, and white text.

**How do I add a new product card?**
Copy any existing product card in the "Our Best Sellers" section of `index.html`, update the image, name, description, and price, and it will automatically inherit the same styling and hover effects.

---
## 🙌 Acknowledgements
- **SkillCraft Technology** for providing the internship opportunity and project task.
- **Tailwind CSS** for the utility-first CSS framework used in the project.
- **Google Fonts** for the `DM Sans` and `Outfit` typefaces.
- **Google Material Symbols** for the icon library.
- **MDN Web Docs** for HTML, CSS, and JavaScript references.
- Online web development resources and tutorials for additional learning and inspiration.

---
## 📜 License
This project is licensed under the `MIT License`. Feel free to use, modify, and distribute this project in accordance with the terms of the license.

For more details, see the [LICENSE](LICENSE) file.

---
## ⭐ Support

If you find this project helpful or interesting, consider giving it a ⭐ on GitHub.

It helps improve visibility, supports open- source learning, and motivates further improvements.

---
## 💬 Feedback
If you have any feedback or suggestions, feel free to reach out at 📧 shreyakantha348@gmail.com

---
## 🧩 Appendix
This project was completed as **Task 1: Responsive Landing Page** under the **SkillCraft Technology Web Development Internship**. The task focused on building a responsive landing page with an interactive navigation menu using `HTML`, `CSS`, `JavaScript`, and `Tailwind CSS`, while strengthening front-end development and responsive design skills.

---