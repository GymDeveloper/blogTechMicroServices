import express from "express";
import { user } from "./models";
import response from "../network";
import { list } from "../store";

const mongoRouter = express.Router();

//* localhost:3001/user
//* localhost:3001/comments
mongoRouter.get("/:model", async (req, res) => {
  let model = getModel(req.params.model);
  const data = await list(model);
  return response({ res, ok: true, data });
});

function getModel(modelName) {
  if (modelName === "user") {
    return user;
  }
}

export default mongoRouter;
