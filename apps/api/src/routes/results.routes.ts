import { results, selectPrediction } from '@testnx/results';

export const resultsRoutes = (app: any) => {
  app.get('/api/results/:number', (req, res) => {
    res.send(results(req.params.number));
  });

  app.get('/api/words/select/:word', (req, res) => {
    res.send(selectPrediction(req.params.word));
  });
}

export default resultsRoutes;
