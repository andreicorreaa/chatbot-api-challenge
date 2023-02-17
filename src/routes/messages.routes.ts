import { createMessage, getMessage, getMessagesByConversationId } from '../api/controllers/message.controller';
import { Router } from 'express';

const messagesRouter = Router();

messagesRouter.post('/', createMessage);
messagesRouter.get('/:id', getMessage);
messagesRouter.get('/conversationId/:conversationId', getMessagesByConversationId);

export default messagesRouter;
