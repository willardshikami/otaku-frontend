const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors')
const mongoose = require('mongoose');
const config = require('./config/database');

//connecting to the database
mongoose.connect(config.database);

//confirming if connection is successful
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+ config.database);
});

//checking for errors
mongoose.connection.on('error', (err) => {
    console.log('Database error '+ err);
});

const app = express();

//route
const users = require('./routes/users');


//Cors Middleware to make request to API on different domains
app.use(cors());

//Body parser middleware to accept data
app.use(bodyParser.json());

//static folder
app.use(express.static(path.join(__dirname, 'client')))


//user models
app.use('/users', users);


//port var
const port = 5000;

//route to homepage(invalid)
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

//listening to and starting the server on port 5000
app.listen(port, () => {
    console.log('Server started on port ' + port)
});