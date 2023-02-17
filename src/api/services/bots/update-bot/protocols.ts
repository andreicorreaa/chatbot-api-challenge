import { Bot } from '../../../models/bot';

export interface UpdateBotParams {
  name: string;
}

export interface IUpdateBotRepository {
  update(id: string, params: UpdateBotParams): Promise<Bot>;
}
