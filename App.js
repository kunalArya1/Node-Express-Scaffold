import express from "express";
import { ConnectDB } from "./db/connect.db";

const app = express();
const PORT = process.env.PORT || 3000;

// Body Parser
app.use(express.json());

app.route("/").get((req, res, next) => {
  res.send("Hello from app!😊");
});

const start = async () => {
  try {
    await ConnectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error While Connecting to Database", error);
  }
};

start();
