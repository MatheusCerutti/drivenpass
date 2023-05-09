import Joi from "joi";
import { CreateUserParams } from "@/services";

export const signinSchema = Joi.object<CreateUserParams>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required(),
})