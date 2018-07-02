const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  type: String,
  dateOfEvent: {
    type: Date
  },
  timePosted: { 
    type: Date, 
    default: Date.now 
  },
  contact: String,
  hashtag: {
    type:  []
  },
  location: String,
  linkToRegister: String,
  postedBy: String
})

module.exports = mongoose.model('event', eventSchema, 'events');