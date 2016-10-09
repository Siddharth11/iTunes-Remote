// essentials
import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

const DisplayProgress = ({position, total}) => {
    const percent = position / total
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

const mapStateToProps = store => ({
    position: Number(store.playerPosition[0]),
    total: Number(store.playerPosition[1])
})


export default connect(mapStateToProps)(DisplayProgress)