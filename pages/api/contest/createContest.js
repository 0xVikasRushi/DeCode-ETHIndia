import clientPromise from "../../../lib/mongo_connection";
export default async function createContest({ body }, res) {
  const client = await clientPromise;
  const db = client.db("decode");
  const collection = db.collection("contests");
  await collection.insert(body);
  res.json({ status: "OK" });
}
