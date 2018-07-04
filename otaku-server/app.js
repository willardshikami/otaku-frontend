const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api')
const cors = require('cors');

const app = express();
const PORT = 5000;

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api', api);

//test get req
app.get('/', (req, res) => {
  res.send('You are Home');
})


//Running server on port 5000
app.listen('5000', () => {
  console.log('Listening on port: ' + PORT)
})