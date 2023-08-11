import { MongoClient } from "mongodb";

export async function connectToMongodb() {
  const client = await MongoClient.connect(
    "mongodb+srv://lkravchuk2000:<password>@cluster1.t2nx7x0.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  return { client, meetupsCollection };
}
