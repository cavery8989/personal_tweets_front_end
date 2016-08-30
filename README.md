# Emotional Tweets

## Goals

1. Create a RESTful API that mimics the API of the [personify.js](http://personifyjs.github.io/)
library.
2. Become comfortable using 3rd party APIs (such as [Twitter's](https://dev.twitter.com/rest/public) 
and [IBM Watson's](https://developer.ibm.com/watson/)).
3. Continue to work with the [Async library](https://caolan.github.io/async/)
4. Gain a better understanding of async in general as it relates to programming
in JS.
5. Continue to use [underscore](www.underscorejs.org) to manipulate the data
you receive back from 3rd party APIs
6. Understand that servers can communicate with other servers too - doesn't
have to be client/server.

## Instructions

1. Sign up to both Twitter's and IBM Watson's APIs
2. Make a toy app that uses the personify.js library so that you can
understand how it works
2. Read carefully about how Twitter and IBM Watson authenticate the requests 
that you make
3. Make authenticated requests, using Postman, to each of the APIs
4. Read up on how, once you've successfully made a request via Postman, 
you can get hold of JS code that makes those requests for you (for use in
your own code)
5. Build out your API, thinking carefully about how you might make your
endpoints RESTful

## Bonus Points

Bonus points if you cache the results in a MongoDB database (i.e. if an
identical request to your API has already been made, retrieve the results
from a MongoDB database)

## Tips

The second sprint this week will involve creating a client for your API
(using React etc) so when looking at the data that comes back from the APIs,
think carefully about what you might want to keep to make things interesting
on the front end.
