class PersonES6 {
    constructor(name) {
        this.name = name;
    }
    printName() {
        return `Name: ${this.name}`;
    }
}

class StudentES6 extends PersonES6 {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }
    printDetails() {
        return `${this.printName()}\nBranch: ${this.branch}`;
    }
}

function PersonPrototype(name) {
    this.name = name;
}

PersonPrototype.prototype.printName = function() {
    return `Name: ${this.name}`;
};

function StudentPrototype(name, branch) {
    PersonPrototype.call(this, name);
    this.branch = branch;
}

StudentPrototype.prototype = Object.create(PersonPrototype.prototype);
StudentPrototype.prototype.constructor = StudentPrototype;

StudentPrototype.prototype.printDetails = function() {
    return `${this.printName()}\nBranch: ${this.branch}`;
};

function demonstrateES6Classes() {
    const output = document.getElementById('output');
    const es6Student = new StudentES6('Diana', 'Electronics');
    const protoStudent = new StudentPrototype('Eve', 'Mechanical');
    const result = `ES6 Classes vs Prototypes:\n\nES6 Class Result:\n${es6Student.printDetails()}\n\nPrototype Result:\n${protoStudent.printDetails()}\n\nBoth Approaches:\n✓ ES6 classes are syntactic sugar\n✓ Prototypes are the underlying mechanism\n✓ Both support inheritance via extends/prototype chain\n✓ Both support method definition\n✓ Both produce the same result\n\nES6 Syntax is Cleaner:\n✓ uses 'extends' instead of Object.create()\n✓ uses 'super()' instead of Constructor.call()\n✓ More familiar to OOP developers\n✓ Same functionality under the hood`;
    output.textContent = result;
}
