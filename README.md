<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teeraphat Saensom | Personal Portfolio</title>
    <style>
        /* --------------------------------
        GLOBAL VARIABLES & RESET
        --------------------------------
        */
        :root {
            /* Neutral Color Palette */
            --bg-color: #f8f9fa;
            --text-color: #333333;
            --accent-color: #2c3e50; /* Dark Blue-Grey */
            --secondary-accent: #3498db; /* Muted Blue for links/buttons */
            --card-bg: #ffffff;
            --border-color: #e0e0e0;
            
            /* Typography */
            --font-main: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            --font-heading: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: var(--font-main);
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
        }

        a {
            text-decoration: none;
            color: var(--secondary-accent);
            transition: color 0.3s ease;
        }

        a:hover {
            color: var(--accent-color);
        }

        ul {
            list-style: none;
        }

        /* --------------------------------
        UTILITIES & LAYOUT
        --------------------------------
        */
        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 20px;
        }

        section {
            padding: 80px 0;
            border-bottom: 1px solid var(--border-color);
        }

        section:last-child {
            border-bottom: none;
        }

        .section-title {
            font-family: var(--font-heading);
            font-size: 2rem;
            margin-bottom: 40px;
            text-align: center;
            color: var(--accent-color);
            position: relative;
        }

        /* Decorative underline for titles */
        .section-title::after {
            content: '';
            display: block;
            width: 60px;
            height: 3px;
            background-color: var(--secondary-accent);
            margin: 10px auto 0;
        }

        /* --------------------------------
        NAVIGATION
        --------------------------------
        */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            background-color: var(--card-bg);
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            z-index: 1000;
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;
        }

        .logo {
            font-weight: bold;
            font-size: 1.2rem;
            color: var(--accent-color);
        }

        .nav-links {
            display: flex;
            gap: 20px;
        }

        .nav-links a {
            color: var(--text-color);
            font-size: 0.9rem;
            font-weight: 500;
        }

        .nav-links a:hover {
            color: var(--secondary-accent);
        }

        /* Mobile Menu Toggle (Hidden on Desktop) */
        .menu-toggle {
            display: none;
            font-size: 1.5rem;
            cursor: pointer;
        }

        /* --------------------------------
        [1] HERO SECTION
        --------------------------------
        */
        #hero {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding-top: 60px; /* Offset for fixed nav */
        }

        .hero-name {
            font-size: 3.5rem;
            font-weight: 700;
            color: var(--accent-color);
            margin-bottom: 15px;
        }

        .hero-tagline {
            font-size: 1.25rem;
            color: #555;
            margin-bottom: 30px;
            max-width: 600px;
        }

        .btn {
            display: inline-block;
            padding: 12px 30px;
            background-color: var(--accent-color);
            color: white;
            border-radius: 5px;
            font-weight: 600;
            transition: background 0.3s ease;
        }

        .btn:hover {
            background-color: var(--secondary-accent);
            color: white;
        }

        /* --------------------------------
        [2] ABOUT ME SECTION
        --------------------------------
        */
        .about-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
            font-size: 1.1rem;
            color: #444;
        }

        /* --------------------------------
        [3] SKILLS SECTION
        --------------------------------
        */
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }

        .skill-card {
            background: var(--card-bg);
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            border: 1px solid var(--border-color);
        }

        .skill-card h3 {
            font-size: 1.2rem;
            margin-bottom: 15px;
            color: var(--accent-color);
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 10px;
        }

        .skill-list li {
            margin-bottom: 8px;
            padding-left: 15px;
            position: relative;
        }

        .skill-list li::before {
            content: "•";
            color: var(--secondary-accent);
            position: absolute;
            left: 0;
            font-weight: bold;
        }

        /* --------------------------------
        [4] EXPERIENCE SECTION
        --------------------------------
        */
        .timeline {
            max-width: 800px;
            margin: 0 auto;
            border-left: 2px solid var(--border-color);
            padding-left: 20px;
        }

        .timeline-item {
            margin-bottom: 40px;
            position: relative;
        }

        .timeline-item::before {
            content: '';
            width: 12px;
            height: 12px;
            background: var(--secondary-accent);
            border-radius: 50%;
            position: absolute;
            left: -27px;
            top: 5px;
        }

        .timeline-title {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--accent-color);
        }

        .timeline-date {
            font-size: 0.85rem;
            color: #777;
            margin-bottom: 8px;
            display: block;
        }

        .timeline-desc {
            color: #555;
        }

        /* --------------------------------
        [5] PORTFOLIO SECTION
        --------------------------------
        */
        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .project-card {
            background: var(--card-bg);
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s ease;
        }

        .project-card:hover {
            transform: translateY(-5px);
        }

        .project-info {
            padding: 20px;
        }

        .project-title {
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: var(--accent-color);
        }

        .project-desc {
            font-size: 0.95rem;
            color: #666;
            margin-bottom: 15px;
        }

        .project-link {
            font-size: 0.9rem;
            font-weight: 600;
        }

        /* --------------------------------
        [6] CONTACT SECTION
        --------------------------------
        */
        .contact-container {
            text-align: center;
        }

        .contact-info {
            margin-bottom: 30px;
        }

        .contact-info p {
            margin: 10px 0;
            font-size: 1.1rem;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
        }

        .social-btn {
            padding: 10px 20px;
            border: 1px solid var(--border-color);
            border-radius: 20px;
            color: var(--text-color);
            transition: all 0.3s ease;
        }

        .social-btn:hover {
            border-color: var(--secondary-accent);
            color: var(--secondary-accent);
            background-color: rgba(52, 152, 219, 0.05);
        }

        footer {
            text-align: center;
            padding: 30px 0;
            background-color: var(--accent-color);
            color: white;
            font-size: 0.9rem;
        }

        /* --------------------------------
        RESPONSIVE DESIGN
        --------------------------------
        */
        @media (max-width: 768px) {
            .hero-name {
                font-size: 2.5rem;
            }
            
            .nav-links {
                display: none; /* In a real scenario, toggle with JS */
            }

            .container {
                padding: 0 15px;
            }

            section {
                padding: 60px 0;
            }
        }
    </style>
