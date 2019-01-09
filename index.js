const express = require('express');
const app = express();

// Route handler
app.get('/', (req, res) => {
    res.send({ hi: 'there'});
});

// Listen for herokus port or local 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);