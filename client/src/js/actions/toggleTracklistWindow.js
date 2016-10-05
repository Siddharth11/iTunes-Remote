import { TOGGLE_TRACKLIST_WINDOW } from './action-types'

const toggleTracklistWindow = value => {
    return {
        type: TOGGLE_TRACKLIST_WINDOW,
        tracklistWindowVisible: value
    }
}

export default toggleTracklistWindow