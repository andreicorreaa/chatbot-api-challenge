import { badRequest, ok, serverError } from '../../../helpers/helpers';
import { Bot } from '../../../models/bot';
import { HttpRequest, HttpResponse, IService } from './../../../controllers/protocols';
import { IDeleteBotRepository } from './protocols';

export class DeleteBotService implements IService {
  constructor(private readonly deleteBotRepository: IDeleteBotRepository) {}
  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Bot | string>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return badRequest('Missing bot id');
      }

      const bot = await this.deleteBotRepository.delete(id);

      return ok<Bot>(bot);
    } catch (error) {
      return serverError();
    }
  }
}
