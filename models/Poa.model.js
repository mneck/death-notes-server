const { Schema, model } = require("mongoose");

const poaFormData = new Schema({
  name: {
    type: String,
  },
  value: {
    type: String,
  },
});

const powerOfAttorneySchema = new Schema(
  //set trim true for all items
  {
    // user info
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

    formInfo: [poaFormData],
    // see Mongoose models: Array
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

// execution info
//     executionDate: {
//       type: Date,
//       required: false,
//       unique: false,
//       trim: true,
//     },
//     executionPlace: {
//       type: String,
//       required: false,
//       unique: false,
//       trim: true,
//     },

//     // attorney info
//     attorneyName: {
//       type: String,
//       required: true,
//       unique: false,
//       trim: true,
//     },
//     attorneyRelationshipToUser: {
//       type: String,
//       required: true,
//       unique: false,
//       trim: true,
//     },
//     attorneyAddress: {
//       type: String,
//       required: true,
//       unique: false,
//       trim: true,
//     },

//     // alternate attorney info
//     alternateAttorneyName: {
//       type: String,
//       required: false,
//       unique: false,
//       trim: true,
//     },
//     alternateAttorneyRelationshipToUser: {
//       type: String,
//       required: true,
//       unique: false,
//       trim: true,
//     },
//     alternateAttorneyAddress: {
//       type: String,
//       required: true,
//       unique: false,
//       trim: true,
//     },

//     // officer info
//     officerName: {
//       type: String,
//       required: false,
//       unique: false,
//       trim: true,
//     },
//     officerAddress: {
//       type: String,
//       required: false,
//       unique: false,
//       trim: true,
//     },
//     officerType: {
//       type: String, //to edit
//       required: false,
//       unique: false,
//       trim: true,
//     },
