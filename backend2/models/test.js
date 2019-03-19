const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TestSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  testName: {
    type: String,
    required: true
  }
  questions: {
      type: Array,
      required: false
  },
  class: {
      type: String,
      required: false
  }
});

const Test = module.exports = mongoose.model('tests',TestSchema,"tests");
