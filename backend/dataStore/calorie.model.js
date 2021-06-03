const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema_calories = new Schema({
  username: {
       type: String,
       required: true },
  food: {
       type: String,
       required: true,
       minlength: 3},
  calories: {
       type: Number,
       required: true,
       minlength: 1 },
  fatPercent: {
       type: Number,
       required: true},
  carbPercent: {
       type: Number,
       required: true},
  proteinPercent: {
       type: Number,
       required: true},
  
  //time: {
    // type: Date,
     // required: true},
  
  
  date: {
       type: Date,
       required: true },
}, {
  timestamps: true,
});


const Calorie_Count = mongoose.model('Calorie_Count', schema_calories);

module.exports = Calorie_Count;
