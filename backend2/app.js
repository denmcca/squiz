const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const expressValidator = require('express-validator');

const config = require('./dbconfig.js');

// Initialize application 
const app = express();

app.use(expressValidator({
    errorFormatter: (param,msg,value) => {
        var namespace = param.split('.'),
        root = namespace.shift(),
        formParam = root;
    while(namespace.length){
        formParam += '[' + namespace.shift() + ']';
    }
    return{
        param: formParam,
        msg: msg,
        value: value
    };
    }
}
))

// Load view engine
// app.set('views', path.join(__dirname,'views'));
// app.set('view engine','pug');

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Cannot not connect to the database' + err) }
  );

const PORT = process.env.PORT || 4050;

app.listen(PORT, () => {
    console.log("Connecting to port 4050");
    (err) => {
        console.log("Failed to connect");
    }
})

app.get('/', function(req,res){
    res.render('index', {
        title: 'Hello'
    });
});

app.get('/add', function(req,res){
    res.render('add_article', {
        title: 'Add Article'
    });
});

let users = require('./routes/users');
app.use('/users',users);