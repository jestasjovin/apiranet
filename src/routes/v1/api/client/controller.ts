import { Request, Response } from "express";
import Client from "../../../../db_model/serviceModel";
import ServiceProvider from "../../../../db_model/apiUserModel";


export const getAllClients = async (req: Request, res: Response): Promise<void> => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving clients", error });
  }};



export const getClientById = async (req: Request, res: Response): Promise<void> => {
 const userId = req.params.id;
  try {
    const client = await Client.findById(userId);
    if (!client) {

      // return res.status(404).json({ message: "Client not found" });
      res.status(500).json({ message: "Error retrieving client"});

    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving client", error });
  }
};

export const updateClient = (req: Request, res: Response): void => {
  const userId = req.params.id;
  res.json({ message: `Updating client with ID: ${userId}` });
};

export const deleteClient = (req: Request, res: Response): void => {
  const userId = req.params.id;
  res.json({ message: `Deleting client with ID: ${userId}` });
};



// Get all service providers
export const getAllServiceProviders = async (req: Request, res: Response): Promise<void> => {
  try {
    const serviceProviders = await ServiceProvider.find();
    res.json(serviceProviders);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving service providers", error });
  }
};



// Register a new client
export const registerClient = async (req: Request, res: Response): Promise<void> => {
  const { name, serviceType } = req.body;

  try {
    const newClient = new Client({
      name,
      serviceType,
    });

    await newClient.save();
    res.status(201).json({ message: "Client registered successfully", newClient });
  } catch (error) {
    res.status(500).json({ message: "Error registering client", error });
  }
};



// Register a new service provider
export const registerServiceProvider = async (req: Request, res: Response): Promise<void> => {
  const { name, serviceType} = req.body;

  try {
    const newServiceProvider = new ServiceProvider({
      name,
      serviceType
    });

    await newServiceProvider.save();
    res.status(201).json({ message: "Service provider registered successfully", newServiceProvider });
  } catch (error) {
    res.status(500).json({ message: "Error registering service provider", error });
  }
};