import React from 'react'
import { connect } from 'react-redux'

// icon
import MdQueueMusic from 'react-icons/lib/md/queue-music'

// actions
import toggleTracklistWindow from '../../actions/toggleTracklistWindow'

const toggle = (dispatch) => () => {
    dispatch(toggleTracklistWindow(true))
}

const ToggleTracklist = ({ dispatch }) => (
    <MdQueueMusic
        className= 'toggle-btn btn--tracklist'
        onClick={toggle(dispatch)}
        />
)

export default connect()(ToggleTracklist)