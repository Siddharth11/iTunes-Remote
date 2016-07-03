'use strict';

var socket = io();

document.body.addEventListener('click', function(e) {

    if(e.target.tagName === 'IMG') {

        console.log(e.target.parentNode.dataset.command)

        var command = e.target.parentNode.dataset.command

        socket.emit('change', command)
    }

})

var slider = document.getElementById('volume')

slider.addEventListener('change', function(e) {

    console.log(slider.value)

    socket.emit('volChange', slider.value)

})

socket.on('globalVolChange', function(val) {

    if (slider.value !== val) {
        slider.value = val
    }

})

var trackName = document.querySelector('.track'),
    temp = trackName.innerText

socket.on('track', function(data) {

    if (data.track !== temp) {
        trackName.innerText = data
    }

})