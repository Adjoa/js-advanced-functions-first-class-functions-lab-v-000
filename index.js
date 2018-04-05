// Code your solution in this file!
<<<<<<< HEAD

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice().splice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice().splice(drivers.length - 2, 2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
  return function (num) {
    return num * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (arrayOfDrivers, driverSelector) {
  return driverSelector(arrayOfDrivers);
};
=======
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(2)
};
>>>>>>> 167d54a1ec9b916290f731957ea489509e923498
