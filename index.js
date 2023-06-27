const express = require('express');
const bearerToken = require('express-bearer-token');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(bearerToken());

app.get('/health', (req, res) => {
    res.status(200).json({ msg: 'Servidor online!'})
})

app.listen(port, () => {
    console.log('Listening on port ' + port);
})