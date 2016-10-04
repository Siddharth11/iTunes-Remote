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

    // getDefaultProps() {
    //     return {
    //         position: 0,
    //         total: 100
    //     }
    // },

    componentWillReceiveProps(nextProps) {
        


    },
    

    render() {

        // console.log(this.props)

        const per = (this.props.position) / (this.props.total)

        const len = (per) ? `${per * 100}%` : `0` 

        // const(per, len)

        return (
            <svg xmlns="http://www.w3.org/svg/2000"
					
					width="100%"
					height="4px"
				>
            <line
                x1={0}
                x2={len}
                y1="50%"
                y2="50%"
                stroke="#000"
                strokeWidth="2px"
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