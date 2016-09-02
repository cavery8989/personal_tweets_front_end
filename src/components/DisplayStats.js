// duplicate of GetHandle, displayStats isn't being required anywhere


const React = require('react');

const DisplayStats = React.createClass({

  render: function () {
    return (
      <div>
        <h1> Openness</h1>
        <progress class="progress is-primary" value="5" max="100">30%</progress>
        <h1> Conscientiousness</h1>
        <progress class="progress is-info" value="5" max="100">45%</progress>
        <h1> Extraversion</h1>
        <progress class="progress is-success" value="5" max="100">60%</progress>
        <h1> Agreeableness</h1>
        <progress class="progress is-warning" value="5" max="100">75%</progress>
        <h1> Emotional Range</h1>
        <progress class="progress is-danger" value="5" max="100">90%</progress>
      </div>
    )
  }


})


module.exports = DisplayStats;