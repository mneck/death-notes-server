const router = require("express").Router();

// const mongoose = require("mongoose");

const Poa = require("../models/Poa.model");

//  POST /api/poa  -  Creates a new project
router.post("/poa", (req, res, next) => {
  const { userName, userAddress } = req.body;

  Poa.create({
    userName,
    userAddress,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
