// essentials
import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

const Item = React.createClass({

    playItem() {
        this.props.socket.emit(
            'playTrack', 
            [this.props.name, this.props.currentPlaylist]
        )
    },

    render() {

        let cn

        if (this.props.name === this.props.current) {
            cn = `tracklist__item current`
        } else {
            cn = `tracklist__item`
        }

        return (
            <div className={cn} onClick={this.playItem} >
                <span>{this.props.name}</span>
                <span>{this.props.time}</span>
            </div>
        )
    }
})

const mapStateToProps = store => {
    return {
        current: store.currentTrack,
        currentPlaylist: store.currentPlaylist,
        socket: store.socket
    }
}

export default connect(mapStateToProps)(Item)