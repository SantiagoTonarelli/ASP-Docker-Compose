import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  nombre: string;
}

const userSchema: Schema = new Schema({
  nombre: { type: String, required: true }
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
