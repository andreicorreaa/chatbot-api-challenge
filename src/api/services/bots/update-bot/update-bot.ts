import { botValidation } from '../../../validations/bot.validation';
import { HttpRequest, HttpResponse, IService } from '../../../controllers/protocols';
import { badRequest, created, serverError } from '../../../helpers/helpers';
import { Bot } from '../../../models/bot';
import { IUpdateBotRepository, UpdateBotParams } from './protocols';

export class UpdateBotService implements IService {
  constructor(private readonly updateBotRepository: IUpdateBotRepository) {}

  async handle(httpRequest: HttpRequest<UpdateBotParams>): Promise<HttpResponse<unknown>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return badRequest('Missing bot id');
      }

      try {
        await botValidation.validate(httpRequest.body);
      } catch (err) {
        return badRequest(err as string);
      }

      const bot = await this.updateBotRepository.update(id, httpRequest.body as UpdateBotParams);

      return created<Bot>(bot);
    } catch (err) {
      return serverError();
    }
  }
}
