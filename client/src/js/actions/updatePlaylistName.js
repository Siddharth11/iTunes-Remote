import { UPDATE_PLAYLIST_NAME } from './action-types'

const updatePlaylistName = currentPlaylist => {
    return {
        type: UPDATE_PLAYLIST_NAME,
        currentPlaylist
    }
}

export default updatePlaylistName