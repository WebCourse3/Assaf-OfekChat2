var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const port=3000;


app.use(express.static('public'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/css', express.static(__dirname + '/node_modules/animate.css')); // redirect CSS bootstrap

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket) {
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
	socket.on('chat message', function(msg, userName, ui){
		socket.broadcast.emit('chat message', msg, userName, ui);
	});
});
http.listen(port, function(){
	console.log(`listening on *:${port}`);
});

