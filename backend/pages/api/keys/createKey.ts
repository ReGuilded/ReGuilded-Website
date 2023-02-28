import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import withDB from "@/pages/withDB";
import Api from "../../../schemas/Api";
import { createHmac } from "crypto";

const generateApiKey = (email: string, secret: string): string => {
  const timestamp = Date.now().toString();
  const hmac = createHmac("sha256", secret);
  hmac.update(`${email}-${timestamp}`);
  const signature = hmac.digest("hex");

  return `${email}-${timestamp}-${signature}`;
};

const createApiKey = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    if (req.headers.authorization !== process.env.AUTH_TOKEN)
      return res.status(401).json({
        code: 401,
        message: "Unauthorized Request",
      });
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        code: 400,
        message: "Missing paramters (make sure you supplied an email)",
      });
    }

    try {
      const apiKey = await Api.create({
        key: generateApiKey(email, process.env.API_KEY_SECRET!),
        email,
      });
      res
        .status(200)
        .json({ message: "API key created successfully!", apiKey });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to create API key." });
    }
  } else {
    return res.status(404).json({ code: 401, message: "Route not found" });
  }
};

export default withDB(createApiKey);