const React = require('react');
const axios = require('axios');
const ProfilePicture = require('./ProfilePicture')
const DisplayStats = require('./DisplayStats')

const GetHandle = React.createClass({

  handleSubmit : function (e) {

  },
  test : function () {

   var loaded = this.state.test;

    var id = setInterval(frame.bind(this), 10);

    function frame () {
      if(this.state.test >= 100){
        clearInterval(id)
      }else{
        loaded ++;
        this.setState({
          test: loaded
        })
      }
    };


  },

  getInitialState : function () {
    return {
      test: 1
    }
  },

  render: function () {
    axios.get('http://localhost:4000/api/dummy')
      .then(function (data){
        console.log('data!!!',data)
      });
    //{transition-timing-function: linear;}

    return

      <div className="GetHandle">
        <h1 className="title"> Personality Test </h1>
        <ProfilePicture/>
        <DisplayStats/>

        <h1 className="SubmitInstructions"> Enter Twitter handle for personality analysis.</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text"/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
});

module.exports = GetHandle;