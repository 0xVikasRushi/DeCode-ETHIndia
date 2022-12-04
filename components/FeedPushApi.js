import React, { useEffect, useState } from "react";
import { NotificationItem, chainNameType } from "@pushprotocol/uiweb";
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const FeedPushApi = () => {
  const [notifications, setnotifications] = useState([]);

  const infoNotifiy = () => {
    // for (let index = 1; index < notifications.length; index++) {
    //   const title = notifications[index].title;
    //   const message = notifications[index].message;
    //   alertinfo.push({
    //     title,
    //     message,
    //   });
    // }
    useEffect(() => {
      PushAPI.user
        .getFeeds({
          user: "eip155:5:0x2Ea3AD5c3378E6fc9Df3F9eE7D0516802F24F2cA", // user address in CAIP
          env: "staging",
        })
        .then((n) => console.log(n))
        .then((n) => setnotifications(n));
    }, []);
  };

  return (
    <div>
      <div>
       
      </div>
    </div>
  );
};

export default FeedPushApi;
