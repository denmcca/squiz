const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const passport = require('passport');
const config = require('./db');

const users = require('./routes/user');

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Cannot not connect to the database' + err) }
);

const app = express();
app.use(passport.initialize());
require('./passport')(passport);

const PORT = process.env.PORT || 4000;

app.use('/api/users', users);

app.get('/', function (req, res) {
  res.send('hello');
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    (err) => {
        console.log(`Server failed to connect`);
    }
})
