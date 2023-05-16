const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const documentSchema = new Schema(
  {
    title: {
      type: String,
    },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    answers: [
      {
        cueId: String,
        answer: String,
      },
    ],
    documentType: {
      type: String,
      enum: ["will", "poa"],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

module.exports = model("Document", documentSchema);
