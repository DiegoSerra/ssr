'use strict';

import * as mongoose from 'mongoose';
import videoSchema from './video.model';
import * as _ from 'lodash';

let Video;

videoSchema.static('getAll', (query?) => {
  return new Promise((resolve, reject) => {
    const _query = query || {};

    Video
      .find(_query)
      .lean()
      .exec((err, videos) => {
        err ? reject(err) : resolve(videos);
      });
  });
});

videoSchema.static('getOneByQuery', (query) => {
  return new Promise((resolve, reject) => {
    const _query = query;

    Video
      .findOne(_query)
      .lean()
      .exec((err, video) => {
        err ? reject(err) : resolve(video);
      });
  });
});

videoSchema.static('createNew', (video) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(video)) {
      return reject(new TypeError('Is not a valid object.'));
    }

    const _something = new Video(video);

    _something.save((err, saved) => {
      err ? reject(err) : resolve(saved);
    });
  });
});

Video = mongoose.model('videos', videoSchema);

export default Video;
