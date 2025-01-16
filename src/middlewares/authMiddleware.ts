import { Request, Response, NextFunction } from "express";

// Middleware: checking if the user is authenticated
const authenticate = (req: Request, res: Response, next: NextFunction): void => {
    // Assuming the user is authenticated {using token}.
    const isAuthenticated = true; 

    if (isAuthenticated) {
        next(); 
    } else {
        res.status(401).send('Unauthorized'); 
    }
};

export default authenticate;
