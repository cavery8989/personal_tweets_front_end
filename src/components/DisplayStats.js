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


  render: function () {

    var openess = this.props.profile? this.props.profile.profile[0].percentage : 0;
    var Conscientiousness = this.props.profile? this.props.profile.profile[1].percentage : 0;
    var Extraversion = this.props.profile? this.props.profile.profile[2].percentage : 0;
    var Agreeableness = this.props.profile? this.props.profile.profile[3].percentage : 0;
    var EmotionalRange = this.props.profile? this.props.profile.profile[4].percentage : 0;

    return (
      <div className="stats-bars" >
        <h1>Openness</h1>
        <StatsBar className="stat-bar" value={openess} colour={'blue'}/>
        <h1>Conscientiousness</h1>
        <StatsBar value={Conscientiousness} colour={'green'}/>
        <h1>Extraversion</h1>
        <StatsBar value={Extraversion} colour={'violet'}/>
        <h1>Agreeableness</h1>
        <StatsBar value={Agreeableness} colour={'pink'}/>
        <h1>EmotionalRange</h1>
        <StatsBar value={EmotionalRange} colour={'orange'}/>

      </div>
    )
  }


});


module.exports = DisplayStats;