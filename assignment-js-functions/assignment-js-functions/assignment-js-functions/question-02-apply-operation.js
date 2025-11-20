function applyOperation(numbers, operation) {
    const result = [];
    for (let num of numbers) {
        result.push(operation(num));
    }
    return result;
}

function doubleNumbers() {
    const output = document.getElementById('output');
    const numbers = [1, 2, 3, 4];
    const doubled = applyOperation(numbers, (num) => num * 2);
    const result = `Original: [${numbers}]\nDoubled: [${doubled}]`;
    output.textContent = result;
    console.log(result);
}

function squareNumbers() {
    const output = document.getElementById('output');
    const numbers = [1, 2, 3, 4];
    const squared = applyOperation(numbers, (num) => num * num);
    const result = `Original: [${numbers}]\nSquared: [${squared}]`;
    output.textContent = result;
    console.log(result);
}
