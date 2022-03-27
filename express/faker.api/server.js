const express = require("express");
const app =  express();
const port = 8000;
const { faker } = require('@faker-js/faker');
const Order = require('./order');
const User = require("./components/User");
const Company = require("./components/Company");

app.get("/api", (req,res)=>{
    res.json({message:"here is the response"});
})

//faker fake info like lorem ipsum
app.get("/api/fake", (req,res)=>{
    const response = {
        name: faker.name.findName(),
        catchPhrase: faker.hacker.phrase()
    }
    res.json(response);
})

app.get("/api/order", (req,res)=>{
    res.json(new Order());
})

app.get("/api/user", (req,res)=>{
    res.json(new User());
})

app.get("/api/company", (req,res)=>{
    res.json(new Company());
})

app.get("/api/both", (req,res)=>{
    res.json([new User(), new Company()]);
})


app.listen(port,()=>console.log(`running on port ${port}.`))