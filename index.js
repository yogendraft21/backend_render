const express = require("express");
const cors = require("cors");
const cityRoutes = require("./routes/cityRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");
const captureRoutes = require("./routes/captureRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/cities", cityRoutes);
app.use("/vehicles", vehicleRoutes);
app.use("/capture", captureRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
