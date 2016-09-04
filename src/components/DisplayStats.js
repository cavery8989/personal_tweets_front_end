// duplicate of GetHandle, displayStats isn't being required anywhere


const React = require('react');
const connect = require('react-redux').connect;

const DisplayStats = React.createClass({
  getInitialState: function () {
    return{
      openness: 0,
      conscientiousness:0,
      extraversion: 0,
      agreeableness: 0,
      emotionalRange: 0

    }
  },
  test: function () {

    var loaded = this.state.test;

    var id = setInterval(frame.bind(this), 10);

    function frame() {
      if (this.state.test >= 100) {
        clearInterval(id)
      } else {
        loaded++;
        this.setState({
          test: loaded
        })
      }
    }
  },

  render: function () {
    return (
      <div className="stats-bars">
        <h1> Openness</h1>
        <progress className="progress is-primary" value={this.state.openness.toString()} max="100">30%</progress>
        <h1> Conscientiousness</h1>
        <progress className="progress is-info" value={this.state.conscientiousness.toString()} max="100">45%</progress>
        <h1> Extraversion</h1>
        <progress className="progress is-success" value={this.state.extraversion.toString()} max="100">60%</progress>
        <h1> Agreeableness</h1>
        <progress className="progress is-warning" value={this.state.agreeableness.toString()} max="100">75%</progress>
        <h1> Emotional Range</h1>
        <progress className="progress is-danger" value={this.state.emotionalRange.toString()} max="100">90%</progress>
      </div>
    )
  }


});


module.exports = DisplayStats;