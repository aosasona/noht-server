"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    jwt: {
        secret: process.env.JWT_SECRET || "secret",
        expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    },
};
exports.default = config;
