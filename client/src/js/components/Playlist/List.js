// essentials
import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

import Item from './Item'

const List = React.createClass({

    render() {

        const items = this.props.arr.map(i => {
            return (
                <Item 
                    key={i}
                    name={i}
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
        arr: store.playlists
    }
}

export default connect(mapStateToProps)(List)