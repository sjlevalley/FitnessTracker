const router = require('express').Router();
const { Workout } = require('../../models');
const db = require('../../models');




// ############## Get Workouts ###############

router.get('/', async (req, res) => {
    console.log("api/workouts Page Hit!");
    try {
        const prevWorkout = await db.Workout.find({});
        res.status(200).json(prevWorkout);
    } catch (err) {
        res.status(500);
    }
});




module.exports = router;