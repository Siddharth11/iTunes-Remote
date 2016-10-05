// essentials
import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

import Item from './Item'

const List = React.createClass({

    render() {

        const items = this.props.arr[0].map((item, index) => {
            return (
                <Item 
                    key={item}
                    name={item}
                    time={this.props.arr[1][index]}
                />
            )
        })

        return (
            <div className='list'>
                {items}
            </div>
        )
    }
})

const mapStateToProps = store => {
    return {
        arr: store.tracksData
    }
}

export default connect(mapStateToProps)(List)