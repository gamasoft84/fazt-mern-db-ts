import express from 'express';
import config from './config';
import dealerRoutes from './routes/dealer.routes';

const app = express();

app.set('port', config.PORT );

app.use(dealerRoutes);

export default app;