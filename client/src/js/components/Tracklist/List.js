// essentials
import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

import Item from './Item'

const items = arr => (
    arr[0].map((item, index) => (
        <Item
            key={item}
            name={item}
            time={arr[1][index]}
            />
    ))
)

const List = ({arr}) => (
    <div className='list'>
        {items(arr) }
    </div>
)

const mapStateToProps = store => ({ arr: store.tracksData })

export default connect(mapStateToProps)(List)