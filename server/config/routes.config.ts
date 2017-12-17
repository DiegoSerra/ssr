'use strict';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as zlib from 'zlib';

export class RoutesConfig {
  static init(application: express.Application): void {

    const _root = process.cwd();
    const _nodeModules = '/node_modules/';
    const _clientFiles = (
      process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'staging' ||
      process.env.NODE_ENV === 'test'
    ) ? '/dist/' : '/client/';

    application.use(compression({
      level: zlib.Z_BEST_COMPRESSION,
      threshold: '1kb'
    }));

    application.use(express.static(_root + _nodeModules));
    application.use(express.static(_root + _clientFiles));
    application.use(bodyParser.json());
  }
}
