// essentials
import React from 'react'
import { connect } from 'react-redux'

// icon component
import MdSkipPrevious from 'react-icons/lib/md/skip-previous'

const playPrevious = socket => () => {
    socket.emit('playPreviousTrack')
    console.log('Playing previous track')
}

const Previous = ({ socket }) => (
    <div className="icon-wrapper" onClick={playPrevious(socket) }>
        <MdSkipPrevious />
    </div>
)

const mapStateToProps = store => ({ socket: store.socket })

export default connect(mapStateToProps)(Previous)