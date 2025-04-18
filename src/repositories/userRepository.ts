import { UserModel } from "@models/Users";
import { IUserRepository, User } from "types/UsersTypes";

// Esta clase implementa la interfaz IUserRepository y proporciona métodos para manejar usuarios en memoria.

// En un entorno de producción, estos métodos se conectarían a una base de datos real.
export class UserRepository implements IUserRepository {

  async create(data: User): Promise<User> {
    const newUser = new UserModel(data); // Crea una nueva instancia del modelo de usuario con los datos proporcionados
    return await newUser.save(); // Guarda el nuevo usuario en la base de datos y devuelve el usuario guardado
  };

  async find(): Promise<User[]> {
    return await UserModel.find().exec(); // Devuelve todos los usuarios de la base de datos y exec ejecuta la consulta
  }

  async findById(id: string): Promise<User | null> {
    return await UserModel.findById(id); // Busca un usuario por su ID y devuelve el usuario encontrado o null si no se encuentra   
  }

  async findByUsername(username: string): Promise<User | null> {
    return await UserModel.findOne({ username }); // Busca un usuario por su nombre de usuario y devuelve el usuario encontrado o null si no se encuentra
  }

  async update(id: string, data: Partial<User>): Promise<User | null> {
    return await UserModel.findByIdAndUpdate(id, data, { new: true}).exec(); // Busca un usuario por su ID y lo actualiza con los nuevos datos. El tercer parámetro { new: true } indica que se debe devolver el documento actualizado.
  }

  async delete(id: string): Promise<void> {
    await UserModel.findByIdAndDelete(id).exec(); // Busca un usuario por su ID y lo elimina de la base de datos
  }

  async findByEmail(email: string): Promise<User | null> {
    return await UserModel.findOne({ email }); // Busca un usuario por su correo electrónico y devuelve el usuario encontrado o null si no se encuentra
  }
}