import React, { useState } from 'react'

const LogDailyReward = (props) => {

    const [ cardList, setCardList ] = useState([]);
    
    props.contractzoombies.on("LogDailyReward", (owner, amountOfCreditsRemaining, event) => {
        const t1 = {
            owner: owner,
            amount: amountOfCreditsRemaining.toString(),
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
            <div>Log Daily Reward:</div>
            <ul class="list-group">
                {
                    cardList.map((item) => 
                    <li key={item.key} class="list-group-item border border-warning">Credits Remaining: {item.amount}</li>)
                }
            </ul>
        </div>
    )
}

export default LogDailyReward