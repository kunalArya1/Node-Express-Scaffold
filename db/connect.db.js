/**
 *
 * Dummy
 *
 * You Can start writing your code.
 * Happy Coding 😊
 *
 */

// Database Connection code

import mongoose from "mongoose";

const ConnectDB = async (MongoDB_URL) => {
 await mongoose.connect(MongoDB_URL).then(() => {
    console.log("DataBase Connected Successfully");
  });
};

export { ConnectDB };
