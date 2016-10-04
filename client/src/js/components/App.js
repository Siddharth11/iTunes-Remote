// essentials
import React from 'react'

// components
import Controls from './Controls'
import Display from './Display'

const App = React.createClass({
    render() {
        return (
            <div className="app" >
                <Display />
                <Controls />
            </div>
        )
    }
})

export default App