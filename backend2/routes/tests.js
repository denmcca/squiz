const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

let Test = require("../models/test");
let User = require("../models/user");

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.post('/add',(req,res)=> {
    req.checkBody('userId', 'User ID is required').notEmpty();
    req.checkBody('testName','Test name is required').notEmpty();
});

let errors = req.validationErrors();

if(errors){
    console.log("error")
} else {
    let test = new Test();
    test.userId = req.user._id;
    test.testName = req.body.testName;
    test.questipns = req.body.questions;
    
    test.save(function(err){
        if(err){
            console.log(err);
            return;
        } else {
            console.log('Success, Test added');
        }
    })
}