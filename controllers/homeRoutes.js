const router = require('express').Router();
const path = require('path');
// const { Workout } = require('../models');





router.get('/stats', (req, res) => {
    console.log("/stats page hit");
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});


router.get('/exercise', (req, res) => {
    console.log("/exercise page hit");
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});




module.exports = router;
