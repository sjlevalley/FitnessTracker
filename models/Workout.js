const mongoose = require('mongoose');

const { Schema } = mongoose;

const WorkoutSchema = new Schema(
    {
        date: {
            type: String,
            default: Date.now()
        },

        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: true
                },
                name: {
                    type: String,
                    trim: true,
                    required: 'Name is Required'
                },
                duration: {
                    type: Number,
                    required: true
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
            },
        ],
    },


);

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
