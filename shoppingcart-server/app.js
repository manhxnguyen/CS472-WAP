const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRouter');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/books', bookRoutes);

app.use((error, req, res, next) => {
    if (error.message.startsWith('No product')) {
        res.status(404).json({ success: false, message: error.message });
    } else {
        next();
    }

})

app.use((error, req, res, next) => {
    res.status(500).json({ success: false, message: error.message });
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});