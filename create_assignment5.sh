#!/bin/bash

echo "Creating Assignment 5: CSS - All 10 Questions"
echo "=============================================="

# Question 1: Personal Portfolio Homepage
cat > question01.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Harshita Singh - Portfolio</title>
    <link rel="stylesheet" href="question01.css">
</head>
<body>
    <header>
        <h1>Harshita Singh</h1>
        <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <main id="home">
        <section class="bio-section">
            <img src="https://via.placeholder.com/200" alt="Profile Picture" class="profile-img">
            <div class="bio-text">
                <h2>About Me</h2>
                <p>Hello! I am Harshita Singh, a third-year B.Tech Computer Science Engineering student at GLA University, Mathura. I am passionate about web development, programming, and building innovative solutions. I enjoy learning new technologies and working on projects that make a real impact.</p>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Harshita Singh. All rights reserved.</p>
    </footer>
</body>
</html>
EOF

cat > question01.css << 'EOF'
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #2c3e50;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
}

header h1 {
    font-size: 1.5rem;
}

nav a {
    color: white;
    text-decoration: none;
    margin-left: 2em;
    font-size: 1rem;
}

nav a:hover {
    color: #3498db;
}

main {
    margin-top: 80px;
    flex: 1;
    padding: 2rem 5%;
}

.bio-section {
    display: flex;
    align-items: center;
    gap: 2rem;
    min-height: 70vh;
    background-color: #ecf0f1;
    padding: 3rem;
    border-radius: 10px;
}

.profile-img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
}

.bio-text h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #2c3e50;
}

.bio-text p {
    font-size: 1.1em;
    line-height: 1.6;
    color: #34495e;
}

footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 1.5rem;
    margin-top: auto;
}
EOF
echo "✓ Question 1 created"

# Continue with remaining questions...
echo ""
echo "Assignment 5 Question 1 created!"
echo "Creating remaining questions..."
