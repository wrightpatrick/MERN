const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/users_DB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database Big Boss"))
	.catch(err => console.log("Big Boss, something went wrong when connecting to the database", err));