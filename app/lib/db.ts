import { Db, MongoClient } from 'mongodb';

export async function getDb(): Promise<Db>{
  const uri = 'mongodb://localhost:27017/mydatabase';
  const client = new MongoClient(uri);
  await client.connect();
  const database = client.db('mydatabase');
  return database;
}