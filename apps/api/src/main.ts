// External dependencies
import * as express from 'express';

// Module dependencies
import { t9keys } from '@testnx/t9keys';
import { results, addToDictionary, selectPrediction } from '@testnx/results';

const app = express();

app.get('/api/keys', (req, res) => {
  res.send(t9keys());
});

app.put('/api/words/:word', (req, res) => {
  res.send(addToDictionary(req.params.word));
});

app.get('/api/results/:number', (req, res) => {
  res.send(results(req.params.number));
});

app.get('/api/words/select/:word', (req, res) => {
  res.send(selectPrediction(req.params.word));
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
