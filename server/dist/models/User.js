"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = exports.User = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
function UserFactory(sequelize) {
    return sequelize.define("users", {
        email: {
            type: sequelize_1.DataTypes.STRING,
            unique: true
        },
        password: sequelize_1.DataTypes.STRING
    });
}
exports.UserFactory = UserFactory;
//# sourceMappingURL=User.js.map