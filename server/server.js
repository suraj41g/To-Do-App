const express = require('express');
require('dotenv').config();
const connectDb = require('./database/connection')
connectDb();
const router = require('./routes/todoRoute')

const app = express();

// middleware
app.use(express.json());


const port =  process.env.PORT ||3031 

app.get('/', (req,res) =>{
    res.send("jai mata dii")
});
app.use('/api',router);

app.listen(port, () => {
    console.log(`server is running on ${process.env.PORT}`)
})