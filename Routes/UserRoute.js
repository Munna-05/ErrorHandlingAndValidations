import express from "express";
import { TryCatch } from "../Helpers/TryCatch.js";
import httpError from "../Middlewares/httpError.js";

const router = express.Router();

const getUsers = () => 0;
const subscribers = () => 0;

router.post(
  "/test",
  TryCatch(async (req, res, next) => {
    const users = getUsers();

    if (!users) {
      throw new httpError(400, "No user found");
    }
    if (!subscribers()) {
      throw new Error("no subs");
    }
  })
);

export default router;
