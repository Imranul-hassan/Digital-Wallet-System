import { Router } from "express";



const router = Router()
router.post("/register",  UserControllers.createUser)

export const UserRoutes = router