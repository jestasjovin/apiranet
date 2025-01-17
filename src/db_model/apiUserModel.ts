import mongoose, { Schema } from "mongoose";
import { IApiUser } from "../types/model.types";

// Users schema
const apiUserSchema = new Schema<IApiUser>(
  {
    name: { type: String, required: true },
    services: [{ type: Schema.Types.ObjectId, ref: "Service" }],
  },
  {
    timestamps: true, 
  }
);

const User = mongoose.model<IApiUser>("User", apiUserSchema);
export default User;
