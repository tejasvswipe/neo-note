import mongoose, { Mongoose } from "mongoose";

declare global {
  var mongooseCache:
    | { conn: Mongoose | null; promise: Promise<Mongoose> | null }
    | undefined;
}

const uri = process.env.MONGO_URI;

export default async function dbConnect() {
  if (!uri) return null;

  const cached = global.mongooseCache ??= { conn: null, promise: null };
  if (cached.conn) return cached.conn;
  cached.promise ??= mongoose.connect(uri, { bufferCommands: false });
  cached.conn = await cached.promise;
  return cached.conn;
}
