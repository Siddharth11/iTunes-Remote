// essentials
import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

const DisplayTrack = React.createClass({

    render() {
        return (
            <div className="display__track" >
                {this.props.currentTrack}
            </div>
        )
    }
})

const mapStateToProps = store => {
    return {
        currentTrack: store.currentTrack
    }
}

export default connect(mapStateToProps)(DisplayTrack)