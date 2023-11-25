const mongoose = require("mongoose");

const homepageSchema = new mongoose.Schema({
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
  accountType: {
    type: "string",
    require: true,
  },
});

module.exports = mongoose.model("Homepage Registration", homepageSchema);
