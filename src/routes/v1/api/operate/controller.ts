import { Request, Response } from "express";
import { RatNet } from "../../../../ratnet";

export const operateService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    //service instance
    const service = new RatNet("user001", { someKey: "xx" }, {});

    // Extracting parameters from the request body
    const { serviceId,serviceType,metadata } = req.body;

    const values = { serviceId: serviceId, serviceType: serviceType, metadata:{
      userId:metadata.userId,
      platformId: metadata.platformId,
      serviceId: metadata.serviceId,
      data: serviceType.data,
    }};

    // using the service to operate the input
    const result = await service.operate(values);

    // Return the result as the response
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getManyItems = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    //service instance
    const service = new RatNet("user001", { someKey: "someValue" }, {});

    // Extracting parameters from the request body
    const { input } = req.body;

    const values = {
      serviceId: "service1",
      serviceType: "typeA",
      metadata: { types: "typeX" }
    }

    // using the service to query list
    const result = await service.queryList(values);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getItem = async (req: Request, res: Response): Promise<void> => {
  try {
    //service instance
    const service = new RatNet("user001", { someKey: "someValue" }, {});

    // Extract the input object from the request body
    const { input } = req.body;

    const values = { serviceId: "", serviceType: "", metadata: "" };

    // using the service to query an object
    const result = await service.queryItem(values);

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
