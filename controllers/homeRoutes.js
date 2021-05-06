const router = require('express').Router();
const path = require('path');
// const { Workout } = require('../models');





// router.get('/', (req, res) => {
//     console.log("helloHello00000");
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });


router.get('/exercise', (req, res) => {
    console.log("helloHello");
    res.sendFile(path.join(__dirname, "../public/exercise.html"));

});




module.exports = router;
