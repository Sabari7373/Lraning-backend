const mongoose = require("mongoose");
const mongoURL = "mongodb+srv://sabari-2:sabari-crm@cluster0.nuqag9v.mongodb.net/";

mongoose.connect(mongoURL , { useNewUrlParser:true , useUnifiedTopology:true });

const connection = mongoose.connection

connection.on("error", ()=>{
    console.log("Mongo DB connection failed");
})
connection.on("connected" , ()=>{
    console.log("mongo DB connection Successfull !");
})

module.exports = mongoose;