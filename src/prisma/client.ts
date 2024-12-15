import {PrismaClient} from "@prisma/client"; 
import { prismaExclude } from "prisma-exclude";
export const prisma = new PrismaClient();
export const exclude = prismaExclude(prisma);
//inicinaod o prisma client
