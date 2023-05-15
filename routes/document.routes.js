const router = require("express").Router();
const mongoose = require("mongoose");

const Document = require("../models/Document.model");

router.post("/document", (req, res, next) => {
  const { title, answers, documentType } = req.body;

  Document.create({ title, answers: [], documentType })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
