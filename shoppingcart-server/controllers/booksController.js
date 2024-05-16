const Book = require('../models/book');

exports.getAllBooks = (req, res) => {
    res.json(Book.findAll());
};

exports.getBook = (req, res) => {
    const book = Book.findById(parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
};

exports.createBook = (req, res) => {
    const book = Book.create(req.body);
    res.status(201).json(book);
};

exports.updateBook = (req, res) => {
    const book = Book.updateById(parseInt(req.params.id), req.body);
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
};

exports.deleteBook = (req, res) => {
    const success = Book.deleteById(parseInt(req.params.id));
    if (!success) return res.status(404).send('Book not found');
    res.status(204).send();
};