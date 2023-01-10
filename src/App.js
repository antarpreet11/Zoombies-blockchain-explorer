import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEthers } from '@usedapp/core';
import DisplayInfo from './components/DisplayInfo';

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
          </div> :
          <div class="justify-content-center">
            <button onClick={() => activateBrowserWallet()} type="button" class="btn btn-warning btn-lg">Connect</button>
          </div>
        }
      </div>

  ); 
}

export default App;
