import "./css/App.css";
import { useMemo } from "react";
import * as anchor from "@project-serum/anchor";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MerchStore from "./MerchStore";

import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";

import { ThemeProvider, createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
  try {
    const candyMachineId = new anchor.web3.PublicKey(
      process.env.REACT_APP_CANDY_MACHINE_ID!
    );

    return candyMachineId;
  } catch (e) {
    console.log("Failed to construct CandyMachineId", e);
    return undefined;
  }
};

const candyMachineId = getCandyMachineId();
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);
const txTimeoutInMilliseconds = 30000;

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletDialogProvider>
            <div className="backgroundPaper">
              {/* <div className="Landing_marquee__rdSvL">
                <div className="Landing_track__NkqOI"></div>
                <div className="flex gap-4 items-center z-20">
                  <span>jedbvjheksnc</span>
                </div>
                <div className="flex gap-4 items-center z-20">
                  <span>jedbvjheksnc</span>
                </div>
                <div className="flex gap-4 items-center z-20">
                  <span>jedbvjheksnc</span>
                </div>
                <div className="flex gap-4 items-center z-20">
                  <span>jedbvjheksnc</span>
                </div>
              </div> */}
              <Navbar />

              <Home
                candyMachineId={candyMachineId}
                connection={connection}
                startDate={startDateSeed}
                txTimeout={txTimeoutInMilliseconds}
                rpcHost={rpcHost}
              />

              <Footer />
            </div>
          </WalletDialogProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
};

export default App;
