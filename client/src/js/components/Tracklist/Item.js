// essentials
import React from 'react'
import { connect } from 'react-redux'

const playItem = (socket, name, playlist) => () => {
    socket.emit('playTrack', [name, playlist])
}

const Item = ({socket, ct, cp, name, time}) => {
    let cn

    if (name.trim() === ct.trim()) {
        cn = `tracklist__item current`
    } else {
        cn = `tracklist__item`
    }
    return (
        <div className={cn} onClick={ playItem(socket, name, cp) } >
            <span>{name}</span>
            <span>{time}</span>
        </div>
    )
}

const mapStateToProps = store => ({
    ct: store.currentTrack,
    cp: store.currentPlaylist,
    socket: store.socket
})

export default connect(mapStateToProps)(Item)