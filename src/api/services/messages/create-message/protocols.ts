import { Message } from './../../../models/message';

export interface CreateMessageParams {
  conversationId: string;
  timestamp: Date;
  from: string;
  to: string;
  text: string;
}

export interface ICreateMessageRepository {
  create(params: CreateMessageParams): Promise<Message>;
}
