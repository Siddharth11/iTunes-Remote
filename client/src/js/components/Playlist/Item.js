// essentials
import React from 'react'
import { connect } from 'react-redux'

const playItem = (socket, name) => () => {
    socket.emit('playPlaylist', name)
}

const Item = ({socket, current, name}) => {
    let cn
    if (name.trim() === current.trim()) {
        cn = `playlist__item current`
    } else {
        cn = `playlist__item`
    }
    return (
        <div className={cn} onClick={ playItem(socket, name) } >
            <span>{name}</span>
        </div>
    )
}


const mapStateToProps = store => {
    return {
        current: store.currentPlaylist,
        socket: store.socket
    }
}

export default connect(mapStateToProps)(Item)