let books = [];
let currentId = 0;

class Book {
    constructor(title, ISBN, publishedDate, author) {
        this.id = ++currentId;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static findAll() {
        return books;
    }

    static findById(id) {
        return books.find(book => book.id === id);
    }

    static create(data) {
        const book = new Book(data.title, data.ISBN, data.publishedDate, data.author);
        books.push(book);
        return book;
    }

    static updateById(id, data) {
        const book = books.find(book => book.id === id);
        if (!book) return null;
        book.title = data.title;
        book.ISBN = data.ISBN;
        book.publishedDate = data.publishedDate;
        book.author = data.author;
        return book;
    }

    static deleteById(id) {
        const index = books.findIndex(book => book.id === id);
        if (index !== -1) books.splice(index, 1);
        return index !== -1;
    }
}

module.exports = Book;