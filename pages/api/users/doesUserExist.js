import clientPromise from "../../../lib/mongo_connection";
export default async function doesUserExist({ query: { ethAdress } }, res) {
  const client = await clientPromise;
  const db = client.db("decode");
  const collection = db.collection("users");
  let found = await collection.findOne({
    ethAdress,
  });
  res.json({ userExist: !(found === null) });
}
