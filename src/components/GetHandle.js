const React = require('react');
const axios = require('axios');
const ProfilePicture = require('./profilePicture')

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

    return (

      <div className="GetHandle">
        <h1 className="title"> Personality Test </h1>
        <ProfilePicture/>
        <h1> Openness</h1>
        <progress class="progress is-primary" value={this.state.test.toString()} max="100">30%</progress>
        <button onClick={this.test}></button>
        <h1> Conscientiousness</h1>
        <progress class="progress is-info" value="45" max="100">45%</progress>
        <h1> Extraversion</h1>
        <progress class="progress is-success" value="60" max="100">60%</progress>
        <h1> Agreeableness</h1>
        <progress class="progress is-warning" value="75" max="100">75%</progress>
        <h1> Emotional Range</h1>
        <progress class="progress is-danger" value="90" max="100">90%</progress>


        <h1> Enter Twitter handle for a personality analysis of your tweets.</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text"/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
});

module.exports = GetHandle;