import { UPDATE_PLAYER_POSITION } from './action-types'

const updatePlaylerPosition = playerPosition => {
    return {
        type: UPDATE_PLAYER_POSITION,
        playerPosition
    }
}

export default updatePlaylerPosition