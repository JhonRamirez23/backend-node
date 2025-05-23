import { Query } from 'types/RepositoryTypes';
import { IUserRepository, IUserService, User } from 'types/UsersTypes';

export class UserService implements IUserService {
  private userRepository: IUserRepository;

  // Constructor que recibe un repositorio de usuarios y lo asigna a la propiedad userRepository de la clase.
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  // Métodos de la clase UserService que implementan la lógica de negocio para manejar usuarios. Cada método utiliza el repositorio de usuarios para realizar operaciones CRUD.
  async createUser(data: User): Promise<User> {
    return await this.userRepository.create(data);
  }

  // Método para encontrar todos los usuarios en la base de datos. Utiliza el repositorio de usuarios para obtener la lista de usuarios.
  async findAllUsers(query?: Query): Promise<User[]> {
    if (query) {
      // Si se proporciona una consulta, se utiliza para filtrar los resultados.
      return await this.userRepository.find(query);
    }
    return await this.userRepository.find();
  }

  // Método para encontrar un usuario por su nombre de usuario. Utiliza el repositorio de usuarios para buscar el usuario en la base de datos. Si el usuario no se encuentra, devuelve null.
  async findByUsername(username: string): Promise<User | null> {
    return await this.userRepository.findByUsername(username);
  }

  // Método para encontrar un usuario por su correo electrónico. Utiliza el repositorio de usuarios para buscar el usuario en la base de datos. Si el usuario no se encuentra, devuelve null.
  async findUserByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findByEmail(email);
  }

  // Método para encontrar un usuario por su ID. Utiliza el repositorio de usuarios para buscar el usuario en la base de datos.
  async findUserById(id: string): Promise<User | null> {
    return await this.userRepository.findById(id);
  }

  // Método para actualizar un usuario por su ID. Utiliza el repositorio de usuarios para buscar el usuario y luego actualizarlo. Si el usuario no se encuentra, devuelve null.
  async updateUser(id: string, user: Partial<User>): Promise<User | null> {
    if (!user) {
      return null;
    }
    return await this.userRepository.update(id, user);
  }

  // Método para eliminar un usuario por su ID. Utiliza el repositorio de usuarios para buscar el usuario y luego eliminarlo.
  async deleteUser(id: string): Promise<void> {
    return await this.userRepository.delete(id);
  }
}
