const { Schema, model } = require("mongoose");

const powerOfAttorneySchema = new Schema(
  {
    // user info
    userName: {
      type: String,
      required: [true, "Your name is required."],
      unique: true,
      trim: true,
    },
    userAddress: {
      type: String,
      required: true,
      unique: false,
      trim: false,
    },
    dateOfExecution: {
      type: Date,
      required: false,
      unique: false,
      trim: true,
    },

    // attorney info
    attorneyName: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    attorneyRelationshipToUser: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    attorneyAddress: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },

    // alternate attorney info
    alternateAttorneyName: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
    alternateAttorneyRelationshipToUser: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    alternateAttorneyAddress: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },

    // officer info
    officerName: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
    officerAddress: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
    officerType: {
      type: String, //to edit
      required: false,
      unique: false,
      trim: true,
    },
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
