import Head from "next/head";
import LeaderBoard from "./../components/LeaderBoard";
import sendNotification from "./api/notificationPushApi";
import feedInfo from "../components/FeedPushApi";
const Contests = () => {
  return (
    <div>
      <Head>
        <title>Contests - DeCode</title>
      </Head>
      {/* <LeaderBoard /> */}
      <div>
        <button
         onClick={}
        >
          sendNotification
        </button>
      </div>
      <button onClick={feedInfo} className="text-slate-50">
        feedConsole
      </button>
    </div>
  );
};

export default Contests;
