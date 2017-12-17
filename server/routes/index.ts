import * as express from 'express';

import {StaticDispatcher} from '../commons/static/index';
import {ErrorHandler} from '../config/error-handler.config';
import { VideoRoutes } from '../api/video/video.route';

export class Routes {
  static init(app: express.Application, router: express.Router) {

    VideoRoutes.init(router);

    ErrorHandler.notFound(router);

    router
      .route('*')
      .get(StaticDispatcher.sendIndex);

    app.use('/', router);
  }
}
