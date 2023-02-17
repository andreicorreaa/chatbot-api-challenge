import { IGetMessageRepository } from './protocols';
import { serverError, ok, badRequest } from '../../../helpers/helpers';
import { HttpRequest, HttpResponse, IService } from '../../../controllers/protocols';
import { Message } from '../../../models/message';

export class GetMessageService implements IService {
  constructor(private readonly getMessageRepository: IGetMessageRepository) {}

  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Message | string>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return badRequest('Missing message id');
      }

      const message = await this.getMessageRepository.getMessage(id);

      return ok<Message>(message);
    } catch (err) {
      return serverError();
    }
  }

  async getMessagesByConversationId(httpRequest: HttpRequest<any>): Promise<HttpResponse<Message[] | string>> {
    try {
      const conversationId = httpRequest?.params?.conversationId;

      if (!conversationId) {
        return badRequest('Missing conversationId id');
      }

      const messages = await this.getMessageRepository.getMessagesByConversationId(conversationId);

      return ok<Message[]>(messages);
    } catch (err) {
      return serverError();
    }
  }
}
