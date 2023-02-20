import { Document, model, Schema } from "mongoose";

export interface IApiKey extends Document {
  key: string;
  email: string;
}

const apiKeySchema: Schema = new Schema({
  key: { type: String, required: true },
  email: { type: String, required: true },
});

const ApiKey = model<IApiKey>("ApiKey", apiKeySchema);

export default ApiKey;
