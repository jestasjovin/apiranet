import mongoose, { Document, Schema } from "mongoose";
import { Node } from "./app.types";

// User object structure
export interface IApiUser extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  services: mongoose.Types.ObjectId[];
}

//Service object structure
export interface IService extends Node, Document {
  createdAt: Date;
  updatedAt: Date;
  services: IService[];
}
