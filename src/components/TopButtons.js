import React from 'react'
import { ethers } from 'ethers' 

const TopButtons = (props) => {
    // const cont = props.zbcontract;
    // const { state, send } = useContractFunction(cont, 'buyBoosterAndMintNFT');

    function calculateGasMargin(value) {
        return value.mul(120).div(100)
    }

    const mintnfthandler = () => {
        props.signedcontract.mintBoosterNFT(0);
    }

    const buynfthandler = async () => {

        const totalCreditsToBuy = 1;

        var totalBoostersCost = ethers.utils
          .parseEther((0.01 * parseInt(totalCreditsToBuy)).toString())
          .toString();

        const gasEstimate = await props.signedcontract.estimateGas.buyBoosterCredits(
          parseInt(totalCreditsToBuy),
          {
            value: totalBoostersCost.toString(),
          }
        );

        const res = await props.signedcontract.buyBoosterCredits(
          parseInt(totalCreditsToBuy),
          {
            value: totalBoostersCost.toString(),
            gasLimit: calculateGasMargin(gasEstimate)
          }
        );
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