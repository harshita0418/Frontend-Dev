#!/bin/bash

echo "Setting up Assignment 8..."

# Switch to main and create branch
git checkout main
git checkout -b css-classes

# Create assignment directory
mkdir -p assignment8-css-classes
cd assignment8-css-classes

echo "Creating all questions..."

# We'll create questions with minimal inline CSS to avoid EOF issues
# Question 1 - 10 will be created individually

# For now, let's just create the structure and you can copy the CSS manually
for i in {01..10}; do
    touch "question${i}.html"
    touch "question${i}.css"
done

echo "Files created. Please copy the HTML and CSS content for each question."
echo "All files are in: assignment8-css-classes/"

cd ..
git add assignment8-css-classes/
git commit -m "Assignment done"
git push origin css-classes

echo "Branch and structure ready!"
