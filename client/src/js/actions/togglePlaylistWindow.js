import { TOGGLE_PLAYLIST_WINDOW } from './action-types'

const togglePlaylistWindow = value => {
    return {
        type: TOGGLE_PLAYLIST_WINDOW,
        playlistWindowVisible: value
    }
}

export default togglePlaylistWindow