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
                osa.execute(c[doThis], (err, result) => {
                    if (err) console.log(err)
                })
            })
        })

        socket.on('updateVolume', value => {
            osa.execute(c.setVolume(value), (err, result) => {
                if (err) console.log(err)
            })
        })

        socket.on('playPlaylist', value => {
            osa.execute(c.playPlaylist(value), (err, result) => {
                if (err) console.log(err)
            })
        })

        socket.on('playTrack', arr => {
            osa.execute(c.playTrack(arr), (err, result) => {
                if (err) console.log(err)
            })
        })

        const emitFunc = (doThis, key) => {
            osa.execute(c[doThis], (err, result) => {

                if (err) {
                    console.log(err)
                    console.log(obj)
                }

                // emit only if the saved value is not equal to fetched value
                if (obj[key] !== result.toString().trim()) {
                    socket.emit(doThis, result)
                    obj[key] = result.toString().trim()
                }
            })
        }

        // continous polling
        setInterval(() => {

            osa.execute(c.checkAppRunning, (err, appRunning) => {

                if (err) {
                    console.log(err)
                    console.log(obj)
                }

                if (appRunning) {

                    // poll volume
                    emitFunc('getVolume', 'volume')

                    // poll playlists array
                    emitFunc('getPlaylists', 'playlists')

                    // don't emit these events if playerState is stopped
                    osa.execute(c.getPlayerState, (err, state) => {
                        if (err) {
                            console.log(err)
                            console.log(obj)
                        }

                        if (state.trim() !== 'stopped') {

                            emitFunc('getPlayerState', 'playerState')

                            // poll current track name
                            emitFunc('getCurrentTrack', 'currentTrack')

                            // poll current playlist name
                            emitFunc('getCurrentPlaylist', 'currentPlaylist')

                            // poll all tracks info array
                            emitFunc('getTracksData', 'tracksData')

                            // poll player position
                            emitFunc('updatePlayerPosition', 'playerPosition')

                        }
                    })
                }

            })

        }, 1000)


        socket.on('disconnect', function () {
            console.log('')
            console.log('######### Disconnected #########')
            console.log('')
        })

    })
}