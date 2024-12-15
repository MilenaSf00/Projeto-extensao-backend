"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const index_1 = require("./routes/index");
const AppErros_1 = require("./errors/AppErros");
require("@prisma/client");
require("./modules/projetos/container/index");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const Port = process.env.PORT || 3333;
app.use(express_1.default.json());
app.use(index_1.routes);
app.use((err, request, response, next) => {
    if (err instanceof AppErros_1.AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }
    return response.status(500).json({
        status: 'error',
        message: `Internal server error - ${err.message}`,
    });
});
app.listen(Port, () => console.log(`Server is running on port ${Port}`));
//# sourceMappingURL=server.js.map