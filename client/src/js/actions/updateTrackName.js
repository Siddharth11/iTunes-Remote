import { UPDATE_TRACK_NAME } from './action-types'

const updateTrackName = currentTrack => {
    return {
        type: UPDATE_TRACK_NAME,
        currentTrack
    }
}

export default updateTrackName