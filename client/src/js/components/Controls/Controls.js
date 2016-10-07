// essentials
import React from 'react'

// components
import PlayPause from './PlayPause'
import Previous from './Previous'
import Next from './Next'
import Volume from './Volume'

const Controls = () => (
    <div className="controls">
        <div className="controls__top">
            <Previous />
            <PlayPause />
            <Next />
        </div>
        <div className="controls__bottom">
            <Volume />
        </div>
    </div>
)

export default Controls