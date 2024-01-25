import { createPost, getProductWithFilter } from "./product.service";

const queries = {
  getProduct: async (_: any, payload: any) => {
    // const post = await getProductWithFilter(payload);
    console.log(payload);
    return "me is reun";
  },
};
const mutations = {
  createProduct: async (_: any, payload: any) => {
    await createPost(payload);
    return "post is created";
  },
};

export const resolvers = { queries, mutations };
