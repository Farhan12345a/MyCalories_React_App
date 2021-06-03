
const express = require('express');
const cors = require('cors');
//connects to mongodb database
const mongoose = require('mongoose');


//Configures to env files
require('dotenv').config();

//Configure express server
const app = express();
//Try changing port to different port
const port = process.env.PORT || 5000;

//Allows to parse json 
app.use(cors());
app.use(express.json());

//Get from dashbord
const uri = process.env.URI_M;

//useNewUrlParser/useCreateIndex: used for mongodb deprecating (mongodb updates)
//optional?
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const mongoose_connection = mongoose.connection;

//Prints out once connection is open
mongoose_connection.once('open', () => {
  console.log("Database is connected");
})

//See if you can combine bottom 6 lines
//Requiring the files
//const calories_Route = require('./routes/calorie');
//const users_Route = require('./routes/users');
 
//Using the files
//app.use('/calorie', calories_Route);
//app.use('/users', users_Route);

app.use('/calorie', require('./routes/calorie'));
app.use('/users', require('./routes/users'));


//Starts the server at certain port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});