        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-container-low": "#fbf2fb",
                        "error-container": "#ffe8e8",
                        "tertiary-fixed": "#c8eaff",
                        "surface-container": "#f8eef8",
                        "on-surface-variant": "#604868",
                        "on-primary-fixed": "#3d0028",
                        "on-primary-container": "#2e1a28",
                        "surface": "#fef7ff",
                        "on-tertiary": "#ffffff",
                        "on-tertiary-fixed-variant": "#005580",
                        "on-primary": "#ffffff",
                        "primary-fixed-dim": "#f0a0cc",
                        "secondary-container": "#eedcff",
                        "secondary": "#7c52aa",
                        "on-secondary": "#ffffff",
                        "surface-variant": "#f2e8f2",
                        "surface-dim": "#e0d6e0",
                        "on-error": "#ffffff",
                        "tertiary-fixed-dim": "#80d0f0",
                        "on-secondary-fixed": "#1a1030",
                        "inverse-primary": "#f0a0cc",
                        "tertiary-container": "#40c0ee",
                        "primary-container": "#f080c0",
                        "primary": "#e040a0",
                        "secondary-fixed-dim": "#c8a8e8",
                        "on-error-container": "#9b1c1c",
                        "on-secondary-container": "#2e2040",
                        "on-surface": "#2e1a28",
                        "surface-container-highest": "#ece2ec",
                        "surface-bright": "#fef7ff",
                        "tertiary": "#0096cc",
                        "inverse-on-surface": "#fef7ff",
                        "on-background": "#2e1a28",
                        "background": "#fef7ff",
                        "primary-fixed": "#ffd6ee",
                        "outline": "#907898",
                        "outline-variant": "#dcc8e0",
                        "error": "#e53e3e",
                        "on-tertiary-container": "#00334d",
                        "inverse-surface": "#2e1a28",
                        "secondary-fixed": "#eedcff",
                        "surface-container-high": "#f2e8f2",
                        "surface-tint": "#e040a0",
                        "on-tertiary-fixed": "#001a33",
                        "on-primary-fixed-variant": "#a02070",
                        "on-secondary-fixed-variant": "#4a3068",
                        "surface-container-lowest": "#ffffff",
                        "cream": "#fbf5ec",
                        "beige": "#f1e5cf",
                        "gold": "#c9a24b",
                        "cocoa": "#3e2723",
                        "mocha": "#6d4c41",
                        "latte": "#a1887f"
                    },
                    "borderRadius": {
                        "DEFAULT": "1rem",
                        "lg": "2rem",
                        "xl": "3rem",
                        "full": "9999px"
                    },
                    "fontFamily": {
                        "headline": ["DM Sans"],
                        "display": ["DM Sans"],
                        "body": ["DM Sans"],
                        "label": ["DM Sans"]
                    }
                },
            },
        }

        document.addEventListener('DOMContentLoaded', function() {
        const nav = document.getElementById('main-nav');
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');
        const navIndicator = document.getElementById('nav-indicator');
        const logo = document.getElementById('logo');

        function updateLogo() {
            if (logo) {
                logo.src = window.scrollY > 50 ? 'logo.png' : 'logo-pink.png';
            }
        }

        function moveIndicator() {
            const activeLink = document.querySelector('.nav-link.active');
            if (activeLink && navIndicator) {
                navIndicator.style.width = activeLink.offsetWidth + 'px';
                navIndicator.style.left = activeLink.offsetLeft + 'px';
            }
        }

        function updateActiveNav() {
            let currentSection = 'hero';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 120;
                if (window.scrollY >= sectionTop) {
                    currentSection = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                const linkSection = link.getAttribute('data-section');
                if (linkSection === currentSection) {
                    link.classList.add('active');
                }
            });
            moveIndicator();
        }

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            updateLogo();
            updateActiveNav();
        });

        updateLogo();
        updateActiveNav();
        window.addEventListener('resize', moveIndicator);

        // Add to Bag animation
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', function() {
                if(this.innerText.includes('add') || this.innerText.includes('shopping_bag') || this.innerText === 'Add to Bag' || this.innerText === 'Secure My Dozen') {
                    const originalText = this.innerHTML;
                    this.innerHTML = '<span class="material-symbols-outlined">check_circle</span>';
                    const originalBg = this.classList.contains('bg-primary') ? 'bg-primary' : (this.classList.contains('bg-secondary') ? 'bg-secondary' : 'bg-on-surface');
                    this.classList.add('bg-tertiary');
                    this.classList.remove('bg-primary', 'bg-secondary', 'bg-on-surface');
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.classList.remove('bg-tertiary');
                        this.classList.add(originalBg);
                    }, 2000);
                }
            });
        });
        });
