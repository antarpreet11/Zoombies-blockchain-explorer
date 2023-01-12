import React from 'react'
import { useToken, useLogs } from '@usedapp/core';
import { formatEther } from '@ethersproject/units'


const ContractsInfo = (props) => {
    const movrzoom = '0x8bd5180Ccdd7AE4aF832c8C03e21Ce8484A128d4'; 
    const movrzoombies = '0x08716e418e68564c96b68192e985762740728018';
    const moonzoom = '0x8e21404bAd3A1d2327cc6D2B2118f47911a1f316';
    const moonzoombies = '0x3E7997B8D30AA6216102fb2e9206246e478d57d3';
    let currzoom = '';
    let currzoombies = '';
    
    if(props.chID == '1285') {
        currzoom = movrzoom;
        currzoombies = movrzoombies;
    }
    else if(props.chID == '1287') {
        currzoom = moonzoom;
        currzoombies = moonzoombies;
    }

    const zoomLogs = useLogs({
        contract: currzoom,
        event: 'Transfer',
        args: [null],
    }, {
        chainId: props.chID,
        refresh: "everyBlock",
    });
    console.log(zoomLogs);

    const zoom = useToken(currzoom);
    // const zoombies = useToken(currzoombies);
    // console.log(`Zoombies is ${zoombies}`);

    return (
        (zoom) ? 
        <div>
            <div>Zoom Total Supply: {zoom.totalSupply !== undefined ? formatEther(zoom.totalSupply) : 'undefined'}</div>
        </div>
        : 
        <div>
            <div>No information available about Zoom</div>
        </div>
  )
}

export default ContractsInfo