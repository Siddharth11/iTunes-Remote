import React from 'react'
import { connect } from 'react-redux'

// icon
import MdLibraryMusic from 'react-icons/lib/md/library-music'

// actions
import togglePlaylistWindow from '../../actions/togglePlaylistWindow'

const toggle = (dispatch) => () => {
    dispatch(togglePlaylistWindow(true))
}

const TogglePlaylist = ({ dispatch }) => (
    <MdLibraryMusic
        className='toggle-btn btn--playlist'
        onClick={toggle(dispatch)}
        />
)

export default connect()(TogglePlaylist)