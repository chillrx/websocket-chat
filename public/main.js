var socket = io.connect('http://localhost:3000');

var data = document.getElementById('data'),
    sendButton = document.getElementById('sendButton'),
    response = document.getElementById('messages');

data.addEventListener('keydown', sendMessage);
sendButton.addEventListener('click', sendMessage);

function sendMessage(e) {
    if (e.keyCode && e.keyCode != 13) return;

    socket.emit('chat', {
        message: data.value
    });

    data.value = '';
}

socket.on('chat', function(data) {
    if (response.innerHTML !== '') response.innerHTML += '<br>';
    response.innerHTML += `Victor Machado: ${ data }`;
});