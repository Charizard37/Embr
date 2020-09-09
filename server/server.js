import express from 'express';

import models, { sequlize } from './models';

const app = express();


sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`),
  });
});