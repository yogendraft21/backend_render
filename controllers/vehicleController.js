const Vehicle = require("../models/vehicleModel");


const getVehicles = (req, res) => {
  const vehicles = [
    new Vehicle("EV Bike", 60, 2, "https://i.ibb.co/r3wD4H3/EV-bike.png"),
    new Vehicle("EV Car", 100, 1, "https://i.ibb.co/xsfC38V/EV-car.png"),
    new Vehicle("EV SUV", 120, 1, "https://i.ibb.co/WkYn9m3/EV-SUV.png"),
  ];
  res.json(vehicles);
};

module.exports = {
  getVehicles,
};
