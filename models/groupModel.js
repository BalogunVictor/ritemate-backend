const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
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
  fullName5: {
    type: "string",
    require: true,
  },
  fullName1: {
    type: "string",
    require: true,
  },
  fullName2: {
    type: "string",
    require: true,
  },
  fullName3: {
    type: "string",
    require: true,
  },
  fullName4: {
    type: "string",
    require: true,
  },
  callName1: {
    type: "string",
    require: true,
  },
  callName2: {
    type: "string",
    require: true,
  },
  callName3: {
    type: "string",
    require: true,
  },
  callName4: {
    type: "string",
    require: true,
  },
  callName5: {
    type: "string",
    require: true,
  },
  medicalCondition1: {
    type: "string",
    require: true,
  },
  medicalCondition2: {
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

module.exports = mongoose.model("group", groupSchema);
