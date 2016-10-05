// essentials
import React from 'react'
import { connect } from 'react-redux'
import store from '../store'

// actions
import toggleTracklistWindow from '../actions/toggleTracklistWindow'
import togglePlaylistWindow from '../actions/togglePlaylistWindow'


const Overlay = React.createClass({

    getInitialState() {
        return {
            el: null
        }
    },

    componentDidMount() {
        const overlay = document.querySelector('.overlay')
        this.setState({ el: overlay })
    },


    toggle() {
        store.dispatch(togglePlaylistWindow(false))
        store.dispatch(toggleTracklistWindow(false))

        setTimeout(() => {
            this.state.el.style.display = 'none'
        }, 500)
    },

    render() {

        let cn

        if (this.props.pVisible || this.props.tVisible) {
            cn = `overlay visible`
            this.state.el.style.display = 'block'
        } else {
            cn = `overlay`
        }

        return (
            <div
                className={cn}
                onClick={this.toggle}
                >
            </div>
        )
    }
})

const mapStateToProps = store => {
    return {
        pVisible: store.playlistWindowVisible,
        tVisible: store.tracklistWindowVisible
    }
}

export default connect(mapStateToProps)(Overlay)