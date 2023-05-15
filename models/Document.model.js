const { Schema, model, SchemaTypes } = require("mongoose");

const documentSchema = new Schema(
  //set trim true for all items
  {
    user: {
      type: SchemaTypes.ObjectId,
      ref: "User",
    },
    title: String,
    answers: Array,
    documentType: {
      type: String,
      enum: ["Will", "Power of Attorney"],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const document = model("Document", documentSchema);

module.exports = documentSchema;
