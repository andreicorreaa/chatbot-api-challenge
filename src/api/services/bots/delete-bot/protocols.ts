import { Bot } from '../../../models/bot';

export interface IDeleteBotRepository {
  delete(id: string): Promise<Bot>;
}
