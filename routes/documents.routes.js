const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Documents = require("../models/Documents.model");
const Document = require("../models/Document.model");

//  POST /api/documents  -  Creates a new project
router.post("/documents", (req, res, next) => {
  const { wills, poas } = req.body;

  Documents.create({
    wills: [{ type: Schema.Types.ObjectId, ref: "Will" }],
    poas: [
      {
        type: Schema.Types.ObjectId,
        ref: "Power of Attorney",
      },
    ],
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
