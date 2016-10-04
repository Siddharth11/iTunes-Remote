// essentials
import React from 'react'
import { connect } from 'react-redux'
import store from '../store'

const DisplayProgress = React.createClass({

    getInitialState() {
        return {
            start: 0,
            end: 100
        }
    },

    render() {

        const percent = (this.props.position) / (this.props.total)

        const len = (percent) ? `${percent * 100}%` : `0`

        return (
            <svg xmlns="http://www.w3.org/svg/2000"
                className='display__progress'>
                <line
                    x1={0}
                    x2={len}
                    y1='50%'
                    y2='50%'
                    />
            </svg>
        )
    }
})

const mapStateToProps = store => {
    return {
        position: Number(store.playerPosition[0]),
        total: Number(store.playerPosition[1])
    }
}

export default connect(mapStateToProps)(DisplayProgress)