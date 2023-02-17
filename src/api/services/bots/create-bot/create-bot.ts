import { botValidation } from '../../../validations/bot.validation';
import { HttpRequest, HttpResponse, IService } from '../../../controllers/protocols';
import { badRequest, created, serverError } from '../../../helpers/helpers';
import { Bot } from '../../../models/bot';
import { CreateBotParams, ICreateBotRepository } from './protocols';

export class CreateBotService implements IService {
  constructor(private readonly createBotRepository: ICreateBotRepository) {}

  async handle(httpRequest: HttpRequest<CreateBotParams>): Promise<HttpResponse<unknown>> {
    try {
      try {
        await botValidation.validate(httpRequest.body);
      } catch (err) {
        return badRequest(err as string);
      }

      const bot = await this.createBotRepository.create(httpRequest.body as CreateBotParams);

      return created<Bot>(bot);
    } catch (err) {
      return serverError();
    }
  }
}
