function Person(name) { this.name = name; }
Person.prototype.greet = function() { return `Hello, I am ${this.name}`; };

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.getInfo = function() { return `${this.greet()}\nDepartment: ${this.department}`; };

function Professor(name, department, specialization) {
    Faculty.call(this, name, department);
    this.specialization = specialization;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.getFullInfo = function() { return `${this.getInfo()}\nSpecialization: ${this.specialization}`; };

function demonstrateHierarchy() {
    const output = document.getElementById('output');
    const prof = new Professor('Dr. Smith', 'CS', 'AI');
    const result = `${prof.getFullInfo()}\n\nChain: Professor → Faculty → Person → Object`;
    output.textContent = result;
}
