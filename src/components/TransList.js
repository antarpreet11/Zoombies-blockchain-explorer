import React from 'react'
import { ethers } from 'ethers'
import { formatEther } from '@ethersproject/units'
import { useState } from 'react'
import DispTransList from './DispTransList.js'

const TransList = (props) => {

    const [ztransactions, setZtransactions] = useState([]);
    const [zbtransactions, setZbtransactions] = useState([]);

    props.contractzoom.on("Transfer", async function(from, to, amount, event) {
        const t1 = {
            from: from, 
            to: to, 
            amount: formatEther(amount),
            id: event.transactionHash, 
            key: event.transactionHash,
            data: event
        };
        setZtransactions((prev) => {
            const newarr = [t1, ...prev];
            return newarr.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i);
        })
        props.zsupply();
        props.zbsupply();
    });

    props.contractzoombies.once("Transfer", (from, to, amount, event) => {
        const t1 = {
            from: from, 
            to: to, 
            amount: formatEther(amount),
            id: event.transactionHash, 
            key: event.transactionHash,
            data: event
        };
        setZbtransactions((prev) => {
            const newarr = [t1, ...prev];
            return newarr.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i);
        })
        props.zsupply();
        props.zbsupply();
    });
        
    return (
        <DispTransList zlist={ztransactions} zblist={zbtransactions}></DispTransList>
    )
}

export default TransList