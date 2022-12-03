import clientPromise from "../../../lib/mongo_connection";

import axios from "axios";
export default async function submitSubmission(
  { query: { contestName } },
  res
) {
  const client = await clientPromise;
  const db = client.db("decode");
  const collection = db.collection("contests");
  let currentContest = await collection.findOne({ name: contestName });

  res.json({ currentContest });
}
