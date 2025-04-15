import { UserRepository } from "@repositories/userRepository";
import { UserService } from "@services/UserService";
import { IUserRepository, IUserService, User } from "types/UsersTypes";
import { Request, Response } from "express";

// Inyección de dependencias necesarias para las rutas
const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);

export const findUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.findAllUsers();

    if (users === null || users.length === 0) {
      res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(users);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const findById = async (req: Request, res: Response) => {
  try {
    const userId = await userService.findUserById(req.params.id);

    if (!userId) {
      res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(userId);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser: User = req.body;
    const result = await userService.createUser(newUser);

    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Error creating user", err });
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const update = await userService.updateUser(req.params.id, req.body);

    if (!update) {
      res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(update);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleteUser = await userService.deleteUser(req.params.id);

  if (deleteUser === null) {
    res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json(deleteUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}