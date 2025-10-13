// index.ts
import config from "./app/config";
import connectToDatabase from "./app/utils/db.js";
import { createApp } from "./app";

const port = process.env.PORT || config.port;

async function main(): Promise<void> {
  try {
    // Connect to database
    await connectToDatabase();

    // Create app
    const app = await createApp();

    // Start server
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
}

main();
