class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
    }

    getGrade() {
        const avg = this.calculateAverage();
        if (avg >= 90) return 'A';
        if (avg >= 80) return 'B';
        if (avg >= 70) return 'C';
        return 'F';
    }

    getResult() {
        return this.name + ': Avg=' + this.calculateAverage().toFixed(2) + ', Grade=' + this.getGrade();
    }
}

function processStudents() {
    const output = document.getElementById('output');
    const s1 = new Student('Alice', [85, 90, 88, 92]);
    const s2 = new Student('Bob', [75, 78, 80, 72]);
    const s3 = new Student('Charlie', [95, 92, 98, 96]);
    
    let result = s1.getResult() + '\n' + s2.getResult() + '\n' + s3.getResult();
    output.textContent = result;
}
