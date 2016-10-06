import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

// icon
import MdLibraryMusic from 'react-icons/lib/md/library-music'

// actions
import togglePlaylistWindow from '../../actions/togglePlaylistWindow'

const TogglePlaylist = React.createClass({

    toggle() {
        store.dispatch(togglePlaylistWindow(true))
    },

    render() {
        return (
            <MdLibraryMusic 
                className='toggle-btn btn--playlist'
                onClick={this.toggle}
            />
        )
    }
})

const mapStateToProps = store => {
    return {
        show: store.playlistWindowVisible
    }
}

export default connect(mapStateToProps)(TogglePlaylist)