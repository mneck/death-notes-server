const router = require("express").Router();
const mongoose = require("mongoose");

const Document = require("../models/Document.model");

// POST /api/document   - Creates a new document
router.post("/submitAnswers", (req, res, next) => {
  const { title, owner, answers, documentType } = req.body;

  Document.create({ title, answers: [], documentType })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
