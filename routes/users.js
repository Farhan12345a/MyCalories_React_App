const router = require('express').Router();

//requires mongoose model
//see if this could be const
let User = require('../dataStore/user.model');

//1st route handler
//handles incoming http get requests
router.route('/').get((req, res) => {
//method that gets list of all users in db. returns a PROMISE in JSON
  User.find()
    //gets all users in json
    .then(users => res.json(users))
    //returns error message
    .catch(err => res.status(400).json('Error: ' + err));
});

//2nd route handler
//handles http post request
router.route('/add').post((req, res) => {
    //change variable
  const username = req.body.username;
    //create new instance of user
  const newUser = new User({username});

  //username is saved into database
  newUser.save()
  //returns message in json
    .then(() => res.json('New user has successfully been added!'))
    //else: error message
    .catch(err => res.status(400).json('Error: ' + err));
});

//exporting router
module.exports = router;