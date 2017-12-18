import * as express from 'express';
import VideoDao from './video.dao';
import * as fs from 'fs';

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
      .then(video => {
        const path = video.path;
        const stat = fs.statSync(path)
        const fileSize = stat.size
        const range = req.headers.range
        if (range) {
          const parts = range.replace(/bytes=/, "").split("-")
          const start = parseInt(parts[0], 10)
          const end = parts[1] 
            ? parseInt(parts[1], 10)
            : fileSize-1
          const chunksize = (end-start)+1
          const file = fs.createReadStream(path, {start, end})
          const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
            ...video
          }
          res.status(206).json(head);
          file.pipe(res);
        } else {
          const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
            ...video
          }
          res.status(200).json(head);
          fs.createReadStream(path).pipe(res)
        }         
      })
      .catch(error => console.log(error));
  }
}