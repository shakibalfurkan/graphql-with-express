import config from "./app/config";
import { expressMiddleware } from "@as-integrations/express5";
import connectToDatabase from "./app/utils/db.js";
import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import { connectGraphQL } from "./app/graphql/graphql";
import cors from "cors";

const port = process.env.PORT || config.port;

// main function to start the server

async function main(): Promise<void> {
  try {
    const app = express();

    // Middlewares
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // connect to the database
    await connectToDatabase();
    const graphqlServer = connectGraphQL();

    // Note you must call `start()` on the `ApolloServer`
    // instance before passing the instance to `expressMiddleware`
    await graphqlServer.start();

    app.use(
      expressMiddleware(graphqlServer, {
        context: async ({ req, res }) => ({
          token: "token", // await getTokenForRequest(req) --- replace with your logic,
        }),
      })
    );

    app.get("/", (req, res) => {
      res.status(200).json({
        success: true,
        message: "Welcome to the server!",
      });
    });

    const isAdmin = (req: Request, res: Response, next: NextFunction) => {
      const user = { role: "admin" }; // this should come from your auth logic
      if (user?.role === "admin") {
        next();
      } else {
        res.status(403).json({ message: "Forbidden" });
      }
    };

    // Specify the path to mount the server
    app.use("/graphql", isAdmin, expressMiddleware(graphqlServer));

    // start the express server
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  } catch (err) {
    // log any errors that occur during startup
    console.log(err);
  }
}

// call the main function
main();
