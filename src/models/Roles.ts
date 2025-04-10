import mongoose, { Schema } from 'mongoose';
import { Roles } from 'types/RolesTypes';

// Se defne el esquema de la base de datos
const RolesSchema: Schema = new Schema<Roles>(
  {
    name: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const RolesModel = mongoose.model<Roles>('Role', RolesSchema);
