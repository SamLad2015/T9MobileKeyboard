import * as express from 'express';
import { t9keys } from '@testnx/t9keys'

const app = express();

app.get('/api', (req, res) => {
  res.send(t9keys());
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
