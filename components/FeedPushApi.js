import React, { useEffect, useState } from "react";
import { NotificationItem, chainNameType } from "@pushprotocol/uiweb";
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const FeedPushApi = () => {
  const [notifications, setnotifications] = useState([]);
  useEffect(() => {
    PushAPI.user
      .getFeeds({
        user: "eip155:5:0x2Ea3AD5c3378E6fc9Df3F9eE7D0516802F24F2cA", // user address in CAIP
        env: "staging",
      })
      .then((n) => console.log(n));
  }, []);

  return (
    <div>
      <div>
        {notifications.map((oneNotification, i) => {
          const {
            cta,
            title,
            message,
            app,
            icon,
            image,
            url,
            blockchain,
            notification,
          } = oneNotification;

          return (
            <NotificationItem
              key={i} // any unique id
              notificationTitle={title}
              notificationBody={message}
              cta={cta}
              app={app}
              icon={icon}
              image={image}
              url={url}
              // theme={theme}
              chainName={blockchain}
              // chainName={blockchain as chainNameType} // if using Typescript
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeedPushApi;
