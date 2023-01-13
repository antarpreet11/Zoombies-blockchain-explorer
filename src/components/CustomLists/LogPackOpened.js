import React, { useState } from 'react'

const LogPackOpened = (props) => {

    const [ cardList, setCardList ] = useState([]);
    
    props.contractzoombies.on("LogPackOpened", (owner, rarity, event) => {
        const t1 = {
            owner: owner,
            rarity: rarity,
            data: event,
            key: event.transactionHash,
            id: event.transactionHash
        }
        setCardList((prev) => {
            const newarr = [t1, ...prev];
            return newarr.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i);
        })
    })
    
    return (
        <div>
            <div>Log Pack Opened:</div>
            <ul className="list-group">
                {
                    cardList.map((item) => 
                    <li key={item.key} className="list-group-item border border-danger">Rarity: {item.rarity}</li>)
                }
            </ul>
        </div>
    )
}

export default LogPackOpened