import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

// icon
import MdLibraryMusic from 'react-icons/lib/md/library-music'

// actions
import togglePlaylistWindow from '../../actions/togglePlaylistWindow'

const toggle = () => {
    store.dispatch(togglePlaylistWindow(true))
}

const TogglePlaylist = () => (
    <MdLibraryMusic
        className='toggle-btn btn--playlist'
        onClick={toggle}
        />
)

export default connect()(TogglePlaylist)