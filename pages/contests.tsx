import Head from "next/head";
import LeaderBoard from "./../components/LeaderBoard";
import sendNotification from "./../pages/api/pushApi";
const Contests = () => {
  return (
    <div>
      <Head>
        <title>Contests - DeCode</title>
      </Head>
      {/* <LeaderBoard /> */}
      <button onClick={sendNotification}>Notification</button>
    </div>
  );
};

export default Contests;
