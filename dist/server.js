"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
require('dotenv').config();
const app = express_1.default();
const server = new http_1.default.Server(app);
console.log('HIii');
server.listen(3000);
const getAllUsersController_1 = __importDefault(require("./controllers/getAllUsersController"));
app.get('users', getAllUsersController_1.default);
//# sourceMappingURL=server.js.map