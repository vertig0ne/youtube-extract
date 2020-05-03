import express from 'express';
import cors from 'cors';

import routes from './routes/index.js';

export const app = express();

app.use(cors());
app.set('json spaces', 2);

Object.values(routes).forEach(({ name, router }) => {
  app.use(`/${name}`, router);
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'production') console.error(err);
  return res.status(500).json({ name: err.name, message: err.message });
});

app.use((req, res) => {
  res.status(404).json({ name: 'NotFound', message: 'Page Not Found' });
});

app.listen(process.env.PORT || 3000);

export default { app };
