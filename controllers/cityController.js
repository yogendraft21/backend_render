const City = require("../models/cityModel");

const cities = [
  new City(
    "Yapkashnagar",
    60,
    "Glowing alleys and rooftop races, powered by solar energy.",
    "https://i.ibb.co/BLWt2dK/yapkashnagar.png"
  ),
  new City(
    "Lihaspur",
    50,
    "Ancient temples shrouded in fog, whispers of forgotten tech",
    "https://i.ibb.co/r02tbQ8/lihaspur.png"
  ),
  new City(
    "Narmis City",
    40,
    "Towering skyscrapers and hidden underground networks.",
    "https://i.ibb.co/kyKrW5M/narmis.png"
  ),
  new City(
    "Shekharvati",
    30,
    "Rolling hills and forgotten mining tunnels.",
    "https://i.ibb.co/nw8zpCP/shekharvati.png"
  ),
  new City("Nuravgram", 20,"Talking robots and malfunctioning AI guardians.", "https://i.ibb.co/z57RSTP/nuravgram.png"),
];

const getCities = (req, res) => {
  res.json(cities);
};

const getLocation = () => {
  return cities[Math.floor(Math.random() * cities.length)];
};

module.exports = {
  getCities,
  getLocation,
};
