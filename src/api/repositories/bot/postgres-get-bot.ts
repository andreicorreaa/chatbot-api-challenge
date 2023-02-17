import prisma from '../../../config/prisma';
import { Bot } from '../../models/bot';
import { IGetBotRepository } from '../../services/bots/get-bots/protocols';

export class PostgresGetBotRepository implements IGetBotRepository {
  async getBots(): Promise<Bot[]> {
    const bots = await prisma.bot.findMany();

    return bots.map(({ ...rest }) => ({
      ...rest,
    }));
  }
}
