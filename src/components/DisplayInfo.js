import React from 'react'
import { useEtherBalance } from '@usedapp/core';

const DisplayInfo = (props) => {
    const balance = useEtherBalance('0xFf369caa6296F24511800B78aEF73fA6Cd47A7F3');
    return (
        <div>Currect Balance: {balance !== undefined ? balance.toString() : "undefined"}</div>
    )
}

export default DisplayInfo