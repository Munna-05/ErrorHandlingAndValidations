import httpError from "./httpError.js";

export const handleError = (error, req, res, next) => {
  if (error instanceof httpError) {
    return res.status(error.statusCode).json({message:error.message});
  }
  return res.status(500).json({message:error.message});
};
