import express from "express";
import {
  getUser,
  getUserFriend,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const UserRouter = express.Router();

//Read

UserRouter.get("/:id", verifyToken, getUser);
UserRouter.get("/:id/friends", verifyToken, getUserFriend);
UserRouter.put(":/id:/:friends", verifyToken, addRemoveFriend);

export default UserRouter;
