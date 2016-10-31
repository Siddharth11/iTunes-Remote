// essentials
import React from 'react'
import { connect } from 'react-redux'

import List from './List'

const Playlist = ({ show }) => (
    <div className={(show) ? `sidebar playlist visible` : `sidebar playlist`} >
        <List />
    </div>
)

const mapStateToProps = store => ({ show: store.playlistWindowVisible })

export default connect(mapStateToProps)(Playlist)