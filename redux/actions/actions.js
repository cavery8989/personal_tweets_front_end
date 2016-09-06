//add profile 1,
//add profile 2,
//turn on loading
//turn off loading;

const types = require('./types');

const actions = {};

actions.loadingOn =  function () {
  var obj = {};
  obj.type = types.LOADING_ON;
  return obj;
};

actions.loadingOff =  function () {
  var obj = {};
  obj.type = types.LOADING_OFF;
  return obj;
};

actions.setProfileOne = function (profile) {
  var obj = {};
  obj.type = types.SET_PROFILE_ONE;
  obj.profile = profile;
  return obj;
};

actions.removeProfileOne = function () {
  var obj = {};
  obj.type = types.REMOVE_PROFILE_ONE;
  return obj;
};

actions.setProfileTwo = function (profile) {
  var obj= {};
  obj.type = types.SET_PROFILE_TWO;
  obj.profile= profile;
  return obj;
};

actions.removeProfileTwo = function () {
  var obj = {};
  obj.type = types.REMOVE_PROFILE_TWO;
  return obj;
};



module.exports = actions;