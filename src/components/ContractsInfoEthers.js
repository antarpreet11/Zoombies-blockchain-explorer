import { ethers, utils } from 'ethers'
import React from 'react'
import ZoomAbi from '../abis/ZoomToken.json'
import ZoombiesAbi from '../abis/Zoombies.json'
import { formatEther } from '@ethersproject/units'
import { useState } from 'react';
import TransList from './TransList.js'
import CustomLists from './CustomLists.js'
import { Contract } from '@ethersproject/contracts'
import TopButtons from './TopButtons.js'

const ContractsInfoEthers = (props) => {

    const [zsup, setZsup] = useState('');
    const [zbsup, setZbsup] = useState('');
    
    let provider = '';
    
    const movrzoom = '0x8bd5180Ccdd7AE4aF832c8C03e21Ce8484A128d4'; 
    const movrzoombies = '0x08716e418e68564c96b68192e985762740728018';
    const moonzoom = '0x8e21404bAd3A1d2327cc6D2B2118f47911a1f316';
    const moonzoombies = '0x3E7997B8D30AA6216102fb2e9206246e478d57d3';
    let currzoom = '';
    let currzoombies = '';
    
    if(props.chID == '1285') {
        currzoom = movrzoom;
        currzoombies = movrzoombies;
        // provider = new ethers.providers.JsonRpcBatchProvider('https://rpc.api.moonriver.moonbeam.network/');
        provider = new ethers.providers.Web3Provider(window.ethereum);
    }
    else if(props.chID == '1287') {
        currzoom = moonzoom;
        currzoombies = moonzoombies;
        // provider = new ethers.providers.JsonRpcBatchProvider('https://rpc.api.moonbase.moonbeam.network/');
        provider = new ethers.providers.Web3Provider(window.ethereum);
    }
    
    let ztotalSupply = undefined;
    let zbtotalSupply = undefined;

    //Ethers contracts for read only
    const contractzoom = new ethers.Contract(currzoom, ZoomAbi.abi, provider);
    const signer = provider.getSigner(props.acc);
    const contractzoombies = new ethers.Contract(currzoombies, ZoombiesAbi.abi, signer);

    //useDApp contracts for write
    const zbinterface = new utils.Interface(ZoombiesAbi.abi);
    const zbcontract = new Contract(currzoombies, zbinterface);
    
    async function getTotalSupplyz() {
        ztotalSupply = await contractzoom.totalSupply();
        setZsup(formatEther(ztotalSupply));     
    }
    getTotalSupplyz();
    
    async function getTotalSupplyzb() {
        zbtotalSupply = await contractzoombies.totalSupply();  
        setZbsup(zbtotalSupply.toString());
    }
    getTotalSupplyzb();

    return (
        <div>
            <TopButtons zbcontract={zbcontract} signedcontract={contractzoombies} acc={props.acc}></TopButtons>
            <div>Zoom Ethers Total Supply: {zsup}</div>
            <div>Zoombies Ethers Total Supply: {zbsup}</div>
            <TransList contractzoom={contractzoom} contractzoombies={contractzoombies} zsupply={getTotalSupplyz} zbsupply={getTotalSupplyzb} chID={props.chID}></TransList>
            <CustomLists contractzoombies={contractzoombies} acc={props.acc}></CustomLists>
        </div>
    )
}

export default ContractsInfoEthers