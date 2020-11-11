const Workout = require("../models/workouts")
const app = require("express").Router();

    app.get("/api/workouts", (req, res) => {
      Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
          res.status(400).json(err);
      });
    });
     
    app.post("/api/workouts", ({ body }, res) => {
      Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
          res.status(400).json(err);
      });
    });
  
    app.put("/api/workouts/:id",(req, res) => {
      Workout.update(
        req.params.id,
        { $push: {exercises: req.body}},
        {new: true}
        )
        .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
          res.status(400).json(err);
      });
    });

    app.get("/api/workouts/range", (req, res) => {
      Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
          res.status(400).json(err);
      });
    });
  
    module.exports = app;