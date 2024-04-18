const captureFugitive = (cops, fugitiveLocation) => {
  console.log(cops);
  for (const cop of cops) {
    if (cop.selectedCity.name === fugitiveLocation.name) {
      const totalDistance = cop.selectedCity.distance * 2;
      if (cop.selectedVehicle.range >= totalDistance) {
        return {cop};
      }
    }
  }
  return null;
};

module.exports = {
  captureFugitive,
};
