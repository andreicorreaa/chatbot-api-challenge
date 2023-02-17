import { serverError, ok } from '../../../helpers/helpers';
import { HttpResponse, IService } from '../../../controllers/protocols';
import { Bot } from '../../../models/bot';
import { IGetBotRepository } from './protocols';

export class GetBotsService implements IService {
  constructor(private readonly getBotsRepository: IGetBotRepository) {}

  async handle(): Promise<HttpResponse<Bot[] | string>> {
    try {
      const bots = await this.getBotsRepository.getBots();

      return ok<Bot[]>(bots);
    } catch (err) {
      return serverError();
    }
  }
}
