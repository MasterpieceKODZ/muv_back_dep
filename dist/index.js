import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import e from "express";
import { createServer } from "http";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { graphqlTypeDef } from "./graphql/graphql.type.def.js";
import { resolversMap } from "./graphql/resolvers/resolvers.map.js";
import authRouter from "./rest_endpoints/auth/router.js";
import serverless from "serverless-http";
import prismaClient from "./client.js";

const app = e();
app.use(e.json());
const httpServer = createServer(app);
const apolloServer = new ApolloServer({
	typeDefs: graphqlTypeDef,
	resolvers: resolversMap,
	plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await apolloServer.start();
app.get("/", async (req, res) => {
	res.send("MUVEES BACKEND REACHED SUCCESSFULLY");
});
// AUTHENTICATION
app.use("/auth", authRouter);
// GRAPH-QL
app.use("/graphql", expressMiddleware(apolloServer));

export const handler = serverless(app);
