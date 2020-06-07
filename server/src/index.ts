import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

const app = express();
const port = 8080; // default port to listen

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});