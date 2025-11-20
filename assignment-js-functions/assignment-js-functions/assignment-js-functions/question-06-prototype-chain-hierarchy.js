function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return `Hello, I am ${this.name}`;
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.getInfo = function() {
    return `${this.greet()}\nDepartment: ${this.department}`;
};

function Professor(name, department, specialization) {
    Faculty.call(this, name, department);
    this.specialization = specialization;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.getFullInfo = function() {
    return `${this.getInfo()}\nSpecialization: ${this.specialization}`;
};

function demonstrateHierarchy() {
    const output = document.getElementById('output');
    
    const professor = new Professor('Dr. Smith', 'Computer Science', 'AI & Machine Learning');
    
    const result = `Professor Information:\n${professor.getFullInfo()}\n\nPrototype Chain:\nProfessor → Faculty → Person → Object\n\nMethods Accessible:\n✓ greet() from Person\n✓ getInfo() from Faculty\n✓ getFullInfo() from Professor\n\nAll methods in the chain work seamlessly!`;
    
    output.textContent = result;
    console.log(result);
}
