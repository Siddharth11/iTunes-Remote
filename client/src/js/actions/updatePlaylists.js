import { UPDATE_PLAYLISTS } from './action-types'

const updatePlaylists = playlists => {
    return {
        type: UPDATE_PLAYLISTS,
        playlists
    }
}

export default updatePlaylists