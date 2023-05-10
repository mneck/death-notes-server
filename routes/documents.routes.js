const router = require("express").Router();

// const mongoose = require("mongoose");

const Documents = require("../models/Documents.model");

//  POST /api/documents  -  Creates a new project
router.post("/documents", (req, res, next) => {
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
