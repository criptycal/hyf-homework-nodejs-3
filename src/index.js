const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));

app.listen(3000);

app.use('/', (req, res) => {
    res.send('Hello World!')
})