const covalent_apiKey = process.env.NEXT_PUBLIC_COVALENT_API;
async function getLeaderboard() {
  let Leaderboard = [];
  const board = async () => {
    const holder_url = `https://api.covalenthq.com/v1/5/tokens/0x4d313b8047Bbf71347cC66f1eB27A8Bae5568b38/token_holders/?key=${covalent_apiKey}`;
    console.log("Req started");
    const res = await fetch(holder_url);
    const resData = await res.json();

    // ? getting top LeaderBoard for contest
    const arr = resData.data.items;
    console.log(arr);

    for (let i = 1; i < arr.length; i++) {
      const address = arr[i].address;
      const balance = arr[i].balance;
      Leaderboard.push({
        address,
        balance,
      });
    }
    return Leaderboard;
  };
  await board();
  return Leaderboard;
}

export default getLeaderboard;
