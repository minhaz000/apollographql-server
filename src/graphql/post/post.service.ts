import Post from "./post.model";

export const getPost = async (ID: string) => {
  return await Post.find({});
};
export const createPost = async (post: any) => {
  return await Post.create(post);
};
