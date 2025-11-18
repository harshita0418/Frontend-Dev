class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            return 'Book already issued';
        }
        this.isIssued = true;
        return `Book "${this.title}" issued successfully`;
    }

    returnBook() {
        if (!this.isIssued) {
            return 'Book was not issued';
        }
        this.isIssued = false;
        return `Book "${this.title}" returned successfully`;
    }

    getDetails() {
        return `Title: ${this.title} | Author: ${this.author} | ISBN: ${this.isbn} | Status: ${this.isIssued ? 'Issued' : 'Available'}`;
    }
}

const library = [
    new Book('The Great Gatsby', 'F. Scott Fitzgerald', 'ISBN001'),
    new Book('To Kill a Mockingbird', 'Harper Lee', 'ISBN002', true),
    new Book('1984', 'George Orwell', 'ISBN003'),
    new Book('Pride and Prejudice', 'Jane Austen', 'ISBN004', true),
    new Book('The Catcher in the Rye', 'J.D. Salinger', 'ISBN005'),
    new Book('Brave New World', 'Aldous Huxley', 'ISBN006')
];

function displayAvailableBooks() {
    const output = document.getElementById('availableOutput');
    const available = library.filter(book => !book.isIssued);
    let result = `Total Available Books: ${available.length}\n` + '='.repeat(80) + '\n\n';
    available.forEach(book => {
        result += book.getDetails() + '\n';
    });
    output.textContent = result;
}

function displayAllBooks() {
    const output = document.getElementById('allBooksOutput');
    let result = `Total Books in Library: ${library.length}\n` + '='.repeat(80) + '\n\n';
    library.forEach((book, index) => {
        result += `${index + 1}. ${book.getDetails()}\n`;
    });
    output.textContent = result;
}

function issueBook() {
    const isbn = document.getElementById('isbnInput').value.trim();
    const output = document.getElementById('actionOutput');
    
    if (!isbn) {
        output.innerHTML = '<span class="error">Please enter ISBN</span>';
        return;
    }

    const book = library.find(b => b.isbn === isbn);
    if (!book) {
        output.innerHTML = '<span class="error">Book not found</span>';
        return;
    }

    const result = book.issueBook();
    output.innerHTML = `<span class="${book.isIssued ? 'success' : 'error'}">${result}</span>`;
    document.getElementById('isbnInput').value = '';
}

function returnBook() {
    const isbn = document.getElementById('isbnInput').value.trim();
    const output = document.getElementById('actionOutput');
    
    if (!isbn) {
        output.innerHTML = '<span class="error">Please enter ISBN</span>';
        return;
    }

    const book = library.find(b => b.isbn === isbn);
    if (!book) {
        output.innerHTML = '<span class="error">Book not found</span>';
        return;
    }

    const result = book.returnBook();
    output.innerHTML = `<span class="${!book.isIssued ? 'success' : 'error'}">${result}</span>`;
    document.getElementById('isbnInput').value = '';
}
