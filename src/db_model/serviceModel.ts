import mongoose, { Schema } from "mongoose";
import { inParameterSchema, outParameterSchema } from "./ParameterModel";
import { IService } from "../types/model.types";


// Service schema : this has an adjacent list pointing to the child nodes
const serviceSchema = new Schema<IService>(
  {
    name: { type: String, required: true  ,unique:true},
    serviceId: { type: String, required: true ,unique:true },
    protocolType: { type: String, }, // socket| https
    //input and output parameters requirements
    inputsRequirements: { type: [inParameterSchema], required: true, default: [] },
    outputRequirements: { type: [outParameterSchema], required: false, default: [] },
    // adjacent list for pointing child services
    services: { type: [{ type: Schema.Types.ObjectId, ref: 'Service' }], default: [] },
  },
  {
    timestamps: true, 
  }
);
const Service = mongoose.model<IService>("Service", serviceSchema);
export default Service;
