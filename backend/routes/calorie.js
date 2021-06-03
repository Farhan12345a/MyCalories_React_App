const router = require('express').Router();

let Calorie_Count = require('../dataStore/calorie.model');

//Route Handler
router.route('/').get((req, res) => {
  Calorie_Count.find()
    .then(calorie => res.json(calorie))
    //change variable or logic
    .catch(err => res.status(400).json('Error: ' + err));
});


//Posting ROute Handler
//Adding Data
//Same data as the dataStore parameters (variables)
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const food = req.body.food;
  const calories = Number(req.body.calories);
  //************CHANGE****** */
  const fatPercent = Number(req.body.fatPercent);
  const carbPercent = Number(req.body.carbPercent);
  const proteinPercent = Number(req.body.proteinPercent);
  //const time = Date.parse(req.body.time);
  const date = Date.parse(req.body.date);

  

  const incomingCalories = new Calorie_Count({
    username,
    food,
    calories,
    //************CHANGE****** */
    fatPercent,
    carbPercent,
    proteinPercent,
    //time,
    date,

  });

//Saving calorie data
  incomingCalories.save()
  //promise
  .then(() => res.json('Calorie Information has been added!'))
  //Another error message
  .catch(err => res.status(400).json('Error: ' + err));
});

//new stuff
//change id??
//get id: id is creating automatically by mongo
router.route('/:id').get((req, res) => {
//gets id from url
Calorie_Count.findById(req.params.id)
    .then(calorie_info => res.json(calorie_info))
    .catch(err => res.status(400).json('Error: ' + err));
});

//delete instead of get
//delete
router.route('/:id').delete((req, res) => {
//Try finding different method with same function
Calorie_Count.findByIdAndDelete(req.params.id)
    .then(() => res.json('Calorie Information deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//update the information
router.route('/update/:id').post((req, res) => {
//find the current calorie information
Calorie_Count.findById(req.params.id)
    .then(calorie_data => {
      calorie_data.username = req.body.username;
      calorie_data.food = req.body.food;
      calorie_data.calories = Number(req.body.calories);
      //************CHANGE****** */
      calorie_data.fatPercent = Number(req.body.fatPercent);
      calorie_data.carbPercent = Number(req.body.carbPercent);
      calorie_data.proteinPercent = Number(req.body.proteinPercent);
      //calorie_data.time = Date.parse(req.body.time);
      calorie_data.date = Date.parse(req.body.date);
      
      
      //Saves calorie information
      calorie_data.save()
        .then(() => res.json('Calorie Information is now updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


//Could change router variable name
module.exports = router;
