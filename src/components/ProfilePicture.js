const React = require('react');
//const x = require('../../public/img/avatar-1299805_1280.png')

var ProfilePicture = React.createClass({
  render: function () {
    return(
      <div className="avatar">
     <div className="avatarFrame">
       <img src='img/avatar-1299805_1280.png'/>
     </div>
    </div>

    )}

});


module.exports = ProfilePicture;
















/*var Hello = React.createClass({
  render: function() {
    return <div><img src={'http://placehold.it/400x20&text=slide1'} className="img-responsive"/><span>Hello {this.props.name}</span></div>;
  }
});

React.renderComponent(<Hello name="World" />, document.body);














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

module.exports = GetHandle;*/