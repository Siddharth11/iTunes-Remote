// essentials
import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

import Item from './Item'

const items = arr => (
    arr.map(i => <Item key={i} name={i} />)
)

const List = ({ arr }) => (
    <div className='list'>
        { items(arr) }
    </div>
)

const mapStateToProps = store => ({ arr: store.playlists })

export default connect(mapStateToProps)(List)