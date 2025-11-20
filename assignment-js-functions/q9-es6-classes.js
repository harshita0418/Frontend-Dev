class PersonES6 {
    constructor(name) { this.name = name; }
    printName() { return `Name: ${this.name}`; }
}

class StudentES6 extends PersonES6 {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }
    printDetails() { return `${this.printName()}\nBranch: ${this.branch}`; }
}

function demonstrateES6Classes() {
    const output = document.getElementById('output');
    const student = new StudentES6('Diana', 'Electronics');
    const result = `${student.printDetails()}\n\nES6 Classes use extends and super()`;
    output.textContent = result;
}
