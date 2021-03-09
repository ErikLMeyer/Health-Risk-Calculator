/*
    Node.js/Express for Health-Risk Calculator.
    By: Erik L. Meyer
*/

const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/'));

app.get('/', (req,res) => res.render('index'));


app.listen(port, () => console.log(`server started on port ${port}; ` +
    'press Ctrl-C to terminate....'))