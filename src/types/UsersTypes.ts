import { Document } from "mongoose";
import { ICreatable, IDeleatable, IFindByEmail, IFindByUsername, IReadable, IUpdatable } from "./RepositoryTypes";

export interface User extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
  comparePassword(password: string): Promise<boolean>; // Método para comparar la contraseña ingresada con la almacenada en la base de datos
  }

// Definimos una interface que extiende de Repository para crear los datos de los usuarios
export interface IUserRepository extends ICreatable<User> {};
export interface IUserRepository extends IReadable<User> {};
export interface IUserRepository extends IUpdatable<User> {};
export interface IUserRepository extends IDeleatable<User> {};
export interface IUserRepository extends IFindByUsername<User> {};
export interface IUserRepository extends IFindByEmail<User> {};

// Definimos una interface para crear la lógica de negocio de los usuarios
export interface IUserService {
  createUser(data: User): Promise<User>; // Usa el método create del repositorio genérico
  findAllUsers(): Promise<User[]>; // Usa el método get del repositorio genérico
  findUserById(id: string): Promise<User | null>; // Usa el método get del repositorio genérico
  updateUser(id: string, user: Partial<User>): Promise<User | null>; // Usa el método update del repositorio genérico
  deleteUser(id: string): Promise<void>; // Usa el método delete del repositorio genérico
  findUserByEmail(email: string): Promise<User | null>; // Usa el método get del repositorio genérico
  findByUsername(username: string): Promise<User | null>; // Usa el método get del repositorio genérico
}