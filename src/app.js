const React = require('react');
const ReactDOM = require('react-dom');

let App = React.createClass({
  render: function () {
    return (
      <div>
        <h1> It works!!!</h1>
      </div>
    )
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));

