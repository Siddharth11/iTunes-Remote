// essentials
import React from 'react'

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

export default Display