import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    snippet: {
      type: String,
      require: true,
    },
    body: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

//export const Blog = mongoose.model('Blog', BlogSchema)

export default mongoose.model('Blog', BlogSchema);
