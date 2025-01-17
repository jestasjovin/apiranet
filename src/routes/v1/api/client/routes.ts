// src/routes/clientRoutes.ts
import { Router, Request, Response } from "express";
import authenticate from "../../../../middlewares/authMiddleware";
import * as clientController from "./controller"; // Import all controller functions

const clientRouter = Router();

// get all clients
clientRouter.get("/", authenticate, clientController.getAllClients);
// get client by ID
clientRouter.get("/:id", authenticate, clientController.getClientById);

// client actions
const usingClientRouter = Router();
// update client by ID
usingClientRouter.put("/:id", authenticate, clientController.updateClient);
// delete client by ID
usingClientRouter.delete("/:id", authenticate, clientController.deleteClient);
clientRouter.use("/using_client", usingClientRouter);

// Sub-router for client registration-related routes
const registerRouter = Router();
//  register a new client
registerRouter.post("/register", authenticate, clientController.registerClient);
// Mount the registerRouter on `/register` path
clientRouter.use("/register", registerRouter);


// :::::::::::::: route for service register

// :::::::::::::: service get items

// :::::::::::::: adding provider

export default clientRouter;
