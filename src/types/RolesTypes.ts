import { ICreatable, IReadable, IUpdatable, IDeleatable } from "./RepositoryTypes";

export interface Roles {
  name: string;
}

// Definimos una interface que hereda (extends) de la super clase Repository para crear los roles de los usuarios
export interface IRolesRepository extends ICreatable<Roles> {};
export interface IRolesRepository extends IReadable<Roles> {};
export interface IRolesRepository extends IUpdatable<Roles> {};
export interface IRolesRepository extends IDeleatable<Roles> {};

// Definimos una interface para crear la lógica de negocio de los usuarios
export interface IRolesService {
  createRoles(roles: Roles): Promise<Roles>; // Usa el método create del repositorio genérico
  findRoles(): Promise<Roles[]>; // Usa el método get del repositorio genérico
  findRolesById(id: string): Promise<Roles | null>; // Usa el método get del repositorio genérico
  updateRoles(id: string, roles: Partial<Roles>): Promise<Roles | null>; // Usa el método update del repositorio genérico
  deleteRoles(id: string): Promise<void>; // Usa el método delete del repositorio genérico
}