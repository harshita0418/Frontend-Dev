class FitnessAnalytics {
    constructor(data) {
        if (!data || data.length === 0) {
            throw new Error('Empty dataset');
        }
        this.data = data;
    }

    getActiveUsers() {
        return this.data.filter(u => u.steps > 7000);
    }

    getAverageCalories() {
        const sum = this.data.reduce((t, u) => t + u.calories, 0);
        return sum / this.data.length;
    }

    getUserSummary() {
        return this.data.map(u => u.user + ': ' + u.steps + ' steps, ' + u.calories + ' cal');
    }
}

function analyzeWorkouts() {
    const output = document.getElementById('output');
    const data = [
        { user: 'A', steps: 8000, calories: 300 },
        { user: 'B', steps: 12000, calories: 500 },
        { user: 'C', steps: 4000, calories: 200 }
    ];

    try {
        const analytics = new FitnessAnalytics(data);
        const active = analytics.getActiveUsers();
        const avgCal = analytics.getAverageCalories();
        const summary = analytics.getUserSummary();

        let result = 'Active Users:\n';
        active.forEach(u => result += '  ' + u.user + '\n');
        result += '\nAverage Calories: ' + avgCal.toFixed(2);
        result += '\n\nSummary:\n';
        summary.forEach(s => result += '  ' + s + '\n');

        output.textContent = result;
    } catch (e) {
        output.textContent = 'Error: ' + e.message;
    }
}
