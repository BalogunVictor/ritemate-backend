const HomepageModel = require("../models/HomepageModel");
const groupModel = require("../models/groupModel");
const individualModel = require("../models/individualModel");

module.exports.saveIndividual = async (req, res) => {
  const { districtNo, clubName, email, fullName, callName } = req.body;
  const amount = 25000;
  const accountType = "individual";

  individualModel
    .create({
      districtNo,
      clubName,
      amount,
      email,
      fullName,
      callName,
      accountType,
    })
    .then((data) => {
      console.log("Added Successfully...");
      console.log(data);
      res.send(data);
    });
};
module.exports.saveGroup = async (req, res) => {
  const {
    districtNo,
    clubName,
    email,
    fullName1,
    fullName2,
    fullName3,
    fullName4,
    fullName5,
    callName1,
    callName2,
    callName3,
    callName4,
    callName5,
    medicalCondition1,
    medicalCondition2,
  } = req.body;
  const amount = 133000;
  const accountType = "group Of 5";

  groupModel
    .create({
      districtNo,
      clubName,
      amount,
      email,
      fullName1,
      fullName2,
      fullName3,
      fullName4,
      fullName5,
      callName1,
      callName2,
      callName3,
      callName4,
      callName5,
      medicalCondition2,
      medicalCondition1,
      accountType,
    })
    .then((data) => {
      console.log("Added Successfully...");
      console.log(data);
      res.send(data);
    });
};

module.exports.saveHomepage = async (req, res) => {
  const { districtNo, clubName, email, accountType } = req.body;

  HomepageModel.create({
    districtNo,
    clubName,
    email,
    accountType,
  }).then((data) => {
    console.log("Added Successfully...");
    console.log(data);
    res.send(data);
  });
};
