var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/index.html')
});

app.use(express.static('public'))

app.listen(process.env.PORT || 8080);