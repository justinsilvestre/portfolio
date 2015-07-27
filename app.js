var express = require('express'),
		app = express(),
		server = require('http').createServer(app),
		ejs = require('ejs'),
		OAuth = require('oauth'),
    moment = require('moment');

var environment = (process.env.NODE_ENV === 'production') ? process.env : require('./twitterstuff');


var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  environment.TWITTER_API_KEY,
  environment.TWITTER_CONSUMER_SECRET,
  '1.0',
  null,
  'HMAC-SHA1'
  );

app.renderResponse = function(filename) {
	return function(request, response) {

  	var twitterUrl = require('url').format({
      protocol: 'https:',
      host: 'api.twitter.com',
      pathname: '/1.1/statuses/user_timeline.json',
      query: { screen_name: 'justsilvestrein', count: 1 }
    });

    oauth.get(
      twitterUrl,
      environment.TWITTER_APP_TOKEN,
      environment.TWITTER_APP_SECRET,

      function (event, data, res){
        if (event) console.error(event);        
        console.log(data);
        var tweets = JSON.parse(data);
        var tweet = tweets[0];
        tweet.full_text = tweet.retweeted ? tweet.retweeted_status.text : tweet.text;

        var then = moment(tweet.created_at)
        tweet.tweet_info = moment(then).fromNow();

        response.render(filename, {tweet: tweet}); 
      }
    );
  };
};

app.get('/', app.renderResponse('index.ejs'));

app.get('/about', app.renderResponse('about.ejs'));

app.use(express.static('public'));

app.listen(process.env.PORT || 8080);