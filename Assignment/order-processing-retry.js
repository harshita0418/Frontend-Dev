"use strict";

function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() < 0.5;
            if (shouldFail) {
                reject("Order submission failed");
            } else {
                resolve("Order submitted successfully");
            }
        }, 1000);
    });
}

function addLog(message, type = 'attempt') {
    const logs = document.getElementById('logs');
    const log = document.createElement('div');
    log.className = `log ${type}`;
    log.textContent = message;
    logs.appendChild(log);
    console.log(message);
}

async function processOrder() {
    const logs = document.getElementById('logs');
    logs.innerHTML = '';
    
    const maxAttempts = 3;
    
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            addLog(`Attempt ${attempt}: Processing order...`, 'attempt');
            const result = await submitOrder();
            addLog(`Attempt ${attempt}: Success - ${result}`, 'success');
            return;
        } catch (error) {
            addLog(`Attempt ${attempt}: Failed - ${error}`, 'error');
            
            if (attempt === maxAttempts) {
                addLog('Order could not be processed after 3 attempts', 'error');
                throw new Error('Order could not be processed');
            }
            
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
}

document.getElementById('processOrder').addEventListener('click', async () => {
    try {
        await processOrder();
    } catch (error) {
        console.error('Final error:', error.message);
    }
});
