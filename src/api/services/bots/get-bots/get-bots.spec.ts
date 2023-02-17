import { HttpStatusCode } from './../../../controllers/protocols';
import { PostgresGetBotRepository } from './../../../repositories/bot/postgres-get-bot';
import { describe, expect, it, vi } from 'vitest';
import { GetBotsService } from './get-bots';

describe('get-bots service', () => {
  it('should get statusCode 200', async () => {
    const postgresGetBotRepository = new PostgresGetBotRepository();
    const getBotsService = new GetBotsService(postgresGetBotRepository);
    const { body, statusCode } = await getBotsService.handle();

    expect(statusCode).toEqual(HttpStatusCode.OK);
  });
});
