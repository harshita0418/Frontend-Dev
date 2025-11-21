class Trip {
    constructor(from, to, distance) {
        this.from = from;
        this.to = to;
        this.distance = distance;
    }

    calculateFare() {
        if (!this.distance || this.distance < 0) {
            throw new Error('Invalid distance');
        }
        return this.distance * 10;
    }
}

function validTrip() {
    const output = document.getElementById('output');
    try {
        const trip = new Trip('City Center', 'Airport', 25);
        const fare = trip.calculateFare();
        output.textContent = 'From: ' + trip.from + '\nTo: ' + trip.to + '\nFare: Rs.' + fare;
    } catch (e) {
        output.textContent = 'Error: ' + e.message;
    }
}

function invalidTrip() {
    const output = document.getElementById('output');
    try {
        const trip = new Trip('City Center', 'Airport', -5);
        const fare = trip.calculateFare();
        output.textContent = 'Fare: Rs.' + fare;
    } catch (e) {
        output.textContent = 'Error Caught: ' + e.message;
    }
}
