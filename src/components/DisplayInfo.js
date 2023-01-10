import React from 'react'
import { useEtherBalance , useBlockMeta , useToken} from '@usedapp/core';

const DisplayInfo = (props) => {
    const balance = useEtherBalance(props.acc);
    const info = useBlockMeta();
    // const tokeninfo = useToken(props.acc);
    return (
        <div>
            <div>Chain ID: {props.chID !== undefined ? props.chID.toString() : "undefined"}</div>
            <div>Currect Balance: {balance !== undefined ? balance.toString() : "undefined"} wei</div>
            <div>Current Block Number: {info.blockNumber !== undefined ? info.blockNumber.toString() : "undefined"}</div>
            <div>Last Time Stamp: {info.timestamp !== undefined ? info.timestamp.toString() : "undefined"}</div>
        </div>
    )
}

export default DisplayInfo