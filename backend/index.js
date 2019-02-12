const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 4000;

// Listen to the express server 

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    (err) => {
        console.log(`Server failed to connect`);
    }
})

app.get('/', function(req,res){
    res.send({test:"hello"});
})