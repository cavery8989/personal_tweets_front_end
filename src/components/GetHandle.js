const React = require('react');
const axios = require('axios');

const GetHandle = React.createClass({

  handleSubmit : function (e) {

  },

  render: function () {
    axios.get('http://localhost:4000/api/dummy')
      .then(function (data){
        console.log('data!!!',data)
      });
    return (
      <div className="GetHandle">


        <h1> Enter your Twitter handle for a personality analysis of your tweets.</h1>

        <h1>Progress bar</h1>


        <form onSubmit={this.handleSubmit}>
          <input type="text"/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
});

module.exports = GetHandle;