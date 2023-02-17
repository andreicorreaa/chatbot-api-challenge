import { Message } from '../../../models/message';

export interface IGetMessageRepository {
  getMessage(id: string): Promise<Message>;
  getMessagesByConversationId(conversationId: string): Promise<Message[]>;
}
