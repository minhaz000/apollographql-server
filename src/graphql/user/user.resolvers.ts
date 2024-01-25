import { getUser } from "./user.service";

const queries = {
  getUser: async (_: any, payload: { id: string }) => {
    return await getUser(payload.id as string);
  },
};
const mutations = {};

export const resolvers = { queries, mutations };
