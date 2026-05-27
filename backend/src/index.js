import env from "dotenv";
env.config({
  path: "./.env",
});

import app from "./app.js";
import connectDb from "./db/connect_db.js";

const port = process.env.PORT || 8000;

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("❌ MongoDB connection failed", error);
    process.exit(1);
  });