import './App.css';
import { useEthers } from '@usedapp/core';
import DisplayInfo from './components/DisplayInfo';
import ContractsInfo from './components/ContractsInfo';
import ContractsInfoEthers from './components/ContractsInfoEthers';

function App() {
  const { activateBrowserWallet, account , chainId, deactivate} = useEthers();
  const isConnected = account !== undefined;
  const href1 = `https://moonriver.moonscan.io/address/${account}`;
  const href2 = `https://moonbase.moonscan.io/address/${account}`;
  // console.log("App called");
  return (
      <div className="d-flex justify-content-center mt-5 ml-5 mr-5 mb-5">
        {isConnected ? 
          <div className="justify-content-center">
            <button onClick={deactivate} type="button" className="btn btn-success btn-lg mb-2">Connected!</button>
            <div>Account:&nbsp;&nbsp;
              {chainId == '1285' ? 
              <a href={href1} target='_blank'>{account}</a>
              : <a href={href2} target='_blank'>{account}</a>
              }
            </div>
            <DisplayInfo acc={account} chID={chainId}></DisplayInfo>
            {/* <div className="mt-3">
              <ContractsInfo acc={account} chID={chainId}></ContractsInfo>
            </div> */}
            <div className="mt-3">
              <ContractsInfoEthers acc={account} chID={chainId}></ContractsInfoEthers>
            </div>
          </div> :
          <div className="justify-content-center">
            <button onClick={() => activateBrowserWallet()} type="button" className="btn btn-warning btn-lg">Connect</button>
          </div>
        }
      </div>

  ); 
}

export default App;
