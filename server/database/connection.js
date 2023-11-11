const mongoose = require('mongoose');

async function connectDb() {
   const DATABASE = mongoose.connect('mongodb://127.0.0.1:27017/to-do')
   .then( () =>{
    console.log('connected to Mongodb Database')
    return (DATABASE)
    .catch(err => Console.log("Not connected to Database"))
   })
  
};

module.exports = connectDb;