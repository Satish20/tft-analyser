"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    port: process.env.PORT || 8082,
    db: {
        database: process.env.DB_NAME || 'tftanalyser',
        user: process.env.DB_USER || 'tftanalyser',
        password: process.env.DB_PASS || 'tftanalyser'
    }
};
exports.default = config;
//# sourceMappingURL=config.js.map