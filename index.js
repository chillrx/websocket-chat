var express = require('express');
var socket = require('socket.io');
var app = express();

var server = app.listen(3000, _ => console.log('Server on'));

app.use(express.static('public'));

socket(server).on('connection', function(socket) {

    console.log('Connected: ', socket.id);

    socket.on('chat', function(data) {

        console.log('message received: ', data.message);

        socket.emit('chat', data.message);

    });

});