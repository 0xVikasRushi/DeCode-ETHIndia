import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
const Contests = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/contest/getContests")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  }, []);

  console.log(data);
  return (
    <div className="text-slate-50 m-4">
      <Head>
        <title>Contests - DeCode</title>
      </Head>
      <p className="text-3xl mb-2">Contests</p>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      #
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Name
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Start time
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      End time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.contests?.map(({ name, startTime, endTime }, idx) => (
                    <tr key={idx} className={`${idx % 2 == 0 ? "bg-gray-100" : "bg-white"} border-b`}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{idx + 1}</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Link href={`/contests/${name}`}>{name}</Link>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{startTime}</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{endTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contests;
