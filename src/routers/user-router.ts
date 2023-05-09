import { Router } from "express";
import { signinSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { usersPost } from "@/controllers";


const userRouter = Router();

userRouter.post('/', validateBody(signinSchema), usersPost);

export {userRouter};