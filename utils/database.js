import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

if (!MONGO_URI) {
  throw new Error("PROVIDE MONGODB_URI");
};

if (!MONGODB_DB) {
  throw new Error("PROVIDE MONGODB_DB");
}

let cached = global.mongo;

if (!cached) {
  cached = global.mongo = { conn: null, promise: null };
};

export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  };

  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = MongoClient.connect(MONGODB_URI, options).then((client) => {
      return {
        client,
        db: client.db(MONGODB_DB),
      };
    });
  };

  cached.conn = cached.promise;
  return cached.conn;
};
