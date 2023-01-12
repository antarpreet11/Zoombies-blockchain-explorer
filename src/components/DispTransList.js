import React from 'react'
import { useEffect , useState } from 'react'

const DispTransList = (props) => {

    return (
        <ul>
        {props.zlist.map((item) => {
            <li>{item.key}</li>
        })}
        </ul>
    )
}

export default DispTransList