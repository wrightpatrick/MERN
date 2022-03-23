const express = require("express");
const app = express();
const port = 8000;

// the old way for routes
// app.get("/api/test", (req,res)=>{
//     res.json({message:"Hey this is a message"});
// })

require("./server/config/mongoose.config");

app.use(express.json(),express.urlencoded({extended:true}));

require("./server/routes/sundae.routes")(app);

app.listen(port, ()=>console.log(`Running on port ${port} Big Boss.`));