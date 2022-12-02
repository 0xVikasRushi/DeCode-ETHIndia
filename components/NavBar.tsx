import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
const NavBar = () => {
  const { address, isConnected, isDisconnected } = useAccount();
  const [connectStatus, setconnectStatus] = useState(false);
  useEffect(() => {
    if (address) {
      setconnectStatus(true);
    }
  }, [address]);
  return (
    <div>
      <ConnectButton />
      <h1>{connectStatus ? address : "please connect wallet "}</h1>
    </div>
  );
};

export default NavBar;
