const actions = require('./actions');
const axios = require('axios');
const funcs = {};

funcs.reqAndSetProfile =  function (handle) {
  return function (dispatch) {
    console.log(dispatch);
    dispatch(actions.loadingOn());
    axios.get('http://localhost:4000/api/personify/' + handle)
      .then(function (response) {
        dispatch(actions.setProfileOne(response.data));
        dispatch(actions.loadingOff());
      })
  }
};

module.exports = funcs;