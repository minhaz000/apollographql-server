import Post from "./product.model";

export const getProductWithFilter = async (ID: string) => {
  console.log(ID);
  return await Post.find({});
};
export const createPost = async (post: any) => {
  return await Post.create(post);
};
