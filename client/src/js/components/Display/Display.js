// essentials
import React from 'react'

import DisplayTrack from './DisplayTrack'
import DisplayProgress from './DisplayProgress'
import TogglePlaylist from './TogglePlaylist'
import ToggleTracklist from './ToggleTracklist'

const Display = React.createClass({

    render() {
        return (
            <div className="display" >
                <TogglePlaylist />
                <ToggleTracklist />
                <DisplayTrack />
                <DisplayProgress />
            </div>
        )
    }
})

export default Display