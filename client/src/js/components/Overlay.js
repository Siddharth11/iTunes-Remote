// essentials
import React from 'react'
import { connect } from 'react-redux'

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
        this.props.dispatch(togglePlaylistWindow(false))
        this.props.dispatch(toggleTracklistWindow(false))

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

const mapStateToProps = store => ({
    pVisible: store.playlistWindowVisible,
    tVisible: store.tracklistWindowVisible
})

export default connect(mapStateToProps)(Overlay)