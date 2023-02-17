import { messageValidation } from './../../../validations/message.validations';
import { CreateMessageParams, ICreateMessageRepository } from './protocols';
import { HttpRequest, HttpResponse, IService } from '../../../controllers/protocols';
import { badRequest, created, serverError } from '../../../helpers/helpers';
import { Message } from '../../../models/message';

export class CreateMessageService implements IService {
  constructor(private readonly createMessageRepository: ICreateMessageRepository) {}

  async handle(httpRequest: HttpRequest<CreateMessageParams>): Promise<HttpResponse<unknown>> {
    try {
      try {
        await messageValidation.validate(httpRequest.body);
      } catch (err) {
        return badRequest(err as string);
      }

      const bot = await this.createMessageRepository.create(httpRequest.body as CreateMessageParams);

      return created<Message>(bot);
    } catch (err) {
      return serverError();
    }
  }
}
