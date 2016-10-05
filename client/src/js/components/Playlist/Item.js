// essentials
import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

const Item = React.createClass({

    playItem() {
        this.props.socket.emit('playPlaylist', this.props.name)
    },

    render() {

        let cn

        if (this.props.name === this.props.current) {
            cn = `playlist__item current`
        } else {
            cn = `playlist__item`
        }

        return (
            <div className={cn} onClick={this.playItem} >
                {this.props.name}
            </div>
        )
    }
})

const mapStateToProps = store => {
    return {
        current: store.currentPlaylist,
        socket: store.socket
    }
}

export default connect(mapStateToProps)(Item)