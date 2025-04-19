import { IRolesRepository, Roles } from "types/RolesTypes";
import { RolesModel } from "@models/Roles";
import { Query } from "types/RepositoryTypes";
// Esta clase implementa la interfaz IRolesRepository y proporciona métodos para manejar usuarios en memoria.

// Se usa el método "implements" para indicar que una clase va a implementar una interfaz.
export class RolesRepository implements IRolesRepository {

  async create(data: Roles): Promise<Roles> {
    const newRoles = new RolesModel(data); // Crea una nueva instancia del modelo de usuario con los datos proporcionados
    return await newRoles.save(); // Guarda el nuevo usuario en la base de datos y devuelve el usuario guardado
  };

  async find(query?: Query): Promise<Roles[]> {
    return await RolesModel.find(query || {}).exec(); // Devuelve todos los usuarios de la base de datos y exec ejecuta la consulta
  }

  async findById(id: string): Promise<Roles | null> {
    return await RolesModel.findById(id).exec(); // Busca un usuario por su ID y lo devuelve. Si no lo encuentra, devuelve null
  }

  async update(id: string, data: Partial<Roles>): Promise<Roles | null> {
    return await RolesModel.findByIdAndUpdate(id, data, { new: true}).exec(); // Busca un usuario por su ID y lo actualiza con los nuevos datos. El tercer parámetro { new: true } indica que se debe devolver el documento actualizado.
  }

  async delete(id: string): Promise<void> {
    await RolesModel.findByIdAndDelete(id).exec(); // Busca un usuario por su ID y lo elimina. Devuelve el usuario eliminado o null si no se encuentra.
  }
}