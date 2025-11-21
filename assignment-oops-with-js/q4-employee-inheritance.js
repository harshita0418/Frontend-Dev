class Employee {
    constructor(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    work() {
        return this.name + ' works in ' + this.dept;
    }
}

class Manager extends Employee {
    constructor(name, dept, team) {
        super(name, dept);
        this.team = team;
    }
    work() {
        return this.name + ' manages ' + this.team + ' team in ' + this.dept;
    }
}

function showEmployees() {
    const output = document.getElementById('output');
    const emp = new Employee('Alice', 'IT');
    const mgr = new Manager('Bob', 'IT', 'Backend');
    
    output.textContent = 'Employee: ' + emp.work() + '\nManager: ' + mgr.work() + '\n\nPolymorphism Demonstrated';
}
