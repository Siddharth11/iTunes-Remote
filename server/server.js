const ip = require('internal-ip')
const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static(__dirname + '/../client/dist'))

console.log(__dirname)

app.get('/', function (req, res) {

    res.sendFile(__dirname + '/../client/dist/index.html')
})

const serverSideEvents = require('./serverSideEvents')(io)

http.listen(5000, function () {
    console.log('listening on: http://' + ip.v4() + ':5000')
})
