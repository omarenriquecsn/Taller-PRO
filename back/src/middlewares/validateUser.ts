import { Request, Response, NextFunction } from "express";
import { date, number, object, string } from "yup";

let userSchema = object({
  name: string().required(),
  email: string().email().required(),
  nDni: number().required(),
  birthdate: date(),
  username: string().required(),
  password: string().required(),
});

export const validateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await userSchema.validate(req.body);
    next();
  } catch (error: Error | any) {
    res.status(400).json({ menssage: error.errors });
  }
};
