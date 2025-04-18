import { UserRepository } from "@repositories/userRepository";
import { UserService } from "@services/UserService";
import { NextFunction, Request, Response } from "express";
import { IUserRepository, IUserService, User } from "types/UsersTypes";


// Inyección de dependencias necesarias para las rutas
const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);

export const registerUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const {email}: User = req.body;
    const mailComp = await userService.findUserByEmail(email)

    // Revisa si el correo existe en la base de datos | mailComp significa "Mail compare"
    if (mailComp) {
      return res.status(400).json({ message: "The email already exist!" });
    }

    const newUser = await userService.createUser(req.body);
    return res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

export const loginUser = async (req: Request, res: Response): Promise<any> => {
  try {
    // Desestructuración del cuerpo de la solicitud para obtener el correo electrónico y la contraseña
    const { email, password } = req.body;
    const userPassword = await userService.findUserByEmail(email); // Busca el usuario por correo electrónico
    
    // Si no se encuentra el usuario, responde con un error 404
    if (!userPassword) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compara la contraseña ingresada con la almacenada en la base de datos
    const conparePassword = await userPassword.comparePassword(password);

    // Si la contraseña no coincide, responde con un error 401
    if (!conparePassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}