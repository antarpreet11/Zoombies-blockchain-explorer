import React from 'react'
import { useEtherBalance , useBlockMeta } from '@usedapp/core';
import { formatEther } from '@ethersproject/units'

const DisplayInfo = (props) => {
    const balance = useEtherBalance(props.acc);
    const info = useBlockMeta();
    
    return (
        <div>
            <div>Chain ID: {props.chID !== undefined ? props.chID : "undefined"}</div>
            <div>Currect Balance: {balance !== undefined ? formatEther(balance) : "undefined"}</div>
            <div>Current Block Number: {info.blockNumber !== undefined ? info.blockNumber.toString() : "undefined"}</div>
            <div>Last Time Stamp: {info.timestamp !== undefined ? info.timestamp.toString() : "undefined"}</div>
        </div>
    )
}

export default DisplayInfo