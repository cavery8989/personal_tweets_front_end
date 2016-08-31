const Twitter = require('twitter');
const config = require('../config');

var client = new Twitter(config.twitterConfig);

module.exports = {
  getTweets : getTweets

};

function getTweets (username, callback) {
  var params = {
    screen_name: username
  };

  client.get('statuses/user_timeline', params, function (err,tweet,  res) {

    if(err) {
      return console.log(err);
    }

    callback(null, tweet[0]);
    
  });



}