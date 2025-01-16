import { Request, Response } from "express";

// Main controller
export const main = async (req: Request, res: Response): Promise<void> => {
  try {
    res.json({ message: "This is apiratnet Documentation page" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
