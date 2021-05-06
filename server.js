const path = require('path');
const express = require('express');
const routes = require('./controllers');
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/FitnessTracker', {
    // mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,

});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


// Start the server
app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`);
});
