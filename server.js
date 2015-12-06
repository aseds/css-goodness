var http = require('http')
	reload = require('reload');
// path = require('path');

var app = require('./app.js');


// var routes = require('./routes/index');
// var users = require('./routes/users');
// app.use('/', routes);
// app.use('/users', users);

app.get('/', function(req, res) {
	// res.send('hi sami');
	// res.sendFile(path.join(__dirname+'/index.html'));
	res.render('index', {title: 'Express'}); // or ('index.jade')
});

var server = http.createServer(app);

reload(server, app, 450);

server.listen(3000, function() {
	console.log('Listening on port 3000');
});
