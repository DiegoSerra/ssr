'use strict';

import * as express from 'express';
import { VideoController } from './video.controller';

export class VideoRoutes {
  
  static init(router: express.Router){
    router
      .route('/api/video')
      .get(VideoController.getAll)
      .post(VideoController.createNew);

    router
      .route('/api/video/:id')
      .get(VideoController.getOne);
  }

}