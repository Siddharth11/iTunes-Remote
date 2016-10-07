// essentials
import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

import List from './List'

const Playlist = ({ show }) => (
    <div className={(show) ? `playlist visible` : `playlist`} >
        <List />
    </div>
)

const mapStateToProps = store => ({ show: store.playlistWindowVisible })

export default connect(mapStateToProps)(Playlist)