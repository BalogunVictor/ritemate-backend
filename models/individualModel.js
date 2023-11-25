const mongoose = require("mongoose");

const individualSchema = new mongoose.Schema({
  districtNo: {
    type: "string",
    require: true,
  },
  clubName: {
    type: "string",
    require: true,
  },
  email: {
    type: "string",
    require: true,
  },
  fullName: {
    type: "string",
    require: true,
  },
  callName: {
    type: "string",
    require: true,
  },
  accountType: {
    type: "string",
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("individual", individualSchema);
