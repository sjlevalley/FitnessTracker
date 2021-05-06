const express = require('express');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 3000;
const app = express();


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/FitnessTracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,

});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));


// Start the server
app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`);
});
