import { Query } from "types/RepositoryTypes";
import { IRolesRepository, IRolesService, Roles } from "types/RolesTypes";

export class RolesService implements IRolesService {
  private rolesRepository: IRolesRepository;
  
  // Constructor que recibe un repositorio de roles y lo asigna a la propiedad RolesRepository de la clase.
  constructor(rolesRepository: IRolesRepository) {
    this.rolesRepository = rolesRepository;
  };

  // Métodos de la clase RolesService que implementan la lógica de negocio para manejar usuarios. Cada método utiliza el repositorio de usuarios para realizar operaciones CRUD.
  async createRoles(Roles: Roles): Promise<Roles> {
    return await this.rolesRepository.create(Roles); // Crea un nuevo usuario en la base de datos y devuelve el usuario creado.
  };

  // Método para encontrar todos los usuarios en la base de datos. Utiliza el repositorio de usuarios para obtener la lista de usuarios.
  async findRoles(query?: Query): Promise<Roles[]> {
    if (query) {
      // Si se proporciona una consulta, se utiliza para filtrar los resultados.
      return await this.rolesRepository.find(query);
    }
    return await this.rolesRepository.find(); // Devuelve todos los usuarios de la base de datos.
  };

  async findRolesById(id: string): Promise<Roles | null> {
    return await this.rolesRepository.findById(id); // Busca un usuario por su ID y lo devuelve. Si no lo encuentra, devuelve null.
  };

  // Método para actualizar un usuario por su ID. Utiliza el repositorio de usuarios para buscar el usuario y luego actualizarlo. Si el usuario no se encuentra, devuelve null.
  async updateRoles(id: string, Roles: Partial<Roles>): Promise<Roles | null> {
    
    if (!Roles) {
      return null;
    }
    return await this.rolesRepository.update(id, Roles); // Busca un usuario por su ID y lo actualiza con los nuevos datos. Devuelve el usuario actualizado o null si no se encuentra.
  };

  // Método para eliminar un usuario por su ID. Utiliza el repositorio de usuarios para buscar el usuario y luego eliminarlo.
  async deleteRoles(id: string): Promise<void> {
    return await this.rolesRepository.delete(id);// Busca un usuario por su ID y lo elimina. Devuelve el usuario eliminado o null si no se encuentra.
  };
};