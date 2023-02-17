import { IGetMessageRepository } from '../../services/messages/get-messages/protocols';
import prisma from '../../../config/prisma';
import { Message } from '../../models/message';

export class PostgresGetMessageRepository implements IGetMessageRepository {
  async getMessage(id: string): Promise<Message> {
    const message = await prisma.message.findUnique({
      where: {
        id: id,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return { ...message! };
  }

  async getMessagesByConversationId(conversationId: string): Promise<Message[]> {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: conversationId,
      },
    });

    return messages.map(({ ...rest }) => ({
      ...rest,
    }));
  }
}
