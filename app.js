const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello to AWS! but Manual Review Required to Continue Pipeline!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
