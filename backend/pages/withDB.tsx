import { NextPageContext } from "next";
import { connect, connection } from "mongoose";

const dbUri: string | undefined = process.env.MONGODB_URI;

if (!dbUri) {
  throw new Error(
    "Please add your MonogDB connection string to your environmental variables labeled `MONGODB_URI`"
  );
}

const withDB = (handler: any) => async (req: any, res: any) => {
  if (connection.readyState !== 1) {
    await connect(dbUri);
  }

  return handler(req, res);
};

export default withDB;