const React = require('react');
const axios = require('axios');
const connect = require('react-redux').connect;
const ProfilePicture = require('./ProfilePicture')
const DisplayStats = require('./DisplayStats')

const GetHandle = React.createClass({

  handleSubmit : function (e) {
    e.preventDefault()
  },
  render: function () {
    return(

      <div className="GetHandle">
        <h1 className="title"> Personality Test </h1>
        <ProfilePicture/>
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

function mapStatetoProps (state) {
  return state;
}

module.exports = connect(mapStatetoProps)(GetHandle);