const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const documentsSchema = new Schema(
  {
    wills: [{ type: Schema.Types.ObjectId, ref: "Will" }],
    poas: [
      {
        type: Schema.Types.ObjectId,
        ref: "Power of Attorney",
      },
    ],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

module.exports = model("Documents", documentsSchema);
