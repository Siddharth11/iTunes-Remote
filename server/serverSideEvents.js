const c = require('./commands')
const osa = require('node-osascript')

module.exports = function (io) {

    io.on('connection', function (socket) {

        const obj = {
            playerState: '',
            volume: '',
            tracksData: '',
            playlists: '',
            currentTrack: '',
            currentPlaylist: '',
            playerPosition: ''
        }

        console.log('')
        console.log('######### Connected to a client #########')
        console.log('')

        const executeOnly = ['togglePlayerState', 'playNextTrack', 'playPreviousTrack']

        executeOnly.forEach(doThis => {
            socket.on(doThis, () => {
                console.log(`Execute: ${doThis}`)
                osa.execute(c[doThis], (err, result) => {
                    if (err) console.log(err)
                })
            })
        })

        socket.on('updateVolume', (value) => {
            osa.execute(c.setVolume(value), (err, result) => {
                if (err) console.log(err)
            })
        })

        const emitFunc = (doThis, key) => {
            osa.execute(c[doThis], (err, result) => {

                if (err) console.log(err)

                // emit only if the saved value is not equal to fetched value
                if (obj[key] !== result.toString()) {
                    socket.emit(doThis, result)
                    obj[key] = result.toString()
                }
            })
        }

        // continous polling
        setInterval(() => {

            // poll player state
            emitFunc('getPlayerState', 'playerState')

            // poll current track name
            emitFunc('getCurrentTrack', 'currentTrack')

            // poll current playlist name
            emitFunc('getCurrentPlaylist', 'currentPlaylist')

            // poll volume
            emitFunc('getVolume', 'volume')

            // poll all tracks info array
            emitFunc('getTracksData', 'tracksData')

            // poll playlists array
            emitFunc('getPlaylists', 'playlists')

            // poll player position
            emitFunc('updatePlayerPosition', 'playerPosition')

        }, 1000)



        socket.on('disconnect', function () {
            console.log('')
            console.log('######### Disconnected #########')
            console.log('')
        })

    })
}