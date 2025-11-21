"use strict";

function addOutput(message, type) {
    const output = document.getElementById('output');
    const line = document.createElement('div');
    line.className = `output-line ${type}`;
    line.textContent = message;
    output.appendChild(line);
}

function runCode() {
    const output = document.getElementById('output');
    output.innerHTML = '';
    
    console.log("Script start");
    addOutput("Script start", "sync");
    
    setTimeout(() => {
        console.log("Timeout callback");
        addOutput("Timeout callback", "macro");
    }, 0);
    
    Promise.resolve().then(() => {
        console.log("Promise callback");
        addOutput("Promise callback", "micro");
    });
    
    console.log("Script end");
    addOutput("Script end", "sync");
}

document.getElementById('runCode').addEventListener('click', runCode);
