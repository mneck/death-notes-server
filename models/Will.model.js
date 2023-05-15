// Deprecated

// const { Schema, model } = require("mongoose");

// const willFormData = new Schema({
//   name: {
//     type: String,
//   },
//   value: {
//     type: String,
//   },
// });

// const willSchema = new Schema(
//   //set trim true for all items
//   {
//     // user info
//     userName: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//     },
//     userAddress: {
//       type: String,
//       required: true,
//     },

//     formInfo: [willFormData],
//     // see Mongoose models: Array
//   },
//   {
//     // this second object adds extra properties: `createdAt` and `updatedAt`
//     timestamps: true,
//   }
// );

// const will = model("Will", willSchema);

// module.exports = will;
