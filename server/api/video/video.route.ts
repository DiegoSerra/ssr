import * as express from 'express';

export class VideoRoutes {
  
  static init(router:express.Router){
    router
      .route('/api/video')
      .get('')
      .post('');
  }

}