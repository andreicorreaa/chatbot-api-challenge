import { PostgresGetBotRepository } from '../repositories/bot/postgres-get-bot';
import { GetBotsService } from '../services/bots/get-bots/get-bots';
import { Request, Response } from 'express';
import { CreateBotService } from '../services/bots/create-bot/create-bot';
import { PostgresCreateBotRepository } from '../repositories/bot/postgres-create-bot';
import { PostgresUpdateBotRepository } from '../repositories/bot/postgres-update-bot';
import { UpdateBotService } from '../services/bots/update-bot/update-bot';
import { PostgresDeleteBotRepository } from '../repositories/bot/postgres-delete-bot';
import { DeleteBotService } from '../services/bots/delete-bot/delete-bot';

export const getBots = async (_: Request, res: Response) => {
  const postgresGetBotRepository = new PostgresGetBotRepository();

  const getBotsService = new GetBotsService(postgresGetBotRepository);

  const { body, statusCode } = await getBotsService.handle();

  res.status(statusCode).send(body);
};

export const createBot = async (req: Request, res: Response) => {
  const postgresGetBotRepository = new PostgresCreateBotRepository();

  const createBotsService = new CreateBotService(postgresGetBotRepository);

  const { body, statusCode } = await createBotsService.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
};

export const updateBot = async (req: Request, res: Response) => {
  const postgresUpdateBotRepository = new PostgresUpdateBotRepository();

  const updateBotService = new UpdateBotService(postgresUpdateBotRepository);

  const { body, statusCode } = await updateBotService.handle({
    params: req.params,
    body: req.body,
  });

  res.status(statusCode).send(body);
};

export const deleteBot = async (req: Request, res: Response) => {
  const postgresDeleteBotRepository = new PostgresDeleteBotRepository();

  const deleteBotService = new DeleteBotService(postgresDeleteBotRepository);

  const { body, statusCode } = await deleteBotService.handle({
    params: req.params,
  });

  res.status(statusCode).send(body);
};
