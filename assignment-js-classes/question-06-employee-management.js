class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        return this.salary + (this.salary * percent / 100);
    }

    getDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Department: ${this.department} | Monthly Salary: ${this.salary}`;
    }
}

const employees = [
    new Employee(1, 'Alice Johnson', 'Engineering', 5000),
    new Employee(2, 'Bob Smith', 'Marketing', 4000),
    new Employee(3, 'Carol White', 'Engineering', 5500),
    new Employee(4, 'David Brown', 'Sales', 3800),
    new Employee(5, 'Eve Davis', 'HR', 4200)
];

function displayAllEmployees() {
    const output = document.getElementById('output');
    let result = 'All Employees:\n' + '='.repeat(100) + '\n\n';
    employees.forEach(emp => {
        result += emp.getDetails() + '\n';
    });
    output.textContent = result;
}

function calculateAnnualSalaries() {
    const output = document.getElementById('output');
    let result = 'Annual Salaries:\n' + '='.repeat(100) + '\n\n';
    employees.forEach(emp => {
        result += `${emp.name}: ${emp.getAnnualSalary()}\n`;
    });
    output.textContent = result;
}

function applyBonusDemo() {
    const output = document.getElementById('output');
    let result = 'Salary with 10% Bonus:\n' + '='.repeat(100) + '\n\n';
    employees.forEach(emp => {
        const bonusSalary = emp.applyBonus(10);
        result += `${emp.name}: ${emp.salary} → ${bonusSalary.toFixed(2)}\n`;
    });
    output.textContent = result;
}

function calculateTotalPayout() {
    const output = document.getElementById('output');
    const totalAnnualPayout = employees.reduce((total, emp) => {
        return total + emp.getAnnualSalary();
    }, 0);
    
    let result = 'Total Company Annual Payout:\n' + '='.repeat(100) + '\n\n';
    result += `Total Annual Salary for All Employees: ${totalAnnualPayout}\n`;
    result += `Monthly Payout: ${(totalAnnualPayout / 12).toFixed(2)}\n`;
    output.textContent = result;
}
