const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const documentSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    answers: [
      {
        cueId: String,
        answer: String,
      },
    ],
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

module.exports = model("Document", documentSchema);
