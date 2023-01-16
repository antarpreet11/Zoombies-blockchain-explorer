import React, { useState } from 'react'

const LogCardMinted = (props) => {

    const [ cardList, setCardList ] = useState([]);
    const [ inp, setInp ] = useState("");
    
    props.contractzoombies.on("LogCardMinted", (owner, tokenId, cardTypeId, editionNumber, event) => {
        const t1 = {
            owner: owner,
            tokenId: tokenId.toString(),
            cardTypeId: cardTypeId,
            editionNumber: editionNumber.toString(),
            data: event,
            key: tokenId.toString(),
            id: event.transactionHash, 
            imgsrc: `https://zoombies.world/nft-image/${tokenId.toString()}`,
        }
        setCardList((prev) => {
            const newarr = [t1, ...prev];
            return newarr.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i);
        })
    })
    
    const sacrificeHandler = (e) => {
        const tempId = e.nativeEvent.path[3].id;
        props.contractzoombies.sacrificeNFTs([tempId.toString()]);
    }
    
    const inputHandler = (e) => {
        setInp(e.target.value);
    }
    
    const giftHandler = (e) => {
        const tempId = e.nativeEvent.path[4].id;
        // console.log(props.acc, inp, tempId.toString());
        props.contractzoombies.safeTransferFrom(props.acc, inp, tempId.toString());
        // console.log(props.contractzoombies);
    }

    return (
        <div>
            <div>Log Card Minted:</div>
            <ul className="list-group list-group-horizontal">
                {
                    cardList.map((item) => 
                    <li key={item.key} id={item.key} className="list-group-item border border-success" style={{width: "20%"}}>
                        <div className="d-flex flex-column">
                            <img src={item.imgsrc} width="100%"/>
                            <div>Token Id: {item.tokenId}, Edition Number: {item.editionNumber}</div>
                            {   item.owner == props.acc ? 
                                <div className="d-flex flex-column">
                                    <button onClick={sacrificeHandler}>Sacrifice</button>
                                    <div>
                                        <input type="text" onChange={inputHandler} style={{width: "65%"}}></input>
                                        <button onClick={giftHandler} style={{width: "35%"}}>Gift</button>
                                    </div>
                                </div>
                                :
                                <></>
                            }
                        </div>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default LogCardMinted