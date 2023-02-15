require('dotenv-flow').config();
require('express-async-errors');
const path = require('path');
const cors = require('cors');
const Gun = require('gun');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const fallback = require('express-history-api-fallback');

const { name, version } = require('../package.json');
const logger = require('./libs/logger');
const env = require('./libs/env');

const app = express();

app.set('trust proxy', true);
app.use(cookieParser());
app.use(express.json({ limit: '1 mb' }));
app.use(express.urlencoded({ extended: true, limit: '1 mb' }));

app.use(Gun.serve);
app.use(cors());

const router = express.Router();
router.use('/api', require('./routes'));
app.use(router);

const isProduction = process.env.NODE_ENV === 'production' || process.env.ABT_NODE_SERVICE_ENV === 'production';

if (isProduction) {
  const staticDir = path.resolve(__dirname, '../dist');
  app.use(compression());
  app.use(express.static(staticDir, { maxAge: '30d', index: false }));
  app.use(fallback('index.html', { root: staticDir }));

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).send('Something broke!');
  });
}

const port = parseInt(process.env.BLOCKLET_PORT, 10);

const server = app.listen(port, (err) => {
  if (err) throw err;
  logger.info(`> ${name} v${version} ready on ${port}`);
  logger.info('> gun server ready on /gun');
});

const gun = Gun({ web: server, file: path.join(env.dataDir, 'gun.json') });

module.exports = { gun, server, app };
