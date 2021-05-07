const router = require('express').Router();
const path = require('path');
// const { Workout } = require('../models');




router.get('/', (req, res) => {
    console.log("Homepage hit");
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get('/stats', (req, res) => {
    console.log("Stats page hit");
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get('/exercise', (req, res) => {
    console.log("Exercise page hit");
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});




module.exports = router;
