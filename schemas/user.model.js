import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  password: String,
  country: String,
  email: String,
  town: String,
  phone: Number,
  userOrganization: { type: Schema.Types.ObjectId, ref: 'Organization' },
  suscription: { type: Schema.Types.ObjectId, ref: 'Project' },
  joinDate: { type: Date, default: Date.now }
});
export default mongoose.model('User', UserSchema);
