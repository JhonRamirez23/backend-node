// Exportamos una interface genérica para definir un repositorio
// que puede manejar diferentes tipos de datos. Esta interface define un método CRUD
// básico para crear y encontrar datos. La implementación de esta interface
// dependerá de la base de datos o el sistema de almacenamiento que se utilice.

// También se aplica el principio de segregación de interfaces, que establece que
// las interfaces deben ser específicas y no contener métodos innecesarios.

export interface ICreatable<T> {
  create(data: T): Promise<T>; // Método para crear un nuevo registro
}

export interface IReadable<T> {
  find(): Promise<T[]>; // Método para encontrar todos los registros
  findById(id: string): Promise<T | null>; // Método para encontrar un registro por su ID
}

export interface IUpdatable<T> {
  update(id: string, user: Partial<T>): Promise<T | null>; // Método para actualizar un registro por su ID
}

export interface IDeleatable<T> {
  delete(id: string): Promise<void>; // Método para eliminar un registro por su ID
}

export interface IFindByEmail<T> {
  findByEmail(email: string): Promise<T | null>; // Método para encontrar un registro por su email
}

export interface IFindByUsername<T> {
  findByUsername(username: string): Promise<T | null>; // Método para encontrar un registro por su nombre de usuario  
}