import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import db from "./models";
import config from "./config/config";

const app = express();
const port = 8082; // default port to listen

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

import { routes } from './routes'
routes(app)


db.sync().then(() => {
    // start the Express server
    app.listen(config.port, () => {
        // tslint:disable-next-line:no-console
        console.log(`server started at http://localhost:${port}`);
    });
})

