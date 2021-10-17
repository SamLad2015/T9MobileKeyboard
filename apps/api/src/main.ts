// External dependencies
import * as express from 'express';

// Local dependencies
import { t9KeysRoutes, resultsRoutes } from './routes';

const app = express();

[t9KeysRoutes, resultsRoutes].forEach((route) => route(app));

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
