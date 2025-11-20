function Person(name) {
    this.name = name;
}

Person.prototype.printName = function() {
    return `Name: ${this.name}`;
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.printDetails = function() {
    return `${this.printName()}\nBranch: ${this.branch}`;
};

function demonstrateInheritance() {
    const output = document.getElementById('output');
    const student = new Student('Charlie', 'Computer Science');
    const result = `Student Information:\n${student.printDetails()}\n\nPrototype Chain:\nStudent → Person → Object`;
    output.textContent = result;
}
