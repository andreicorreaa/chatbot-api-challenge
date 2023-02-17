import { CreateMessageParams, ICreateMessageRepository } from '../../services/messages/create-message/protocols';
import prisma from '../../../config/prisma';
import { Message } from '../../models/message';

export class PostgresCreateMessageRepository implements ICreateMessageRepository {
  async create(data: CreateMessageParams): Promise<Message> {
    const bot = await prisma.message.create({
      data: {
        conversationId: data.conversationId,
        timestamp: data.timestamp,
        from: data.from,
        to: data.to,
        text: data.text,
      },
    });

    return { ...bot };
  }
}
