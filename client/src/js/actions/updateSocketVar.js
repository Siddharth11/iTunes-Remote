import { UPDATE_SOCKET_VAR } from './action-types'

const updateSocketVar = socket => {
    return {
        type: UPDATE_SOCKET_VAR,
        socket
    }
}

export default updateSocketVar