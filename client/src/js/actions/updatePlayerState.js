import { UPDATE_PLAYER_STATE } from './action-types'

const updatePlayerState = playerState => {
    return {
        type: UPDATE_PLAYER_STATE,
        playerState
    }
}

export default updatePlayerState