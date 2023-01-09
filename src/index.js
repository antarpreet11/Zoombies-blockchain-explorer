import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Mainnet, DAppProvider, useEtherBalance, Config, Goerli, ChainId} from '@usedapp/core';
import { getDefaultProvider } from 'ethers';


const root = ReactDOM.createRoot(document.getElementById('root'));
const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: 'https://eth-mainnet.g.alchemy.com/v2/J038e3gaccJC6Ue0BrvmpjzxsdfGly9n'
  },
}

root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
