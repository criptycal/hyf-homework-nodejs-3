const express = require('express');
const app = express();
const users = [];

app.use(express.urlencoded({extended: false}));

app.listen(3000);

app.get('/users', (req, res) => {
    res.send(users)
})

app.use('/', (req, res) => {
    res.send('Hello World!')
})


