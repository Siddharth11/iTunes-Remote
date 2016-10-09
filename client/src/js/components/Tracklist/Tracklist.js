// essentials
import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

import List from './List'

const Tracklist = ({show}) => (
    <div className={(show) ? `sidebar tracklist visible` : `sidebar tracklist`} >
        <List />
    </div>
)

const mapStateToProps = store => ({ show: store.tracklistWindowVisible })

export default connect(mapStateToProps)(Tracklist)