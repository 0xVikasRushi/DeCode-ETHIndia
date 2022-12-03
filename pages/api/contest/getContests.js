import clientPromise from "../../../lib/mongo_connection";
export default async function getContests(_, res) {
  const client = await clientPromise;
  const db = client.db("decode");
  const collection = db.collection("contests");
  let contests = await collection.find({}).toArray();
  res.json({ contests });
}
