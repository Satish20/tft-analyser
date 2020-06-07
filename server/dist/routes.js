"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const AuthenticationController_1 = require("./controllers/AuthenticationController");
function routes(app) {
    app.post("/register", AuthenticationController_1.register);
}
exports.routes = routes;
//# sourceMappingURL=routes.js.map