var express = require('express');
var router = express.Router();
const tweetController = require('../controllers/tweets');




router.get('/personify/:username', function(req, res){
  tweetController.getTweets(req.params.username, function(err, data){
    if (err){
      // handle error.
    }
    res.json(200, data);
  })
});


module.exports = router;