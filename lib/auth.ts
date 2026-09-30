import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dbConnect from "./mongoose";

export async function initAuth() {
  const connection = await dbConnect();
  if (!connection) return null;

  return betterAuth({
    database: mongodbAdapter(connection.connection.getClient().db()),
    emailAndPassword: { enabled: true },
  });
}
