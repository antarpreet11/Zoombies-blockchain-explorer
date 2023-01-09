import logo from './logo.svg';
import './App.css';
import { useEthers } from '@usedapp/core';
import DisplayInfo from './components/DisplayInfo';

function App() {
  const { activateBrowserWallet, account } = useEthers();
  const isConnected = account !== undefined;
  console.log("App called");
  return (
      <div>
        {isConnected ? 
          <div>
            <button>Connected!</button>
            {account && <p>Account: {account}</p>}
            <DisplayInfo acc={account}></DisplayInfo>
          </div> :
          <div>
            <button onClick={() => activateBrowserWallet()}>Connect</button>
          </div>
        }
      </div>

  );
}

export default App;
