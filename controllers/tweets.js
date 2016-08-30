const Twit = require('twit');

module.exports = {
  getTweets : getTweets

};

function getTweets (username, callback) {
  var data = 'getting tweets for ' + username;
  callback(null, data);
}