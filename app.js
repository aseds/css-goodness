var express = require('express'),
	stylus = require('stylus'),
	nib = require('nib'),
//	autoprefixer = require('autoprefixer'),
	path = require('path'),
	favicon = require('serve-favicon'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser');

var app = express();

function compile(str, path) {
	return stylus(str) 
//		.use(autoprefixer())
		.set('filename', path)
		// .set('compress', true)
		.use(nib())
		.import('nib')
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(stylus.middleware({
	src: path.join(__dirname, 'public'),
	compile: compile
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;