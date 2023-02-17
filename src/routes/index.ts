import { Router } from 'express';
import botsRouter from './bots.routes';
import messagesRouter from './messages.routes';

const router = Router();

router.get('/', (req, res) => {
  res.send({ message: 'Vivo' });
});

router.use('/bots', botsRouter);
router.use('/messages', messagesRouter);

export default router;
