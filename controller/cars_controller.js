const express = require('express')
const cars = express.Router()

const Car = require('../models/cars.js')

cars.get('/', (req, res) => {
  Car.find({}, (error, foundCars) => {
    res.json(foundCars)
  })
})
cars.post('/', (req, res) => {
  Car.create(req.body, (error, createCar) => {
    Car.find({}, (error, foundCars) => {
      res.json(foundCars)
    })
  })
})
cars.put('/:id', (req, res) => {
  Car.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (error, updateCar) => {
      if(error){
        res.send(error)
      } else {
        Car.find({}, (error, foundCars) => {
          res.json(foundCars)
        })
      }
    }
  )
})
