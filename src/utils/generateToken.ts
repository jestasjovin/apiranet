import jwt from "jsonwebtoken";

// Generating JWT token
export const generateToken = (user: { id: string, role: string }) => {
    return jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET as string,
        { expiresIn: "1h" }
    );
};
