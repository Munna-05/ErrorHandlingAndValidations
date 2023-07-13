import express from "express";
import { TryCatch } from "../Helpers/TryCatch.js";
import httpError from "../Middlewares/httpError.js";
import Joi from "joi";
import { userSchema } from "../ValidationSchemas/UserSchema.js";

const router = express.Router();

const getUsers = () => 0;
const subscribers = () => 0;


router.post(
  "/test",
  TryCatch(async (req, res, next) => {
    const users = getUsers();

    const {error ,value} = userSchema.validate(req.body)

    if (error) {
        console.log(error.details[0].message);
      throw new httpError(400, error.details[0].message);
    }else{
        console.log(value);
        return res.status(200).json(value)
    }
    if (!subscribers()) {
      throw new Error(error);
    }
  })
);

export default router;
