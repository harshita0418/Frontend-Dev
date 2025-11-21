"use strict";

function boilWater() {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 1000 + 1000;
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve("Water boiled");
            } else {
                reject("Failed to boil water");
            }
        }, delay);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 1000 + 1000;
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve("Coffee brewed");
            } else {
                reject("Failed to brew coffee");
            }
        }, delay);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 1000 + 1000;
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve("Coffee poured into cup");
            } else {
                reject("Failed to pour coffee");
            }
        }, delay);
    });
}

function addLog(message) {
    const logsDiv = document.getElementById('logs');
    const logDiv = document.createElement('div');
    logDiv.className = 'log';
    logDiv.textContent = message;
    logsDiv.appendChild(logDiv);
    console.log(message);
}

function updateStatus(message, isSuccess = false, isError = false) {
    const statusDiv = document.getElementById('coffeeStatus');
    statusDiv.innerHTML = `<p class="status ${isSuccess ? 'success' : ''} ${isError ? 'error' : ''}">${message}</p>`;
}

function makeCoffee() {
    const button = document.getElementById('makeCoffee');
    button.disabled = true;
    document.getElementById('logs').innerHTML = '';
    
    updateStatus("Starting coffee process...");
    addLog("Step 1: Boiling water...");
    
    boilWater()
        .then(result => {
            addLog(`✓ ${result}`);
            updateStatus("Brewing coffee...");
            addLog("Step 2: Brewing coffee...");
            return brewCoffee();
        })
        .then(result => {
            addLog(`✓ ${result}`);
            updateStatus("Pouring coffee...");
            addLog("Step 3: Pouring coffee...");
            return pourCoffee();
        })
        .then(result => {
            addLog(`✓ ${result}`);
            updateStatus("☕ Coffee ready for the team!", true);
            button.disabled = false;
        })
        .catch(error => {
            addLog(`✗ Error: ${error}`);
            updateStatus("Coffee making failed! Try again.", false, true);
            button.disabled = false;
        });
}

document.getElementById('makeCoffee').addEventListener('click', makeCoffee);
