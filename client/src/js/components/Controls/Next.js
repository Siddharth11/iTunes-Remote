// essentials
import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

// icon component
import MdSkipNext from 'react-icons/lib/md/skip-next'

const playNext = socket => () => {
    socket.emit('playNextTrack')
    console.log('Playing next track')
}

const Next = ({socket}) => (
    <div className="icon-wrapper" onClick={ playNext(socket) }>
        <MdSkipNext />
    </div>
)

const mapStateToProps = store => ({ socket: store.socket })

export default connect(mapStateToProps)(Next)