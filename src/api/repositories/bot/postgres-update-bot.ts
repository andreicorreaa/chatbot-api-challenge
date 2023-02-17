import { IUpdateBotRepository, UpdateBotParams } from '../../services/bots/update-bot/protocols';
import prisma from '../../../config/prisma';
import { Bot } from '../../models/bot';

export class PostgresUpdateBotRepository implements IUpdateBotRepository {
  async update(id: string, data: UpdateBotParams): Promise<Bot> {
    const bot = await prisma.bot.update({
      where: {
        id: id,
      },
      data: {
        name: data.name,
      },
    });

    return { ...bot };
  }
}
