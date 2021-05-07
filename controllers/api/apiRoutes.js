const router = require('express').Router();
const { Workout } = require('../../models');
const db = require('../../models');




// ############## Get Previous Workout ###############
// ############## Get Previous Workout ###############
// ############## Get Previous Workout ###############

router.get('/', async (req, res) => {
    console.log("api/workouts Page Hit!");
    try {
        const lastWorkout = await db.Workout.find({});
        res.status(200).json(lastWorkout);
    } catch (err) {
        res.status(500);
    }
});


router.post('/', async (req, res) => {
    console.log("workouts.post route hit!");
    try {
        const newWorkout = await db.Workout.create(req.body);
        res.status(200).json(newWorkout);
    } catch (error) {
        res.status(500);
    }
});


router.put('/:id', async (req, res) => {
    console.log("Update workout route hit!");
    try {
        const editWorkoutbyID = await db.Workout.findByIdAndUpdate(req.params.id, {
            $push: { exercises: req.body },
        });
        res.status(200).json(editWorkoutbyID);
    } catch (error) {
        res.status(500);
    }
});


router.get('/range', async (req, res) => {
    console.log("api/workouts by Range Page Hit!");
    try {
        const lastWorkout = await db.Workout.find({})
            .limit(7)
            .sort({ _id: -1 });
        const weeksWorkout = lastWorkout.reverse();
        console.log(weeksWorkout);
        res.status(200).json(weeksWorkout);
    } catch (err) {
        res.status(500);
    }
});


module.exports = router;