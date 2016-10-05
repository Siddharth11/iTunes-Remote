// essentials
import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

import List from './List'

const Playlist = React.createClass({

    render() {

        const cn = (this.props.show) ? `playlist visible` : `playlist`

        return (
            <div className={cn} >
                <List />
            </div>
        )
    }
})

const mapStateToProps = store => {
    return {
        show: store.playlistWindowVisible
    }
}

export default connect(mapStateToProps)(Playlist)