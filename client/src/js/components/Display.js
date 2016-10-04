// essentials
import React from 'react'
// import { connect } from 'react-redux'
// import store from '../store'
import DisplayTrack from './DisplayTrack'
import DisplayProgress from './DisplayProgress'

const Display = React.createClass({

    render() {
        return (
            <div className="display" >
                <DisplayTrack />
                <DisplayProgress />
            </div>
        )
    }
})

// const mapStateToProps = store => {
//     return {
//         socket: store.socket
//     }
// }

export default Display