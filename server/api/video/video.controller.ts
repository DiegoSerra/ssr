import * as express from 'express';
import VideoDao from './video.dao';


export class VideoController {
  static getAll(req: express.Request, res: express.Response) {
    VideoDao
      ['getAll']()
      .then(videos => res.status(200).json(videos))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req: express.Request, res: express.Response, next: express.NextFunction) {
    const _video = req.body;

    VideoDao
      ['createNew'](_video)
      .then(video => res.status(200).json(video))
      .catch(error => res.status(400).json(error));
  }

  static getOne(req: express.Request, res: express.Response) {
    VideoDao
      ['getOneByQuery']({_id: req.params.id})
      .then(video => res.status(200).json(video))
      .catch(error => res.status(400).json(error));
  }
}