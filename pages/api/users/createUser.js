import clientPromise from "../../../lib/mongo_connection";
export default async function createUser(
  {
    query: {
      name,
      ethAdress,
      githubUrl = "",
      twitterUrl = "",
      linkedinUrl = "",
    },
  },
  res
) {
  const client = await clientPromise;
  const db = client.db("decode");
  const collection = db.collection("users");
  let exists = (await collection.findOne({ ethAdress })) == null ? false : true;
  if (exists) {
    res.json({ status: "OK" });
    return;
  }
  await collection.insert({
    name,
    ethAdress,
    githubUrl,
    twitterUrl,
    linkedinUrl,
    rating: 800,
  });
  res.json({ status: "OK" });
}
