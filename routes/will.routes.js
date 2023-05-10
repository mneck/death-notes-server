const router = require("express").Router();

// const mongoose = require("mongoose");

const Will = require("../models/Will.model");

//  POST /api/poa  -  Creates a new project
router.post("/will", (req, res, next) => {
  const { userName, userAddress } = req.body;

  Will.create({
    userName,
    userAddress,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
