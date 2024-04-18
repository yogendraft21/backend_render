const captureService = require("../services/captureService");
const { getLocation } = require("./cityController");

const captureFugitive = (req, res) => {
  const { copsData } = req.body;
  const fugitiveLocation = getLocation();
  const capturedCop = captureService.captureFugitive(copsData,fugitiveLocation);

  res.json({ capturedCop });
};

module.exports = {
  captureFugitive,
};
