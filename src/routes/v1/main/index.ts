import { Router } from "express";
import * as mainController from "./controller";
const mainRouter = Router();
// Establishing main route
mainRouter.get("/", mainController.main);
export default mainRouter;
