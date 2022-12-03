import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const PK = process.env.NEXT_PUBLIC_PRIVATE_KEY; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNotification = async (address, Reward) => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `DeCode Contest Reward Recieved`,
        body: `Congrats you have won ${Reward}`,
      },
      payload: {
        title: `Decode`,
        body: ``,
        cta: "",
        img: "",
      },
      recipients: `eip155:5:${address}`, // recipient address
      channel: "eip155:5:0x8b65E3846BDecfD20b3a767A5C9C526B63dE6212", // your channel address
      env: "staging",
    });

    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", apiResponse);
  } catch (err) {
    console.error("Error: ", err);
  }
};

export default sendNotification;
