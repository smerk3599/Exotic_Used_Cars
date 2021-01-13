cars.delete('/:id', (req, res) => {
  Car.findByIdAndRemove(req.params.id, (err, deletedCar) => {
    Car.find({}, (err, foundCar) => {
      res.json(foundCar)
    })
  })
})

module.exports = cars
