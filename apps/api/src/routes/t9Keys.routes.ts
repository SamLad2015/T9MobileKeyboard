// External dependencies
import { Express } from 'express';

// Module dependencies
import { addToDictionary } from '@testnx/results';

// Local dependencies
import { t9keys } from '../../../../libs/t9keys/src/lib/t9keys';

export const t9KeysRoutes = (app: Express): void => {
  app.get('/api/keys', (req, res) => {
    res.send(t9keys());
  });

  app.put('/api/words/:word', (req, res) => {
    addToDictionary(req.params.word);
    res.sendStatus(200);
  });
};

export default t9KeysRoutes;

