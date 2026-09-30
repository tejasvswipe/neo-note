import dbConnect from "./mongoose";
import PostModel from "./PostModel";
import { getPost, getPosts, type Post } from "./posts";

function fromDocument(doc: Record<string, unknown>): Post {
  return {
    id: String(doc._id ?? doc.id),
    slug: String(doc.slug),
    title: String(doc.title),
    excerpt: String(doc.excerpt),
    body: Array.isArray(doc.body) ? doc.body.map(String) : [],
    category: String(doc.category),
    author: String(doc.author),
    date: String(doc.date),
    readTime: String(doc.readTime),
    featured: Boolean(doc.featured),
  };
}

export async function findPost(slug: string) {
  const connection = await dbConnect();
  if (connection) {
    const doc = await PostModel.findOne({ slug }).lean<Record<string, unknown>>();
    return doc ? fromDocument(doc) : undefined;
  }
  return getPost(slug);
}

export async function findPosts() {
  const connection = await dbConnect();
  if (connection) {
    const docs = await PostModel.find({}).sort({ createdAt: -1 }).lean<Record<string, unknown>[]>();
    return docs.map(fromDocument);
  }
  return getPosts();
}
