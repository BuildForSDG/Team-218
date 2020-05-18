import mongoose, { Schema } from 'mongoose';

const OrganizationSchema = new Schema({
  type: String,
  description: String,
  adress: String,
  name: String,
  coverPicture: String,
  logo: String,
  joinDate: { type: Date, default: Date.now }
});
export default mongoose.model('Organization', OrganizationSchema);
