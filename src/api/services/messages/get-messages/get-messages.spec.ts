import { HttpStatusCode } from '../../../controllers/protocols';
import { describe, expect, it, vi } from 'vitest';
import { PostgresGetMessageRepository } from '../../../repositories/message/postgres-get-messages';
import { GetMessageService } from './get-messages';
import { randomUUID } from 'crypto';

describe('get-bots service', () => {
  it('should get badRequest', async () => {
    const postgresGetBotRepository = new PostgresGetMessageRepository();
    const getBotsService = new GetMessageService(postgresGetBotRepository);
    const { statusCode } = await getBotsService.handle({});

    expect(statusCode).toEqual(HttpStatusCode.BAD_REQUEST);
  });

  it('should get ok', async () => {
    const postgresGetBotRepository = new PostgresGetMessageRepository();
    const getBotsService = new GetMessageService(postgresGetBotRepository);
    const { statusCode } = await getBotsService.handle({ params: { id: randomUUID() } });

    expect(statusCode).toEqual(HttpStatusCode.OK);
  });
});
