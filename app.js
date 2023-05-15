require("dotenv").config();
require("./db");
const express = require("express");
const app = express();

require("./config")(app);

const {
  isAuthenticated,
} = require("./middleware/jwt.middleware");

// Route handling
const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

const documentRouter = require("./routes/document.routes");
app.use("/api", documentRouter);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
