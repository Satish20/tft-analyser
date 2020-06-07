"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
const port = 8082; // default port to listen
app.use(morgan_1.default('combined'));
app.use(body_parser_1.default.json());
app.use(cors_1.default());
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.post("/register", (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! your user was registered`
    });
});
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map