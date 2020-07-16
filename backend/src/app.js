const express = require("express");
const cors = require("cors");

const callRoutes = require("./routes/calls.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(callRoutes);

module.exports = app;
