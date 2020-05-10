import mongoose, { Schema } from 'mongoose';

const ReportSchema = new Schema({
  title: String,
  description: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  project: { type: Schema.Types.ObjectId, ref: 'Project' },
  publishDate: { type: Date, default: Date.now }
});
export default mongoose.model('User', ReportSchema);
