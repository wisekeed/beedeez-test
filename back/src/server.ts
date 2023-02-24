import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import StationsRoute from '@routes/stations.route';
import validateEnv from '@utils/validateEnv';

import { runWorker } from './worker';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(), new StationsRoute()]);

app.listen();

runWorker();
