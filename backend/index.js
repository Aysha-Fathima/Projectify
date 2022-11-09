const  dotenv =require("dotenv");
const mongoose =require( "mongoose");
const express= require("express");
const https =require("https");
const bodyParser = require("body-parser");
const app =express();
const cors = require("cors");
const { decodeBase64 } = require("bcryptjs");
dotenv.config();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
const { connectToDb, getDb } = require('./db')
const { ObjectId } = require('mongodb')

main().catch(err => console.log(err));

//let db


async function main() {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
    //db = getDb()
}

/*
connectToDb((err) => {
    if(!err) {
        app.listen(8800, () => {
            console.log("Connected to MongoDB");
        })
        db = getDb()
    }
})
*/

/* Password
8War7ZfggfKdeNZ8
*/
app.post("/code",(req, res) =>{
const obj = req.body;
console.log(Object.keys(obj)[0]);
db.collections('code')
  .insertOne(obj)
  .then(result => {
    res.status(201).json(result)
  })
  .catch(err => {
    res.status(500).json({err: 'Could not create doc'})
  })

})
// url should be used instead of id

app.get("/code/:id",(req,res)=>{

if (ObjectId.isValid(rerq.params.id)) {
    db.collection('code')
      .findOne({_id: ObjectId(req.params.id)})
      res.send({body:1})
      .then(doc =>{
          res.status(200).json(doc)
      })
      .catch(err => {
          res.status(500).json({eror: 'could not fetch doc'})
      })
}
else{
    res.status(500).json({error: 'invalid id'})
}
    // res.send("First request!");
})

/*

app.use((err,req,res,next)=>{
    const errorStatus =err.status || 500
    const errorMessage =err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    });
})
*/
app.listen(8800,()=>{
    console.log("Connected to Backend !");

})