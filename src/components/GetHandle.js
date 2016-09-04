const React = require('react');
const axios = require('axios');
const connect = require('react-redux').connect;
const ProfilePicture = require('./ProfilePicture');
const DisplayStats = require('./DisplayStats');
const actions = require('../../redux/actions/actions');

const GetHandle = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();
    console.log('about to send req')
    this.props.sendReqThenSet('chris')
  },
  render: function () {
    return (

      <div className="GetHandle">
        <h1 className="title"> Personality Test </h1>
        <ProfilePicture url={this.props.profileOne && this.props.profileOne.imageUrl}/>
        <DisplayStats profile={this.props.profileOne}/>

        <h1 className="SubmitInstructions"> Enter Twitter handle for personality analysis.</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text"/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
});

function mapStatetoProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {

  function requestThenSetProfile(handle) {

    return function (dispatch) {
      console.log(dispatch);
      dispatch(actions.loadingOn());
      axios.get('http://localhost:4000/api/personify/' + handle)
        .then(function (response) {
          dispatch(actions.setProfileOne(response.data));
          dispatch(actions.loadingOff());
        })
    }
  }

  return {
    sendReqThenSet: function (name) {
      dispatch(requestThenSetProfile(name))
    }

  }
}


// requestThenSetProfile: function (handle) {
//   //console.log('in req the set',dispatch)
//
//   return function (dispatch){
//     console.log(dispatch);
//     dispatch(actions.loadingOn());
//     axios.get('http://localhost:4000/api/personify/' + handle)
//       .then(function(response){
//         dispatch(actions.setProfileOne(response));
//         dispatch(actions.loadingOff());
//       })
//   }
// }

module.exports = connect(mapStatetoProps, mapDispatchToProps)(GetHandle);