import prisma from '../../../config/prisma';
import { Bot } from '../../models/bot';
import { IDeleteBotRepository } from '../../services/bots/delete-bot/protocols';

export class PostgresDeleteBotRepository implements IDeleteBotRepository {
  async delete(id: string): Promise<Bot> {
    const bot = await prisma.bot.delete({
      where: {
        id: id,
      },
    });

    return { ...bot };
  }
}
