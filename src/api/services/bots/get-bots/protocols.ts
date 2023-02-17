import { Bot } from '../../../models/bot';

export interface IGetBotRepository {
  getBots(): Promise<Bot[]>;
}
