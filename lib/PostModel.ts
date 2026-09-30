import { model, models, Schema } from "mongoose";

const PostSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    body: { type: [String], required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: String, required: true },
    readTime: { type: String, required: true },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default models.Post || model("Post", PostSchema);
