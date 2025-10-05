import { server } from "./app.js";
// import config from "./app/config";
import connectToDatabase from "./app/utils/db.js";
import { startStandaloneServer } from "@apollo/server/standalone";

// const port = process.env.PORT || config.port;

// main function to start the server

async function main(): Promise<void> {
  try {
    // connect to the database
    await connectToDatabase();
    // start the express server
    // app.listen(process.env.PORT || config.port, () => {
    //   console.log(`app is listening on port ${config.port}`);
    // });

    //   start the Apollo server
    const { url } = await startStandaloneServer(server, {
      listen: { port: 3000 },
    });

    console.log(`🚀  Server ready at: ${url}`);
  } catch (err) {
    // log any errors that occur during startup
    console.log(err);
  }
}

// call the main function
main();
