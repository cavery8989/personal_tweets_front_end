const React = require('react');

const StatBar = React.createClass({
  render: function () {
    var width = this.props.value +'%' || '10%';

    var styles = {
      width: width,
      backgroundColor: 'blue',
      transition: "width 500ms",
      height: this.props.height || 12,

    };
    return (
      <div className='stat-bar-container'>
        <div className="stat-bar" style={styles}></div>
      </div>
    )
  }
});

module.exports = StatBar;