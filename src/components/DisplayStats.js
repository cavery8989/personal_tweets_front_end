// duplicate of GetHandle, displayStats isn't being required anywhere


const React = require('react');
const connect = require('react-redux').connect;
const StatsBar = require('./StatBar');

const DisplayStats = React.createClass({
  getInitialState: function () {
    return {
      Openness: 0,
      Conscientiousness: 0,
      Extraversion: 0,
      Agreeableness: 0,
      Emotionalrange: 0

    }
  },
  animateProgBar: function (characteristic, percentage) {

    var loaded = 0;
    console.log('loaded', loaded);

    var id = setInterval(frame.bind(this), 40);

    function frame() {
      if (loaded >= percentage) {
        clearInterval(id)
      } else {
        loaded++;
        this.setState({
          [characteristic]: loaded
        })
      }
    }
  },
  componentWillReceiveProps: function () {
  //TODO: remove this code, replace with custom progress bar.
    if (this.props.profile) {
      var profiles = this.props.profile.profile;
      //this.setState(this.getInitialState());
      profiles.forEach(function (profile) {
        var name = (profile.name).replace(/\W/,'');
        console.log(name);
        console.log('starting animate')
        this.animateProgBar(name, profile.percentage);
      }.bind(this));

    }
  },

  render: function () {
    return (
      <div className="stats-bars" >
        <StatsBar value={this.state.Openness}/>
        <h1> Openness</h1>
        <progress className="progress is-primary" value={this.state.Openness.toString()} max="100">30%</progress>
        <h1> Conscientiousness</h1>
        <progress className="progress is-info" value={this.state.Conscientiousness.toString()} max="100">45%</progress>
        <h1> Extraversion</h1>
        <progress className="progress is-success" value={this.state.Extraversion.toString()} max="100">60%</progress>
        <h1> Agreeableness</h1>
        <progress className="progress is-warning" value={this.state.Agreeableness.toString()} max="100">75%</progress>
        <h1> Emotional Range</h1>
        <progress className="progress is-danger" value={this.state.Emotionalrange.toString()} max="100">90%</progress>
      </div>
    )
  }


});


module.exports = DisplayStats;