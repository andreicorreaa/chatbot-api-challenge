import { GetMessageService } from './../services/messages/get-messages/get-messages';
import { PostgresGetMessageRepository } from '../repositories/message/postgres-get-messages';
import { Request, Response } from 'express';
import { PostgresCreateMessageRepository } from '../repositories/message/postgres-create-message';
import { CreateMessageService } from '../services/messages/create-message/create-message';

export const getMessage = async (req: Request, res: Response) => {
  const postgresGetMessageRepository = new PostgresGetMessageRepository();

  const getMessageService = new GetMessageService(postgresGetMessageRepository);

  const { body, statusCode } = await getMessageService.handle({
    params: req.params,
  });

  res.status(statusCode).send(body);
};

export const getMessagesByConversationId = async (req: Request, res: Response) => {
  const postgresGetMessageRepository = new PostgresGetMessageRepository();

  const getMessageService = new GetMessageService(postgresGetMessageRepository);

  const { body, statusCode } = await getMessageService.getMessagesByConversationId({
    params: req.params,
  });

  res.status(statusCode).send(body);
};

export const createMessage = async (req: Request, res: Response) => {
  const postgresGetMessageRepository = new PostgresCreateMessageRepository();

  const createMessageService = new CreateMessageService(postgresGetMessageRepository);

  const { body, statusCode } = await createMessageService.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
};
