import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEthers } from '@usedapp/core';
import DisplayInfo from './components/DisplayInfo';
import ContractsInfo from './components/ContractsInfo';
import ContractsInfoEthers from './components/ContractsInfoEthers';

function App() {
  const { activateBrowserWallet, account , chainId, deactivate} = useEthers();
  const isConnected = account !== undefined;
  console.log("App called");
  return (
      <div class="d-flex justify-content-center mt-5">
        {isConnected ? 
          <div class="justify-content-center">
            <button onClick={deactivate} type="button" class="btn btn-success btn-lg mb-2">Connected!</button>
            {account && <p>Account: {account}</p>}
            <DisplayInfo acc={account} chID={chainId}></DisplayInfo>
            <div class="mt-3">
              <ContractsInfo acc={account} chID={chainId}></ContractsInfo>
            </div>
            <div class="mt-3">
              <ContractsInfoEthers acc={account} chID={chainId}></ContractsInfoEthers>
            </div>
          </div> :
          <div class="justify-content-center">
            <button onClick={() => activateBrowserWallet()} type="button" class="btn btn-warning btn-lg">Connect</button>
          </div>
        }
      </div>

  ); 
}

export default App;
