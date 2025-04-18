import { RolesRepository } from "@repositories/rolesRepository";
import { RolesService } from "@services/RolesService";
import { Request, Response } from "express";
import { IRolesRepository, IRolesService, Roles } from "types/RolesTypes";

// Inyección de dependencias necesarias para las rutas
const rolesRepository: IRolesRepository = new RolesRepository();
const rolesService: IRolesService = new RolesService(rolesRepository);

export const findRoles = async (req: Request, res: Response): Promise<any> => {
  try {
    const roles = await rolesService.findRoles()

    if (roles === null || roles.length === 0) {
      return res.status(404).json({ message: "No roles found" });
    }
    return res.status(200).json(roles);

  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export const findRolesById = async (req: Request, res: Response): Promise<any> => {
  try {
    const rolesId = await rolesService.findRolesById(req.params.id)

    if (!rolesId) {
      return res.status(404).json({ message: "Role not found" });
    }
    return res.status(200).json(rolesId);

  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export const createRole = async (req: Request, res: Response): Promise<any> => {
  try {
    const newRole: Roles = req.body;
    const result = await rolesService.createRoles(newRole);

    return res.status(201).json(result);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Error creating role", err });
  }
}

export const updateRole = async (req: Request, res: Response): Promise<any> => {
  try {
    const update = await rolesService.updateRoles(req.params.id, req.body);

    if (!update) {
      return res.status(404).json({ message: "Role not found" });
    }
    return res.status(200).json(update);

  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

export const deleteRole = async (req: Request, res: Response): Promise<any> => {
  try {
    const deleteRole = await rolesService.deleteRoles(req.params.id);// Elimina el rol por ID

  if (deleteRole === null) {
    return res.status(404).json({ message: "Role not found" });
  }
  return res.status(200).json(deleteRole);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}