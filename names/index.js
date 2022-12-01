const PeoplesNames = require("../country/state/city/index.js");
const FirstName = require("../utilities/utils/index.js");

const getPeopleInCity = (PeoplesNames) => {
  return FirstName(PeoplesNames);
};

module.exports = getPeopleInCity;
