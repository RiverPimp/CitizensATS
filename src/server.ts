import "reflect-metadata";
import * as Express from "express";
import { ApolloServer } from "apollo-server-express";
import * as cors from "cors";
import { buildSchema } from "type-graphql";
import { CharacterResolver, PlanetResolver } from "./resolvers";

const PORT = process.env.PORT || 5000;


//Initialize Apollo server and apply express middleware.
//Starts up graphql playground (development only).
 
const main = async () => {
  
  //Resolvers used to build schema.
   
  const schema = await buildSchema({
    resolvers: [CharacterResolver, PlanetResolver],
  });

  const apolloServer = new ApolloServer({ schema, playground: true });
  const app = Express();
  //Enables cross-origin resource sharing.
  app.use(cors());

  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(
      `Server started on port ${PORT}, visit: http://localhost:${PORT}/graphql to test queries`
    );
  });
};

main();
