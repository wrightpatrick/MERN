const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://patrickWright:patrickWright@cluster0.leteg.mongodb.net/products?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));