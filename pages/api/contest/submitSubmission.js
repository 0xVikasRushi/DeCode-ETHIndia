import clientPromise from "../../../lib/mongo_connection";

import axios from "axios";
export default async function submitSubmission(
  {
    body: {
      ethAdress,
      contestName,
      questionIndex,
      base64Code,
      languageID,
      testCase,
      rating,
    },
  },
  res
) {
  const client = await clientPromise;
  const db = client.db("decode");
  const collection = db.collection("contests");
  let currentContest = await collection.findOne({ name: contestName });
  let expectedOuput =
    currentContest["questions"][questionIndex]["expectedOutput"];
  const api_uri = process.env.JUDGE_URI;
  const currTime = new Date().getTime();
  console.log(expectedOuput);
  const resp = await axios.post(
    api_uri + "/submissions?base64_encoded=true&wait=true",
    {
      language_id: languageID,
      source_code: base64Code,
      stdin: testCase,
      expected_output: btoa(expectedOuput),
    }
  );
  const data = resp.data;
  // write accepted variable based on response data

  let accepted = data["status"]["description"] == "Accepted";
  if (!accepted) {
    await res.json({ status: "Not Accepted" });
    return;
  }
  let submissions = currentContest.submissions ?? [];
  let currentUserSubmissionIndex = submissions.findIndex(
    (ele) => ele.ethAdress == ethAdress
  );
  console.log("===");
  console.log(currentContest);
  if (currentUserSubmissionIndex == -1) {
    submissions.push({
      ethAdress,
      booleanArray: currentContest.questions.map(
        (e, indx) => indx == questionIndex
      ),
      totalTime: currTime - currentContest.startTime,
      rating,
    });
  } else {
    submissions[currentUserSubmissionIndex].booleanArray[questionIndex] = true;
    submissions[currentUserSubmissionIndex].totalTime +=
      currTime - currentContest.startTime;
  }
  await collection.updateOne({ name: contestName }, { $set: { submissions } });
  res.json({ status: "OK" });
}
