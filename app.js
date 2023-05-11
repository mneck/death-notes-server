require("dotenv").config();
require("./db");
const express = require("express");
const app = express();
const {
  isAuthenticated,
} = require("./middleware/jwt.middleware");
require("./config")(app);

// Route handling
const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

const poaRouter = require("./routes/poa.routes");
app.use("/api", isAuthenticated, poaRouter);

const willRouter = require("./routes/will.routes");
app.use("/api", isAuthenticated, willRouter);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
