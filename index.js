const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({ msg: 'Servidor online!'})
})

app.listen(port, () => {
    console.log('Listening on port ' + port);
})