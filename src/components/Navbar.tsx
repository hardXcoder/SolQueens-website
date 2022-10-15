import React, { Component } from "react";

import styled from "styled-components";

import logo from "../img/logo.svg";

import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

const ConnectButton = styled(WalletDialogButton)``;

class Navbar extends Component {
  render() {
    return (
      <nav>
        {/* <img src={logo} /> */}
        <h3 className="logo">SolQueens</h3>

        <div className="flex items-center gap-3">
          <a
            href="google.com"
            className="min-w-[150px] min-h-[46px] rounded-full flex gap-1 items-center justify-center degraded"
          >
            <p className="font-mono font-[700]">STAKE</p>
          </a>
          <a
            href="google.com"
            className="min-w-[150px] min-h-[46px] rounded-full flex gap-1 items-center justify-center degraded"
          >
            <p className="font-mono font-[700]">LOGIN</p>
          </a>
          <a
            href="google.com"
            className="min-w-[150px] min-h-[46px] rounded-full flex gap-1 items-center justify-center degraded"
          >
            <p className="font-mono font-[700]">BUY QUEEN</p>
          </a>
        </div>
      </nav>
    );
  }
}
export default Navbar;
