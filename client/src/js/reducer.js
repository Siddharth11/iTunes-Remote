import initialState from './initialState'
import * as types from './actions/action-types'

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case types.UPDATE_SOCKET_VAR:
            return Object.assign({}, state, {
                socket: action.socket
            })
        case types.UPDATE_TRACK_NAME:
            return Object.assign({}, state, {
                currentTrack: action.currentTrack
            })
        case types.UPDATE_PLAYLIST_NAME:
            return Object.assign({}, state, {
                currentPlaylist: action.currentPlaylist
            })
        case types.UPDATE_PLAYER_POSITION:
            return Object.assign({}, state, {
                playerPosition: action.playerPosition
            })
        case types.UPDATE_VOLUME:
            return Object.assign({}, state, {
                volume: action.volume
            })
        case types.UPDATE_TRACKS_DATA:
            return Object.assign({}, state, {
                tracksData: action.tracksData
            })
        case types.UPDATE_PLAYER_STATE:
            return Object.assign({}, state, {
                playerState: action.playerState
            })
        case types.UPDATE_PLAYLISTS:
            return Object.assign({}, state, {
                playlists: action.playlists
            })
        case types.TOGGLE_PLAYLIST_WINDOW:
            return Object.assign({}, state, {
                playlistWindowVisible: action.playlistWindowVisible
            })
        case types.TOGGLE_TRACKLIST_WINDOW:
            return Object.assign({}, state, {
                tracklistWindowVisible: action.tracklistWindowVisible
            })
        default:
            return state
    }
}

export default reducer
