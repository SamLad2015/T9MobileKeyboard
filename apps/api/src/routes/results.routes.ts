import { results, selectPrediction } from '@testnx/results';
import { Express } from 'express';

export const resultsRoutes = (app: Express): void => {
  app.get('/api/results/:number', (req, res) => {
    res.send(results(req.params.number));
  });

  app.get('/api/words/select/:word', (req, res) => {
    res.send(selectPrediction(req.params.word));
  });
};

export default resultsRoutes;
