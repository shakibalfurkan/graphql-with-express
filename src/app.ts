import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import { expressMiddleware } from "@as-integrations/express5";
import { createGraphQLServer } from "./app/graphql/graphql";
import cors from "cors";

export async function createApp(): Promise<express.Express> {
  const app = express();

  // Middleware setup
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Basic route
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      message: "Welcome to the server!",
    });
  });

  // Create GraphQL Server
  const graphqlServer = createGraphQLServer();
  await graphqlServer.start();

  // Demo middleware to check if user is admin
  const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    const user = { role: "admin" };
    if (user?.role === "admin") {
      next();
    } else {
      res.status(403).json({ message: "Forbidden" });
    }
  };

  app.use(
    "/graphql",
    isAdmin,
    expressMiddleware(graphqlServer, {
      context: async ({ req }) => ({
        token: "token",
      }),
    })
  );

  return app;
}
