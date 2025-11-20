Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

function demonstrateCustomMap() {
    const output = document.getElementById('output');
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.myMap(num => num * 2);
    const squared = numbers.myMap(num => num * num);
    const strings = numbers.myMap(num => `Number: ${num}`);
    const result = `Custom myMap() Method:\n\nOriginal: [${numbers}]\nDoubled: [${doubled}]\nSquared: [${squared}]\n\nWith Transform:\n${strings.join('\n')}\n\nHow it Works:\n✓ Iterates through array\n✓ Calls callback for each element\n✓ Returns new array with results\n✓ Behaves exactly like built-in map()`;
    output.textContent = result;
}
