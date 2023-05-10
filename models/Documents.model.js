const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const documentsSchema = new Schema({
  wills: [{ type: Schema.Types.ObjectId, ref: "Will" }],
  poas: [
    {
      type: Schema.Types.ObjectId,
      ref: "Power of Attorney",
    },
  ],
});

module.exports = model("Documents", projectSchema);
