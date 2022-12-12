const mongoose = require('mongoose');

const Schemas = mongoose.Schema({
   FirstName:{
      type: String,
      require:true
   },
   firstname:{
      type: String,
      require: true
   },
     date:{
      type: Date,
      default: Date.now
   },  
   Leader:{
      type: String,
      require:true
   },
     members:{
      type: Number,
      require:true
   },
})
module.exports = mongoose.model('post',Schemas)