// essentials
import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

import debounce from '../../debounce'

const Volume = React.createClass({

    getInitialState() {
        return {
            val: 100
        }
    },

    componentWillReceiveProps(nextProps) {
        this.setState({
            val: nextProps.volume
        })
    },
    
    emitVolume() {
        this.props.socket.emit('updateVolume', this.state.val)
    },

    updateVolume(event) {

        this.setState({ val: event.target.value })

        debounce(this.emitVolume, 500)()

    },

    render() {
        return (
            <input
                type='range'
                min={0}
                max={100}
                value={this.state.val}
                onChange={this.updateVolume} />
        )
    }
})

const mapStateToProps = store => {
    return {
        socket: store.socket,
        volume: store.volume
    }
}

export default connect(mapStateToProps)(Volume)