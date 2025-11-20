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
    const result = `Original: [${numbers}]\nDoubled: [${doubled}]\nSquared: [${squared}]`;
    output.textContent = result;
}
