const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require("bcryptjs");
const passport = require("passport");


// bring in user model
let User = require("../models/user");

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

// Register form
// router.get("/register", function(req, res) {
//   res.render("register");
// });

router.post('/register', async function(req, res){
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const password2 = req.body.password2;

  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
  
  const EmailExists = await User.findOne({
    email:req.body.email
  });
  
  const UserExists = await User.findOne({
    username:req.body.username
  });
  let errors = req.validationErrors();

  if(errors){
    console.log("error");
    // res.render('register', {
    //   errors:errors
    // });
  } else if(EmailExists){
    return res.status(400).json({
      email:'Email already exists'
    });
  } else if(UserExists){
    return res.status(400).json({
      username:'Username already exists'
    });
  } else {
    let newUser = new User({
      name:name,
      email:email,
      username:username,
      password:password
    });

    bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(newUser.password, salt, function(err, hash){
        if(err){
          console.log(err);
        }
        newUser.password = hash;
        newUser.save(function(err){
          if(err){
            console.log(err);
            return;
          } else {
            console.log('Success, You are now registered and can log in');
          }
        });
      });
    });
  }
});

router.post('/login', (req,res,next) => {
  passport.authenticate('local', {
    successRedirect:'/',
    failureRedirect:'/login',
    failureFlash: true
  })(req,res,next);
});

// router.get('/login', (req,res)=> {
//     res.render('login');
//});

module.exports = router;
