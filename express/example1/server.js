//server instance information
const express = require("express");
const app = express();
const port = 8000;

//to accept json for post requests
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//app route
app.get("/api", (req,res)=>{
    console.log("sending call to a database")
    res.json({message:"here is the response"});
})

//you can send functions and many items at once
app.get("/api/other", (req,res)=>{
    console.log("sending call to a database")
    res.json(["here is item 0", new Date().getTime()]);
})

//req.params to get url parameters
app.get("/api/repeat/:word", (req,res)=>{
    console.log("sending call to a database")
    res.json({message:`here is your repeated word, Sir:" ${req.params.word}`});
})

//post request req.body is whatever the user sends in
app.post("/api/repeat", (req,res)=>{
    console.log("taking in post request");
    res.json(req.body);
})

//port on function
app.listen(port, ()=>console.log(`Running on port $${port}. Online and ready to rollout!`));