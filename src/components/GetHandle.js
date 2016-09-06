const React = require('react');
const ReactDOM = require('react-dom');

const connect = require('react-redux').connect;
const ProfilePicture = require('./ProfilePicture');
const DisplayStats = require('./DisplayStats');
const actions = require('../../redux/actions/actions');
const funcs = require('../../redux/actions/funcs');

const GetHandle = React.createClass({


  handleSubmit: function (e) {
    e.preventDefault();
    console.log(this.refs.userHandle.value);
   var userHandle = ReactDOM.findDOMNode(this.refs.userHandle).value;
   if( userHandle !== ''){
      this.props.sendReqThenSet(userHandle);
    }


  },
  render: function () {
    return (

      <div className="GetHandle">
        <h1 className="title"> Personality Test </h1>
        <ProfilePicture url={this.props.profileOne && this.props.profileOne.imageUrl}/>
        <DisplayStats profile={this.props.profileOne}/>

        <h1 className="SubmitInstructions"> Enter Twitter handle for personality analysis.</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="userHandle"/>
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
  return {
    sendReqThenSet: function (userHandle) {
      dispatch(funcs.reqAndSetProfile(userHandle))
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