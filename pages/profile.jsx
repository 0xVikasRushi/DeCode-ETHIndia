import React from "react";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { getBalance, sendErcToken, bulkTransfer } from "./utils/Interact";
const Profile = () => {
  const { address, isConnected, isDisconnected } = useAccount();
  const admin = "0x8b65E3846BDecfD20b3a767A5C9C526B63dE6212";
  const [account, setAccount] = useState("");
  const [balanceToken, setBalanceToken] = useState();

  useEffect(() => {
    if (address) {
      setAccount(address);
    }
    if (account) {
      tokenBalanceofUser();
    }
  }, [account]);

  const tokenBalanceofUser = async () => {
    const balance = await getBalance(account);
    setBalanceToken(balance);
  };

  return (
    <>
      <div>profile</div>
      <h1>{account}</h1>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {account === admin ? "Admin Account" : "User Profile"}
      </button>
      <button
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Balance : {balanceToken}
      </button>

      {admin !== account ? (
        console.log("User Account")
      ) : (
        <>
          <button
            onClick={bulkTransfer}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            transfer
          </button>
        </>
      )}
    </>
  );
};

export default Profile;
