class MovieTicket {
    constructor(movie, seat, price) {
        this.movie = movie;
        this.seat = seat;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function() {
    return 'Movie: ' + this.movie + ', Seat: ' + this.seat + ', Price: Rs.' + this.price;
};

class OnlineTicket extends MovieTicket {
    constructor(movie, seat, price, fee) {
        super(movie, seat, price);
        this.fee = fee;
    }

    getTotalAmount() {
        return this.price + this.fee;
    }
}

function bookTickets() {
    const output = document.getElementById('output');
    const ticket = new OnlineTicket('Avatar', 'A5', 400, 50);
    
    output.textContent = ticket.printTicket() + '\nFee: Rs.' + ticket.fee + '\nTotal: Rs.' + ticket.getTotalAmount();
}
