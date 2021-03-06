import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import './controllers';
import { AppRouter } from './AppRouter';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['some-key'] }));
app.use(AppRouter.instance);

app.listen(3000, () => {
  console.log('Server started successfully at http://localhost:3000');
});
