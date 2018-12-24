var express = require('express');

var app = express();

var port = 3000;
//Servidor 
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});