import mongoose, { Schema } from "mongoose";
import bcrypt, { hash } from "bcryptjs"
import { User } from "types/UsersTypes";

// Se defne el esquema de la base de datos
const UserSchema: Schema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

// Encriptar la contraseña antes de guardar el usuario en la base de datos
UserSchema.pre<User>('save', async function(next) {
  if (this.isModified('password') || this.isNew) {
    const salt = await bcrypt.genSalt(12); // Genera un salt para encriptar la contraseña
    const hash = await bcrypt.hash(this.password, salt); // Encripta la contraseña con el salt generado
    this.password = hash; // Asigna la contraseña encriptada al campo password del usuario
  } next();
});

// Método para comparar la contraseña ingresada con la contraseña encriptada almacenada en la base de datos
UserSchema.method('comparePassword', async function(password: string): Promise<boolean> {
  if (!this.password) {
    throw new Error('Password not set'); // Lanza un error si la contraseña no está definida
  }
  return await bcrypt.compare(password, this.password as string);
});

// Método para quitar la contraseña para regresar el objeto de usuario sin la contraseña
UserSchema.methods.toJSON = function() {
  const userObj = this.toObject(); // Convierte el documento de Mongoose a un objeto json
  delete userObj.password; // Elimina la contraseña del objeto para no exponerla
  return userObj; // Devuelve el objeto sin la contraseña
};

export const UserModel = mongoose.model<User>('User', UserSchema);