function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    return `${this.brand} ${this.model}`;
};

function demonstratePrototype() {
    const output = document.getElementById('output');
    const car1 = new Car('Toyota', 'Camry');
    const car2 = new Car('Honda', 'Civic');
    const result = `Car 1: ${car1.getDetails()}\nCar 2: ${car2.getDetails()}\n\nMethod Sharing via Prototype:\nBoth objects share the same getDetails method\nthrough the prototype chain, saving memory.`;
    output.textContent = result;
}
