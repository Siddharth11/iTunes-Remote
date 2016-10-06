import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

// icon
import MdQueueMusic from 'react-icons/lib/md/queue-music'

// actions
import toggleTracklistWindow from '../../actions/toggleTracklistWindow'


const ToggleTracklist = React.createClass({
    
    toggle() {
        store.dispatch(toggleTracklistWindow(true))
    },

    render() {
        return (
            <MdQueueMusic 
                className='toggle-btn btn--tracklist'
                onClick={this.toggle}
            />
        )
    }
})

const mapStateToProps = store => {
    return {
        show: store.tracklistWindowVisible
    }
}

export default connect(mapStateToProps)(ToggleTracklist)