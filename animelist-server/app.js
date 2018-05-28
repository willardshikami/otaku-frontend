const express = require('express');

const app = express();


//Running server on port 5000
app.listen('5000', () => {
  console.log('Listening on port 5000')
})