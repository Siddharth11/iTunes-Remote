import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

// icon
import MdQueueMusic from 'react-icons/lib/md/queue-music'

// actions
import toggleTracklistWindow from '../../actions/toggleTracklistWindow'

const toggle = () => {
    store.dispatch(toggleTracklistWindow(true))
}

const ToggleTracklist = () => (
    <MdQueueMusic
        className= 'toggle-btn btn--tracklist'
        onClick= {toggle}
        />
)

export default connect()(ToggleTracklist)