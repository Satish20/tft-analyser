import { Express } from "express-serve-static-core";
import { register } from "./controllers/AuthenticationController"

export function routes(app: Express) {
    app.post("/register", register)
}