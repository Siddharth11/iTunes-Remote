// essentials
import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

import List from './List'

const Tracklist = React.createClass({

    render() {

        const cn = (this.props.show) ? `tracklist visible` : `tracklist`

        return (
            <div className={cn} >
                <List />
            </div>
        )
    }
})

const mapStateToProps = store => {
    return {
        show: store.tracklistWindowVisible
    }
}

export default connect(mapStateToProps)(Tracklist)