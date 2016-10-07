// essentials
import React from 'react'

import DisplayTrack from './DisplayTrack'
import DisplayProgress from './DisplayProgress'
import TogglePlaylist from './TogglePlaylist'
import ToggleTracklist from './ToggleTracklist'
import Visual from './Visual'

const Display = () => (
    <div className="display" >
        <Visual />
        <TogglePlaylist />
        <ToggleTracklist />
        <DisplayTrack />
        <DisplayProgress />
    </div>
)

export default Display