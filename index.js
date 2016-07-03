var scripts = require('./scripts'),
    execute = require('./execute'),
    express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {

    res.sendFile(__dirname + 'public/index.html');
});

io.on('connection', function(socket) {
    console.log('Connected');

    socket.on('change', function(command) {

        var task = scripts[command]

        execute(task)

        if (command === 'next' || command === 'previous') {
            socket.emit('track', execute(scripts.currentTrack))
        }
    })

    socket.on('volChange', val => {

        execute(scripts.vol(val))

        socket.broadcast.emit('globalVolChange', val)
    })

    setInterval(function() {
        socket.emit('track', execute(scripts.currentTrack))
    }, 500);

    socket.on('disconnect', function() {
        console.log('Disconnected ._.');
    });
});

http.listen((process.env.PORT || 5000), function() {
    console.log('listening on port 5000....');
});
