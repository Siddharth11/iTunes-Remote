import { UPDATE_TRACKS_DATA } from './action-types'

const updateTracksData = tracksData => {
    return {
        type: UPDATE_TRACKS_DATA,
        tracksData
    }
}

export default updateTracksData