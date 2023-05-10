const { Schema, model, SchemaTypes } = require("mongoose");

const powerOfAttorneySchema = new Schema(
  //set trim true for all items
  {
    user: {
      type: SchemaTypes.ObjectId,
      ref: "User",
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    userAddress: {
      type: String,
      required: true,
    },

    formInfo: [
      {
        poa_answer_id: {
          type: String,
        },
        name: {
          type: String,
        },
        value: {
          type: String,
        },
      },
    ],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const powerOfAttorney = model(
  "PowerOfAttorney",
  powerOfAttorneySchema
);

module.exports = powerOfAttorney;
