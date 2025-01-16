import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import mainRouter from "./routes/v1/main/indexRoutes";
import clientRoutes from "./routes/v1/api/client/routes";
import operateRoutes from "./routes/v1/api/operate/routes";
const port: number = Number(process.env.PORT) || 3000;

// Initializing dotenv
dotenv.config();

export const app = express();
// Middleware to parse JSON bodies
app.use(express.json());

// App routes
app.use("/", mainRouter);
app.use("/api/v1/client", clientRoutes);
app.use("/api/v1/operate", operateRoutes);

// This is our global error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Let's start our server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
