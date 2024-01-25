import { createPost, getPost } from "./post.service";

const queries = {
  getPost: async (_: any, payload: { id: string }) => {
    const post = await getPost(payload.id as string);
    return post;
  },
};
const mutations = {
  createPost: async (_: any, payload: any) => {
    await createPost(payload);
    return "post is created";
  },
};

export const resolvers = { queries, mutations };
