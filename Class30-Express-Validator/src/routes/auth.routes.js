import { Router } from "express"

import { registerValidation } from "../validation/auth.valitator.js";
import { registerUser } from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/register", registerValidation, registerUser)

export default authRouter