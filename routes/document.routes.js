const router = require("express").Router();
const mongoose = require("mongoose");

const Document = require("../models/Document.model");

// POST /api/document   - Creates a new document
router.post("/submitAnswers", (req, res, next) => {
  const { title, owner, answers, documentType } = req.body;

  Document.create({ title, owner, answers, documentType })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

// GET /api/documents   - Retrieves all of the documents
router.get("/documents", (req, res, next) => {
  Document.find()
    .then((allDocuments) => res.json(allDocuments))
    .catch((err) => res.json(err));
});

// GET /api/documents/:documentId    - Gets data from specified document
router.get("/documents/:documentId", (req, res, next) => {
  const { documentId } = req.params;
  Document.findById(documentId)
    .then((document) => res.json(document))
    .catch((err) => res.json(err));
  // const { title, owner, answers, documentType } = req.body;
});

// DELETE /api/document/:id   - Deletes specified document
router.delete(
  "/documents/:documentId",
  (req, res, next) => {
    const { documentId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(documentId)) {
      res
        .status(400)
        .json({ message: "Specified id is not valid" });
      return;
    }

    Document.findByIdAndRemove(documentId)
      .then(() =>
        res.json({
          message: `Document with ${documentId} is removed successfully.`,
        })
      )
      .catch((error) => res.json(error));
  }
);

module.exports = router;