</head>
<body>

    <nav>
        <div class="container nav-container">
            <div class="logo">Teeraphat.S</div>
            <div class="nav-links">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </nav>

    <section id="hero">
        <div class="container">
            <h1 class="hero-name">Teeraphat Saensom</h1>
            <p class="hero-tagline">Aspiring Computer Science Student with a passion for problem-solving and modern web technologies.</p>
            <a href="#portfolio" class="btn">View Portfolio</a>
        </div>
    </section>

    <section id="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <p>
                    I am a dedicated student currently exploring the depths of Computer Science. 
                    My journey is driven by a curiosity for how systems work and a desire to build efficient software solutions.
                    Whether it is tackling algorithmic challenges or designing user interfaces, I believe in continuous learning 
                    and practical application. I am currently looking for opportunities to apply my skills in real-world projects.
                </p>
            </div>
        </div>
    </section>

    <section id="skills">
        <div class="container">
            <h2 class="section-title">Technical Skills</h2>
            <div class="skills-grid">
                <div class="skill-card">
                    <h3>Programming Languages</h3>
                    <ul class="skill-list">
                        <li>C / C++</li>
                        <li>Python</li>
                        <li>JavaScript (ES6+)</li>
                        <li>HTML5 & CSS3</li>
                    </ul>
                </div>
                <div class="skill-card">
                    <h3>Tools & Technologies</h3>
                    <ul class="skill-list">
                        <li>Git & GitHub</li>
                        <li>VS Code</li>
                        <li>Linux (Ubuntu)</li>
                        <li>Figma (Basics)</li>
                    </ul>
                </div>
                <div class="skill-card">
                    <h3>Core Concepts</h3>
                    <ul class="skill-list">
                        <li>Data Structures & Algorithms</li>
                        <li>Object-Oriented Programming</li>
                        <li>Responsive Web Design</li>
                        <li>Problem Solving</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="experience">
        <div class="container">
            <h2 class="section-title">Experience & Activities</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <h4 class="timeline-title">Competitive Programming Enthusiast</h4>
                    <span class="timeline-date">2023 - Present</span>
                    <p class="timeline-desc">Actively participating in online coding contests (Codeforces, LeetCode) to sharpen algorithmic thinking and optimization skills.</p>
                </div>
                <div class="timeline-item">
                    <h4 class="timeline-title">High School Computer Club Lead</h4>
                    <span class="timeline-date">2022 - 2023</span>
                    <p class="timeline-desc">Organized workshops for junior students on basic Python programming and web development fundamentals.</p>
                </div>
                <div class="timeline-item">
                    <h4 class="timeline-title">Personal Development</h4>
                    <span class="timeline-date">Ongoing</span>
                    <p class="timeline-desc">Self-studying full-stack development through documentation and building small-scale projects.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="portfolio">
        <div class="container">
            <h2 class="section-title">Featured Projects</h2>
            <div class="portfolio-grid">
                <div class="project-card">
                    <div class="project-info">
                        <h3 class="project-title">Algorithm Visualizer</h3>
                        <p class="project-desc">A web-based tool to visualize sorting algorithms like Bubble Sort and Merge Sort in real-time.</p>
                        <a href="#" class="project-link">View on GitHub →</a>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-info">
                        <h3 class="project-title">Personal Task Manager</h3>
                        <p class="project-desc">A minimal To-Do list application built with vanilla JavaScript and LocalStorage for data persistence.</p>
                        <a href="#" class="project-link">View Demo →</a>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-info">
                        <h3 class="project-title">Weather Dashboard</h3>
                        <p class="project-desc">Fetches real-time weather data using a public API and displays it in a responsive card layout.</p>
                        <a href="#" class="project-link">View Source →</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="container contact-container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-info">
                <p>Feel free to reach out for collaborations or just a friendly hello!</p>
                <p><strong>Email:</strong> toto2562toto@example.com</p>
            </div>
            <div class="social-links">
                <a href="https://github.com/sundopoz" class="social-btn">GitHub</a>
                <a href="https://www.linkedin.com/in/teerapat-sansom-503b84387/" class="social-btn">LinkedIn</a>
                <a href="#" class="social-btn">Twitter</a>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2025 Teeraphat Saensom. All rights reserved.</p>
        </div>
    </footer>

    <script>
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>
