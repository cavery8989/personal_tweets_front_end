const _ = require('lodash');
const types = require('../actions/types');


const appReducer = function (initialState, action) {
  var newState = initialState !== undefined ? _.cloneDeep(initialState) : {
    loading: false,
    profileOne: null,
    profileTwo: null
  };
  if (action) {
    switch (action.type) {
      case types.LOADING_ON :
        newState.loading = true;
        break;
      case types.LOADING_OFF :
        newState.loading = false;
        break;
      case(types.SET_PROFILE_ONE) :
        newState.profileOne = action.profile;
        break;
      case(types.SET_PROFILE_TWO) :
        newState.profileTwo = action.profile;
        break;
      case(types.REMOVE_PROFILE_ONE) :
        newState.profileOne = null;
        break;
      case(types.REMOVE_PROFILE_TWO) :
        newState.profileTwo = null;
    }
  }

  return newState
};

module.exports = appReducer;


//TODO: thunk middleware