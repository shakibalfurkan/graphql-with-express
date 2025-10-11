import config from "./app/config";
import { expressMiddleware } from "@as-integrations/express5";
import connectToDatabase from "./app/utils/db.js";
import express from "express";
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

    //   start the Apollo server
    // await connectGraphQL(Number(port));

    // Note you must call `start()` on the `ApolloServer`
    // instance before passing the instance to `expressMiddleware`
    await graphqlServer.start();

    app.get("/", (req, res) => {
      res.status(200).json({
        success: true,
        message: "Welcome to the server!",
      });
    });

    // Specify the path to mount the server
    app.use("/graphql", expressMiddleware(graphqlServer));

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
