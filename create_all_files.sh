# Question 10
cat > question10_dropdown_selection.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Location Selection</title>
</head>
<body>
    <h1>Select Your Favorite Travel Location</h1>
    
    <form>
        <label for="country">Country:</label>
        <select id="country" name="country">
            <option value="usa">United States</option>
            <option value="india" selected>India</option>
            <option value="uk">United Kingdom</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
        </select>
        <br><br>
        
        <label for="state">State:</label>
        <select id="state" name="state">
            <option value="maharashtra">Maharashtra</option>
            <option value="delhi">Delhi</option>
            <option value="uttar-pradesh" selected>Uttar Pradesh</option>
            <option value="rajasthan">Rajasthan</option>
            <option value="kerala">Kerala</option>
        </select>
        <br><br>
        
        <label for="city">City:</label>
        <select id="city" name="city">
            <option value="agra">Agra</option>
            <option value="lucknow">Lucknow</option>
            <option value="mathura" selected>Mathura</option>
            <option value="varanasi">Varanasi</option>
            <option value="noida">Noida</option>
        </select>
        <br><br>
        
        <label for="tourist-place">Favorite Tourist Place:</label>
        <select id="tourist-place" name="tourist-place">
            <option value="taj-mahal">Taj Mahal</option>
            <option value="krishna-janmabhoomi" selected>Krishna Janmabhoomi Temple</option>
            <option value="govardhan-hill">Govardhan Hill</option>
            <option value="vrindavan">Vrindavan</option>
            <option value="dwarkadheesh-temple">Dwarkadheesh Temple</option>
        </select>
        <br><br>
    </form>
    
    <p><strong>Your Selection Summary:</strong></p>
    <p>I have selected <strong>India</strong> as my country, <strong>Uttar Pradesh</strong> as my state, <strong>Mathura</strong> as my city, and <strong>Krishna Janmabhoomi Temple</strong> as my favorite tourist place. Mathura is a beautiful city with rich cultural heritage and is known as the birthplace of Lord Krishna.</p>
</body>
</html>
EOF
echo "✓ question10_dropdown_selection.html created"

# Question 11
cat > question11_news_layout.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daily News Portal</title>
</head>
<body>
    <header>
        <h1>Daily News Portal</h1>
        <p>Your trusted source for latest news</p>
    </header>
    
    <nav>
        <ul>
            <li><a href="#sports">Sports</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#politics">Politics</a></li>
        </ul>
    </nav>
    
    <main>
        <article id="sports">
            <h2>India Wins Cricket Series Against Australia</h2>
            <time datetime="2025-01-15">January 15, 2025</time>
            <p>The Indian cricket team has secured a remarkable victory in the test series against Australia with a stunning performance in the final match. Captain Rohit Sharma led from the front with an excellent century, while the bowling attack dismantled the Australian batting lineup. This victory marks India's third consecutive series win on Australian soil.</p>
            <p>Source: <a href="#">Sports Today</a></p>
        </article>
        
        <article id="technology">
            <h2>AI Revolution: New Language Model Breaks Records</h2>
            <time datetime="2025-01-14">January 14, 2025</time>
            <p>A groundbreaking artificial intelligence model has been unveiled by researchers, demonstrating unprecedented capabilities in natural language understanding and generation. The new model shows significant improvements in reasoning, coding, and creative tasks. Tech experts believe this advancement will transform various industries including healthcare, education, and software development.</p>
            <p>Source: <a href="#">Tech Weekly</a></p>
        </article>
        
        <article id="politics">
            <h2>Government Announces New Education Policy Reforms</h2>
            <time datetime="2025-01-13">January 13, 2025</time>
            <p>The Ministry of Education has announced comprehensive reforms aimed at improving the quality of higher education in the country. The new policy focuses on research and innovation, skill development, and international collaboration. Universities will receive increased funding for infrastructure development and faculty training programs.</p>
            <p>Source: <a href="#">National Herald</a></p>
        </article>
    </main>
    
    <aside>
        <h3>Popular Topics</h3>
        <ul>
            <li>Climate Change</li>
            <li>Space Exploration</li>
            <li>Economic Growth</li>
            <li>Digital Transformation</li>
            <li>Healthcare Innovations</li>
            <li>Education Reforms</li>
        </ul>
    </aside>
    
    <footer>
        <p>Contact: info@dailynewsportal.com</p>
        <p>&copy; 2025 Daily News Portal. All rights reserved.</p>
    </footer>
