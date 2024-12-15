import 'reflect-metadata';
import 'express-async-errors';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import { routes } from './routes/index';
import { AppError } from './errors/AppErros'; // Certifique-se que o caminho esteja correto
import '@prisma/client';
import './modules/projetos/container/index'; // Certifique-se que o caminho esteja correto

const app = express();

app.use(cors()); // Habilita CORS para permitir requisições de outras origens

const Port = process.env.PORT ||3333;

app.use(express.json()); // Middleware para analisar o corpo da requisição como JSON

app.use(routes); // Suas rotas

// Middleware para tratamento de erros
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
