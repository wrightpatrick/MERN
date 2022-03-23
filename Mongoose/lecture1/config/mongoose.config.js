const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/march_2022_sundaes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("You have connected to the Database, Big Boss."))
    .catch(err=>console.log("The Database failed to connect", err))