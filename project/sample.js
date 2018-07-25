var express = require('express');
var app = express();

var count = 0;

app.get('/',(req, res) => {
        count++;
        res.send("" + count)
});

console.log('running on http://localhost:3000/');
app.listen(3000);