</body>
</html>
EOF
echo "✓ question11_news_layout.html created"

# Question 12
cat > question12_quotation_showcase.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inspirational Quotes</title>
</head>
<body>
    <h1>Quotation Showcase</h1>
    
    <section>
        <h2>On Education and Learning</h2>
        <blockquote>
            <p>Education is the most powerful weapon which you can use to change the world. It opens doors to opportunities and helps us understand different perspectives. Through education, we can build a better future for ourselves and society.</p>
            <cite>Nelson Mandela</cite>
        </blockquote>
    </section>
    
    <section>
        <h2>On Success and Perseverance</h2>
        <blockquote>
            <p>Success is not final, failure is not fatal. It is the courage to continue that counts. Every setback is a setup for a comeback. We must learn from our failures and keep moving forward with determination and hope.</p>
            <cite>Winston Churchill</cite>
        </blockquote>
    </section>
    
    <section>
        <h2>On Innovation and Creativity</h2>
        <blockquote>
            <p>Innovation distinguishes between a leader and a follower. The people who are crazy enough to think they can change the world are the ones who do. Think different and dare to challenge the status quo.</p>
            <cite>Steve Jobs</cite>
        </blockquote>
    </section>
    
    <p>Quotes inspire people because they contain profound wisdom distilled into a few powerful words. They motivate us during difficult times, provide new perspectives on life, and remind us of universal truths. Great quotes from influential thinkers and leaders resonate across generations because they speak to fundamental human experiences and aspirations. They serve as mental anchors that help us stay focused on our goals and values.</p>
</body>
</html>
EOF
echo "✓ question12_quotation_showcase.html created"

# Question 13
cat > question13_blog_layout.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Harshita's Blog</title>
</head>
<body>
    <header>
        <h1>Harshita's Tech Blog</h1>
        <p>Exploring the World of Technology and Learning</p>
    </header>
    
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </nav>
    
    <main>
        <article>
            <h2>My First Blog</h2>
            <time datetime="2025-01-10">January 10, 2025</time>
            <p>Welcome to my blog! I am excited to start this journey of sharing my experiences and learnings in the field of computer science. As a third-year B.Tech CSE student at GLA University, I have been exploring various technologies and programming languages. This blog will be a platform where I document my projects, challenges, and the lessons I learn along the way.</p>
            <blockquote>
                <p>The journey of a thousand miles begins with a single step. Starting this blog is my first step towards building a strong online presence and connecting with fellow tech enthusiasts.</p>
            </blockquote>
        </article>
        
        <article>
            <h2>Things I Learned This Week</h2>
            <time datetime="2025-01-12">January 12, 2025</time>
            <p>This week has been incredibly productive. I dove deep into HTML5 semantic elements and learned how to structure web pages properly. Understanding the difference between block and inline elements was enlightening. I also explored tables, forms, and various HTML attributes. Additionally, I practiced creating different layouts and learned the importance of clean, well-structured code.</p>
            <blockquote>
                <p>Every day is a learning opportunity. The more I code, the more I realize how much there is to learn. The key is to stay consistent and curious.</p>
            </blockquote>
        </article>
    </main>
    
    <footer>
        <p>Written by Harshita Singh</p>
        <p>Contact: harshitasingh1812@gmail.com</p>
    </footer>
</body>
</html>
EOF
echo "✓ question13_blog_layout.html created"

