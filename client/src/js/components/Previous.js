// essentials
import React from 'react'
import { connect } from 'react-redux'
import store from '../store'

// icon component
import MdSkipPrevious from 'react-icons/lib/md/skip-previous'

const Previous = React.createClass({

    playPrevious() {

        this.props.socket.emit('playPreviousTrack')

        console.log('Playing previous track')

    },

    render() {
        return (
            <div className="icon-wrapper" onClick={this.playPrevious}>
                <MdSkipPrevious />
            </div>
        )
    }
})

const mapStateToProps = store => {
    return {
        socket: store.socket
    }
}

export default connect(mapStateToProps)(Previous)