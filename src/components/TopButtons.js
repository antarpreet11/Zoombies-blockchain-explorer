import React from 'react'
import { ethers } from 'ethers'
import { useContractFunction } from '@usedapp/core'

const TopButtons = (props) => {
    // const cont = props.zbcontract;
    // const { state, send } = useContractFunction(cont, 'buyBoosterAndMintNFT');

    function calculateGasMargin(value) {
        return value.mul(120).div(100)
    }

    const mintnfthandler = () => {
        props.signedcontract.mintBoosterNFT(0);
    }

    const buynfthandler = () => {

    }

    const buyandminthandler = async () => {
        
        const gasEstimate = await props.signedcontract.estimateGas.buyBoosterAndMintNFT({
            value: ethers.utils.parseEther('0.01').toString(),
        })

        const res = await props.signedcontract.buyBoosterAndMintNFT({
            value: ethers.utils.parseEther('0.01').toString(),
            gasLimit: calculateGasMargin(gasEstimate)
        });

    }

    return (
        <div className="d-flex justify-content-between mb-3">
            <div>
                <button onClick={mintnfthandler}>Mint NFT</button>
            </div>
            <div>
                <button onClick={buynfthandler}>Buy NFT Credits</button>
                <button onClick={buyandminthandler}>Buy and Mint NFT</button>
            </div>
        </div>
    )
}

export default TopButtons