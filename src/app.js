const React = require('react');
const ReactDOM = require('react-dom');
const GetHandle = require('./components/GetHandle');

let App = React.createClass({
    getInitialState: function () {
      return {
        componentToRender: 'getHandle'
    }
    },
    setComponentToRender: function () {
        let comp = this.state.componentToRender;
        switch(comp){
          case 'getHandle':
            return <GetHandle/>
        }
    },
    render: function () {
      var comp = this.setComponentToRender();
      return (
        <div className="main-page">

          {comp}

        </div>
      )
    }
  })
  ;

ReactDOM.render(<App/>, document.getElementById('app'));

