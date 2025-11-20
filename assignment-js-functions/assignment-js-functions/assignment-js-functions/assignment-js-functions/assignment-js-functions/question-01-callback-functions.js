function showEndMessage() {
    return "Welcome to the course!";
}

function greetUser(name, callback) {
    const greeting = `Hello ${name}`;
    const message = callback();
    return `${greeting}\n${message}`;
}

function executeCallbackDemo() {
    const output = document.getElementById('output');
    const result = greetUser('Alice', showEndMessage);
    output.textContent = result;
    console.log(result);
}
