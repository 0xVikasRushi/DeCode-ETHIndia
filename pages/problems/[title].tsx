import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";

const CodeEditor = dynamic(() => import("@uiw/react-textarea-code-editor").then((mod) => mod.default), { ssr: false });

function makeTitle(probNameSlug: string) {
  // https://stackoverflow.com/a/8980902/13460650
  if (!probNameSlug) return "";
  return probNameSlug.replace(/-/g, " ").replace(/\b[a-z]/g, function () {
    return arguments[0].toUpperCase();
  });
}

const Problem = () => {
  const router = useRouter();
  const title = router.query.title as string;

  const [code, setCode] = useState(`#include <iostream>\nusing namespace std;\n\nint main() {\n    \n    return 0;\n}`);

  const data = {
    title: makeTitle(title),
    statement:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.",
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]." },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
    ],
    constraints: ["2 <= nums.length <= 104", "-109 <= nums[i] <= 109", "-109 <= target <= 109", "Only one valid answer exists."],
  };

  return (
    <div className="m-6 text-slate-50 rounded-lg drop-shadow-xl bg-[#1a253c] p-8">
      <Head>
        <title>{`${title} - DeCode`}</title>
      </Head>

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
            fontFamily: "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
      </div>
      <div className="flex justify-end">
        <button type="button" className="py-2 px-6 rounded shadow-md bg-blue-500 hover:opacity-80 active:opacity-70">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Problem;
