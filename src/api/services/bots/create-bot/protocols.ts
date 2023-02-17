import { Bot } from '../../../models/bot';

export interface CreateBotParams {
  name: string;
}

export interface ICreateBotRepository {
  create(params: CreateBotParams): Promise<Bot>;
}
