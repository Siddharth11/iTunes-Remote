// essentials
import React from 'react'
import { connect } from 'react-redux'
import store from '../store'

// icon component
import MdSkipNext from 'react-icons/lib/md/skip-next'

const Next = React.createClass({
    
    playNext() {

        this.props.socket.emit('playNextTrack')

        console.log('Playing next track')

    },

    render() {
        return (
            <div className="icon-wrapper" onClick={this.playNext}>
                <MdSkipNext />
            </div>
        )
    }
})

const mapStateToProps = store => {
    return {
        socket: store.socket
    }
}

export default connect(mapStateToProps)(Next)