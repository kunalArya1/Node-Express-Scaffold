/**
 *
 * Dummy
 *
 * You Can start writing your code.
 * Happy Coding 😊
 *
 */

import express from "express";
import { homePage } from "../controllers/user.controllers";

const router = express.Router();

router.route("/api/v1/user").get(homePage);

export default router;
