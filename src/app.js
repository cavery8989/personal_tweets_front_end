const React = require('react');
const ReactDOM = require('react-dom');
const GetHandle = require('./components/GetHandle');
const Provider = require('react-redux').Provider;
const redux = require('redux');
const thunk = require('redux-thunk').default;
const reducer = require('../redux/reducer/reducer');

const applyMiddleWare = redux.applyMiddleware;




var store = redux.createStore(
  reducer,
  applyMiddleWare(thunk));


let App = React.createClass({
    getInitialState: function () {
      return {
        componentToRender: 'getHandle'
      }
    },
    setComponentToRender: function () {
      let comp = this.state.componentToRender;
      switch (comp) {
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
  });

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('app')
);

