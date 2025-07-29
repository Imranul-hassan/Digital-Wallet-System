import mongoose from "mongoose";
import { envVars } from "./app/config/env";
import { Server } from "http"
import app from "./app";


let server: Server;

const startServer = async () => {
    try {
        await mongoose.connect(envVars.DB_URL)
        console.log("connected to DB")

        server = app.listen(envVars.PORT, () => {
            console.log(`Server is listening port ${envVars.PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}


(async () => {
    await startServer()
})()