import React from "react";
import getLeaderboard from "../pages/api/covalentApi";
const LeaderBoard = () => {
  const data = getLeaderboard();
  console.log(data);
  return (
    <div>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Address
              </th>
              <th scope="col" className="py-3 px-6">
                DCX Token
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {data.map((ele) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    name
                  </th>
                  <td className="py-4 px-6">{ele.address}</td>
                  <td className="py-4 px-6">{ele.balance}</td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoard;
