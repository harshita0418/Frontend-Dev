const userArrow = {
    name: "Alice",
    showName: () => {
        return `Arrow Function - this.name: ${this.name}`;
    }
};

const userNormal = {
    name: "Bob",
    showName: function() {
        return `Normal Function - this.name: ${this.name}`;
    }
};

function arrowFunctionDemo() {
    const output = document.getElementById('output');
    const result = `Arrow Function Issue:\n${userArrow.showName()}\n\nExplanation:\nArrow functions don't have their own 'this'\nThey inherit 'this' from parent scope (window)\nSo this.name is undefined`;
    output.textContent = result;
    console.log(result);
}

function normalFunctionDemo() {
    const output = document.getElementById('output');
    const result = `Normal Function Fix:\n${userNormal.showName()}\n\nExplanation:\nNormal functions have their own 'this'\n'this' refers to the object calling the method\nSo this.name correctly returns 'Bob'`;
    output.textContent = result;
    console.log(result);
}
