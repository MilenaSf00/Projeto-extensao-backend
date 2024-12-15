"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exclude = exports.prisma = void 0;
const client_1 = require("@prisma/client");
const prisma_exclude_1 = require("prisma-exclude");
exports.prisma = new client_1.PrismaClient();
exports.exclude = (0, prisma_exclude_1.prismaExclude)(exports.prisma);
//inicinaod o prisma client
//# sourceMappingURL=client.js.map