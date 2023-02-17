import { Router } from 'express';
import { createBot, deleteBot, getBots, updateBot } from '../api/controllers/bot.controller';

const botsRouter = Router();

botsRouter.get('/', getBots);
botsRouter.post('/', createBot);
botsRouter.put('/:id', updateBot);
botsRouter.delete('/:id', deleteBot);

export default botsRouter;
