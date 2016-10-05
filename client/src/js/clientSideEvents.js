// essentials
import store from './store'

// actions
import updateSocketVar from './actions/updateSocketVar'
import updatePlayerState from './actions/updatePlayerState'
import updateVolume from './actions/updateVolume'
import updateTracksData from './actions/updateTracksData'
import updateTrackName from './actions/updateTrackName'
import updatePlaylistName from './actions/updatePlaylistName'
import updatePlaylists from './actions/updatePlaylists'
import updatePlaylerPosition from './actions/updatePlayerPosition'

const clientSideEvents = () => {

    const socket = io()

    socket.on('connect', () => {

        console.log(`Yuhooo! We're now connected to server`)

        // update socket var in store to make it 
        // available for all components
        store.dispatch(updateSocketVar(socket))

        // get playerState
        socket.on('getPlayerState', state => {

            console.log(`Current state: ${state}`)
            // update playerState in store
            store.dispatch(updatePlayerState(state.trim()))
        })

        // get volume
        socket.on('getVolume', vol => {

            console.log(`Volume: ${vol}`)

            // update volume in store
            store.dispatch(updateVolume(vol))
        })

        // get tracks array
        socket.on('getTracksData', data => {
            
            // update data in store
            store.dispatch(updateTracksData(data))
        })

        // get playlists array
        socket.on('getPlaylists', data => {

            console.log(data)

            // update data in store
            store.dispatch(updatePlaylists(data.slice(15)))
        })

        // get current track name
        socket.on('getCurrentTrack', name => {

            console.log(`Current track: ${name}`)

            // update data in store
            store.dispatch(updateTrackName(name.trim()))
        })

        // get current playlist name
        socket.on('getCurrentPlaylist', name => {

            console.log(`Current playlist: ${name}`)

            // update data in store
            store.dispatch(updatePlaylistName(name.trim()))
        })

        socket.on('updatePlayerPosition', position => {

            store.dispatch(updatePlaylerPosition(position))
        })

    })

}

export default clientSideEvents