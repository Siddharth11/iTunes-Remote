import { UPDATE_VOLUME } from './action-types'

const updateVolume = volume => {
    return {
        type: UPDATE_VOLUME,
        volume
    }
}

export default updateVolume