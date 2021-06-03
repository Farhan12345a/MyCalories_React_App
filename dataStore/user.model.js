//Import Mongoose
const mongoose = require('mongoose');

//look at alternative (Udemy)
const Schema = mongoose.Schema;


const schema_user = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
    //trim white space
    trim: true
  },
}, {
  //when it was created/modified
  timestamps: true,
});

const User = mongoose.model('User', schema_user);

//used in route/user.js (same with calorie)
module.exports = User;