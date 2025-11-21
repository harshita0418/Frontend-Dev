class BankAccount {
    #balance;

    constructor(initial) {
        this.#balance = initial;
    }

    deposit(amount) {
        this.#balance += amount;
        return 'Deposited Rs.' + amount;
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            throw new Error('Insufficient balance');
        }
        this.#balance -= amount;
        return 'Withdrawn Rs.' + amount;
    }

    getBalance() {
        return this.#balance;
    }
}

function demonstrateBanking() {
    const output = document.getElementById('output');
    const acc = new BankAccount(5000);
    
    try {
        output.textContent = acc.deposit(2000) + '\n' + acc.withdraw(1000) + '\nBalance: Rs.' + acc.getBalance();
    } catch (e) {
        output.textContent = 'Error: ' + e.message;
    }
}
