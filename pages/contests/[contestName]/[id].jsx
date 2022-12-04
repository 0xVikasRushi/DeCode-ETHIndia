import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";
import { useAccount } from "wagmi";
import Router from "next/router";
import axios from "axios";
const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

function makeTitle(probNameSlug) {
  // https://stackoverflow.com/a/8980902/13460650
  if (!probNameSlug) return "";
  return probNameSlug.replace(/-/g, " ").replace(/\b[a-z]/g, function () {
    return arguments[0].toUpperCase();
  });
}

const Problem = () => {
  const router = useRouter();
  const id = router.query.id;

  const [code, setCode] = useState(
    `#include <iostream>\nusing namespace std;\n\nint main() {\n    \n    return 0;\n}`
  );
  let [queryDat, setQueryDat] = useState(undefined);
  let contestName = "testContest";
  useEffect(() => {
    if (!router.isReady) return;
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "http://localhost:3000/api/contest/getContestDetails?contestName=" +
        contestName,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        //    setBooleanArray(data["currentContest"]["questions"].map((e) => false));
        setQueryDat(data);
      })
      .catch((error) => console.log("error", error));
  }, [router.isReady]);

  const { address } = useAccount();
  const data = {
    title:
      router.isReady && queryDat !== undefined
        ? queryDat?.currentContest?.questions[id]["name"]
        : "",
    difficulty: "Easy",
    statement:
      router.isReady && queryDat !== undefined
        ? queryDat?.currentContest?.questions[id]["desc"]
        : "",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
    ],
    constraints: [
      "2 <= nums.length <= 104",
      "-109 <= nums[i] <= 109",
      "-109 <= target <= 109",
      "Only one valid answer exists.",
    ],
  };
  const testCase =
    router.isReady && queryDat !== undefined
      ? queryDat?.currentContest?.questions[id]["testCase"]
      : "";
  return (
    <div className="m-6 text-slate-50 rounded-lg drop-shadow-xl bg-[#1a253c] p-8">
      <p className="text-3xl mb-4">{data.title}</p>
      <div>
        {data.statement.split("\n").map((para, idx) => (
          <p key={idx} className="mb-2">
            {para}
          </p>
        ))}
        <p>&nbsp;</p>
        <div className="bg-[#263659] p-4 rounded shadow-lg">
          {data.examples.map((example, idx) => (
            <div key={idx} className="mb-4">
              <p>
                <strong className="example">Example {idx + 1}: </strong>
              </p>
              <pre>
                <strong>Input: </strong>
                {example.input}
                <br />
                <strong>Output: </strong>
                {example.output}
                {example.explanation && (
                  <>
                    <br />
                    <strong>Explanation: </strong>
                    {example.explanation}
                  </>
                )}
              </pre>
            </div>
          ))}
        </div>
        <p>&nbsp;</p>
        <div className="bg-[#263659] p-4 rounded shadow-lg">
          <p>
            <strong>Constraints:</strong>
          </p>
          <ul>
            {data.constraints.map((constraint, idx) => (
              <li key={idx}>
                <code>{constraint}</code>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-8 rounded-lg drop-shadow-xl">
        <CodeEditor
          value={code}
          language="cpp"
          placeholder="Please enter JS code."
          onChange={(evn) => setCode(evn.target.value)}
          padding={15}
          style={{
            fontSize: 18,
            backgroundColor: "#0e1116",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
      </div>
      <button
        type="button"
        onClick={async () => {
          let toSend = {
            ethAdress: address,
            questionIndex: id * 1,
            contestName: "testContest",
            base64Code: btoa(code),
            languageID: 54,
            testCase: btoa(testCase),
            rating: 800,
          };
          console.log(toSend);
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({
            toSend,
          });

          var requestOptions = {
            method: "POST",
            body: toSend,
          };
          console.log(toSend);
          await axios.post(
            "http://localhost:3000/api/contest/submitSubmission",
            toSend
          );

          function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
          }
          console.log(toSend);

          Router.push("/contests/testContest");
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Problem;
