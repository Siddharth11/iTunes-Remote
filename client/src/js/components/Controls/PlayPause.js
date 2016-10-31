// essentials
import React from 'react'
import { connect } from 'react-redux'

// components
import Play from './Play'
import Pause from './Pause'

// actions
import updatePlayerState from '../../actions/updatePlayerState'

const toggle = (socket, state, dispatch) => () => {

    const changeStateTo = (state === 'playing') ? 'paused' : 'playing'

    // dispatch to update playerState in store
    dispatch(updatePlayerState(changeStateTo))

    // emit an event to server to run applescript
    socket.emit('togglePlayerState')

    console.log('Player state changed to: ', changeStateTo)
}

const PlayPause = ({ socket, state, dispatch }) => {

    // if playing then show button to pause
    // and vice a versa
    const icon = ((state === 'playing') ? <Pause key='pause' /> : <Play key='play' />)

    return (
        <div className="icon-wrapper" onClick={toggle(socket, state, dispatch) }>
            {icon}
        </div>
    )
}

const mapStateToProps = store => ({
    state: store.playerState,
    socket: store.socket
})

export default connect(mapStateToProps)(PlayPause)