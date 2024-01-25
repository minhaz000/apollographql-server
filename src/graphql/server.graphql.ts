import { ApolloServer } from "@apollo/server";
import { User } from "./user/user.index";
import { Post } from "./post/post.index";
import { product } from "./product/product.index";
const createGQLServer: any = async () => {
  const server = new ApolloServer({
    typeDefs: `
    ${User.typeDef}
    ${Post.typeDef}
    ${product.typeDef}



    type Query{
      ${User.queries}
      ${Post.queries}
      ${product.queries}
    }
    type Mutation{
      ${User.mutations}
      ${Post.mutations}
      ${product.mutations}
    }
    `,
    resolvers: {
      Query: { ...User.resolvers.queries, ...Post.resolvers.queries, ...product.resolvers.queries },
      Mutation: { ...Post.resolvers.mutations },
    },
  });
  await server.start();
  return server;
};

export default createGQLServer;
