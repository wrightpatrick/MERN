//import sundae model
// const Sundae = require("../models/sundae.model");

module.exports.testResponse = (req,res) => {
    res.json({message: "This is a test response from the controller."})
}