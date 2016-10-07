// essentials
import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

const DisplayTrack = ({ currentTrack }) => (
    <div className="display__track" >
        { currentTrack }
    </div>
)

const mapStateToProps = store => ({ currentTrack: store.currentTrack })

export default connect(mapStateToProps)(DisplayTrack)