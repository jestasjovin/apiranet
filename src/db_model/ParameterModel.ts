import { Schema } from "mongoose";

// Schema for input requirements 
const inParameterSchema = new Schema({
  dataType: { type: String, required: true },
  name: { type: String, required: true },
});

// Schema for output requirements 
const outParameterSchema = new Schema({
  dataType: { type: String, required: true },
  name: { type: String, required: true },
});

export { inParameterSchema, outParameterSchema };
