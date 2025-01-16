import { Request, Response } from "express";

export const getAllClients = (req: Request, res: Response): void => {
  res.json({ message: "Getting all clients" });
};

export const getClientById = (req: Request, res: Response): void => {
  const userId = req.params.id;
  res.json({ message: `Getting client with ID: ${userId}` });
};

export const updateClient = (req: Request, res: Response): void => {
  const userId = req.params.id;
  res.json({ message: `Updating client with ID: ${userId}` });
};

export const deleteClient = (req: Request, res: Response): void => {
  const userId = req.params.id;
  res.json({ message: `Deleting client with ID: ${userId}` });
};

export const registerClient = (req: Request, res: Response): void => {
  res.json({ message: "Registering a new client" });
};
