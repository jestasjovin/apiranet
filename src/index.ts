import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import mainRouter from "./routes/v1/main";
import clientRoutes from "./routes/v1/api/client/routes";
import operateRoutes from "./routes/v1/api/operate/routes";

// Initializing dotenv to load environment variables
dotenv.config();

// Fallback URI if .env is not configured
const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/apiratnet";
const port: number = Number(process.env.PORT) || 3000;

// Initializing our amazing app
export const app = express();

// Let's parse JSON bodies
app.use(express.json());

// Connecting to MongoDB 
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB successfully.");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// App routes
app.use("/", mainRouter);
app.use("/api/v1/client", clientRoutes);
app.use("/api/v1/operate", operateRoutes);

// Global error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
