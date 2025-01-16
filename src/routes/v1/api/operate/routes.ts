import { Router } from "express";
import authenticate from "../../../../middlewares/authMiddleware";
import * as operationsController from "./controller";

const operateRoutes = Router();

// lists query
operateRoutes.get("/query", authenticate, operationsController.getManyItems);
// item query by ID
operateRoutes.get("/query/:id", authenticate, operationsController.getItem);
// Mutation operations
operateRoutes.post(
  "/mutate",
  authenticate,
  operationsController.operateService
);

export default operateRoutes;
