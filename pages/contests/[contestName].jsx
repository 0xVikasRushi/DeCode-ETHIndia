import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
const Contest = () => {
  const router = useRouter();
  const { address } = useAccount();
  const { contestName } = router.query;
  let [data, setData] = useState([]);
  let [booleanArray, setBooleanArray] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    console.log("===cn");
    console.log(contestName);
    fetch(
      "http://localhost:3000/api/contest/getContestDetails?contestName=" +
        contestName,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        //    setBooleanArray(data["currentContest"]["questions"].map((e) => false));
        setData(data);
        setLoading(false);
        let submissions = data["currentContest"]["submissions"];
        for (let i = 0; i < submissions.length; i++) {
          if (submissions[i]["ethAdress"] == address) {
            setBooleanArray(submissions[i]["booleanArray"]);
          }
        }
      })
      .catch((error) => console.log("error", error));
  }, [router.isReady]);
  console.log("===");
  console.log(data);
  return (
    <div>
      <Head>
        <title>{`${contestName} - DeCode`}</title>
      </Head>
      <p>Problems: </p>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Question
            </th>
            <th scope="col" className="py-3 px-6">
              Solved Status
            </th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            data["currentContest"]["questions"].map((ele, i) => {
              return (
                <tr
                  key={ele.name}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="py-4 px-6">{ele.name}</td>
                  <td className="py-4 px-6">
                    {booleanArray[i] ? "yes" : "No"}
                  </td>
                </tr>
              );
            })
          ) : (
            <div>loading...</div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Contest;
