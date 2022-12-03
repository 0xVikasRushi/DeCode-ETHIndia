import clientPromise from "../../../lib/mongo_connection";
export default async function createUser(
  { query: { ethAdress, newRating } },
  res
) {
  const client = await clientPromise;
  const db = client.db("decode");
  const collection = db.collection("users");

  await collection.updateOne(
    {
      ethAdress,
    },
    {
      $set: {
        rating: newRating * 1,
      },
    }
  );
  res.json({ status: "OK" });
}
