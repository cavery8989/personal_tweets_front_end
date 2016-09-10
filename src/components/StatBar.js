const React = require('react');

const StatBar = React.createClass({
  render: function () {
    var width = this.props.value +'%' || '10%';
    var colour = this.props.colour;


    var stylesBar = {
      width: width,
      backgroundColor: colour || 'blue',
      transition: "width 500ms",
      height: this.props.height || 12,
      borderRadius :15

    };

    var stylesCont = {
      width: '100%',
      background: '#d3d6db',
      borderRadius :15
    };

    return (
      <div className='stat-bar-container' style={stylesCont}>
        <div className="stat-bar" style={stylesBar}></div>
      </div>
    )
  }
});

module.exports = StatBar;