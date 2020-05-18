import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema({
  comment: String,
  project: { type: Schema.Types.ObjectId, ref: 'Project' },
  organization: { type: Schema.Types.ObjectId, ref: 'Organization' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  postedDate: { type: Date, default: Date.now }
});
export default mongoose.model('Comment', CommentSchema);
