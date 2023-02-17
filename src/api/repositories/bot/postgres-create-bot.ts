import prisma from '../../../config/prisma';
import { Bot } from '../../models/bot';
import { CreateBotParams, ICreateBotRepository } from '../../services/bots/create-bot/protocols';

export class PostgresCreateBotRepository implements ICreateBotRepository {
  async create(data: CreateBotParams): Promise<Bot> {
    const bot = await prisma.bot.create({
      data: {
        name: data.name,
      },
    });

    return { ...bot };
  }
}