# Question 14
cat > question14_movie_database.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Database</title>
</head>
<body>
    <h1>Movie Database</h1>
    
    <table border="1">
        <caption>Top Rated Movies Collection</caption>
        <thead>
            <tr>
                <th title="Name of the movie">Movie Name</th>
                <th title="Movie genre category">Genre</th>
                <th title="Release year">Year</th>
                <th title="IMDB rating out of 10">IMDB Rating</th>
                <th title="Official movie page">Link</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>The Shawshank Redemption</td>
                <td>Drama</td>
                <td>1994</td>
                <td>9.3</td>
                <td><a href="#">View Details</a></td>
            </tr>
            <tr>
                <td>The Godfather</td>
                <td>Crime, Drama</td>
                <td>1972</td>
                <td>9.2</td>
                <td><a href="#">View Details</a></td>
            </tr>
            <tr>
                <td>The Dark Knight</td>
                <td>Action, Crime</td>
                <td>2008</td>
                <td>9.0</td>
                <td><a href="#">View Details</a></td>
            </tr>
            <tr>
                <td>3 Idiots</td>
                <td>Comedy, Drama</td>
                <td>2009</td>
                <td>8.4</td>
                <td><a href="#">View Details</a></td>
            </tr>
            <tr>
                <td>Inception</td>
                <td>Sci-Fi, Thriller</td>
                <td>2010</td>
                <td>8.8</td>
                <td><a href="#">View Details</a></td>
            </tr>
            <tr>
                <td>Interstellar</td>
                <td>Sci-Fi, Drama</td>
                <td>2014</td>
                <td>8.7</td>
                <td><a href="#">View Details</a></td>
            </tr>
            <tr>
                <td colspan="3" title="Average rating of all movies">Average IMDB Rating</td>
                <td colspan="2">8.9</td>
            </tr>
        </tbody>
    </table>
    
    <br>
    <p><small>Note: All ratings are based on IMDB database as of January 2025. Ratings may vary over time based on user reviews.</small></p>
</body>
</html>
EOF
echo "✓ question14_movie_database.html created"

# Question 15
cat > question15_portfolio_layout.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Harshita Singh - Portfolio</title>
</head>
<body>
    <header>
        <h1>Harshita Singh</h1>
        <p>B.Tech Computer Science Engineering Student | Web Developer</p>
    </header>
    
    <nav>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    
    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>Hello! I am Harshita Singh, a passionate third-year B.Tech Computer Science Engineering student at GLA University, Mathura. I have a strong interest in web development, software engineering, and problem-solving. I believe in continuous learning and staying updated with the latest technologies. My goal is to build innovative solutions that make a positive impact.</p>
            <blockquote>
                <p>The best way to predict the future is to create it. I am committed to learning, growing, and contributing to the tech community.</p>
            </blockquote>
        </section>
        
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                <li>HTML5 and Semantic Elements</li>
                <li>CSS3 and Responsive Design</li>
                <li>JavaScript and DOM Manipulation</li>
                <li>Java Programming</li>
                <li>Python Programming</li>
                <li>Data Structures and Algorithms</li>
                <li>Problem Solving and Logical Thinking</li>
                <li>Database Management Systems</li>
                <li>Git and Version Control</li>
            </ul>
        </section>
        
        <section id="projects">
            <h2>Projects</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Description</th>
                        <th>Technologies Used</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Personal Portfolio Website</td>
                        <td>A responsive portfolio showcasing my skills and projects</td>
                        <td>HTML, CSS, JavaScript</td>
                    </tr>
                    <tr>
                        <td>Student Management System</td>
                        <td>Web application for managing student records and grades</td>
                        <td>HTML, CSS, JavaScript, Java</td>
                    </tr>
                    <tr>
                        <td>E-commerce Product Catalog</td>
                        <td>Product listing page with detailed information</td>
                        <td>HTML, CSS</td>
                    </tr>
                    <tr>
                        <td>Restaurant Menu Application</td>
                        <td>Interactive menu page for a restaurant</td>
                        <td>HTML</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>
    
    <aside id="contact">
        <h3>Contact Information</h3>
        <p><strong>Email:</strong> harshitasingh1812@gmail.com</p>
        <p><strong>Phone:</strong> +91 9876543210</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/harshita-singh-62740134a">linkedin.com/in/harshita-singh-62740134a</a></p>
        <p><strong>Location:</strong> Mathura, Uttar Pradesh, India</p>
    </aside>
    
    <footer>
        <p>&copy; 2025 Harshita Singh. All rights reserved.</p>
    </footer>
</body>
</html>
EOF
echo "✓ question15_portfolio_layout.html created"

echo ""
echo "===================="
echo "All 15 files created successfully!"
echo "===================="
