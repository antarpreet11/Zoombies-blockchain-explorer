import React, { useState } from 'react'

const LogCardMinted = (props) => {

    const [ cardList, setCardList ] = useState([]);
    
    props.contractzoombies.on("LogCardMinted", (owner, tokenId, cardTypeId, editionNumber, event) => {
        const t1 = {
            owner: owner,
            tokenId: tokenId.toString(),
            cardTypeId: cardTypeId,
            editionNumber: editionNumber.toString(),
            data: event,
            key: event.transactionHash,
            id: event.transactionHash, 
            imgsrc: `https://zoombies.world/nft-image/${tokenId.toString()}`
        }
        setCardList((prev) => {
            const newarr = [t1, ...prev];
            return newarr.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i);
        })
    })
    
    return (
        <div>
            <div>Log Card Minted:</div>
            <ul class="list-group list-group-horizontal">
                {
                    cardList.map((item) => 
                    <li key={item.key} class="list-group-item border border-success" style={{width: "20%"}}>
                        <div class="d-flex flex-column">
                            <img src={item.imgsrc} width="100%"/>
                            Token Id: {item.tokenId}, Edition Number: {item.editionNumber}
                        </div>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default LogCardMinted