import 'reflect-metadata';
import 'express-async-errors';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import { routes } from './routes/index';
import { AppError } from './errors/AppErros'; 
import '@prisma/client';
import './modules/projetos/container/index'; 

const app = express();

app.use(cors()); 

const Port = process.env.PORT ||3333;

app.use(express.json()); 

app.use(routes); 


app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }
    
    
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(Port, () => console.log(`Server is running on port ${Port}`));
