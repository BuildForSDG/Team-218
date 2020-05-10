import mongoose, { Schema } from 'mongoose';

const ProjectSchema = new Schema({
  name: String,
  description: String,
  country: String,
  categorie: String,
  document: String,
  site: String,
  status: String,
  duration: Number,
  cost: Number,
  dateAdded: { type: Date, default: Date.now },
  startupDate: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  beneficiary: [],
  reported: [],
  contractors: [],
  rating: Number
});
export default mongoose.model('Project', ProjectSchema);
