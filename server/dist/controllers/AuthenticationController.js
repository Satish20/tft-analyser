"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
function register(req, res) {
    res.send({
        message: `Hello ${req.body.email}! your user was registered`
    });
}
exports.register = register;
//# sourceMappingURL=AuthenticationController.js.map