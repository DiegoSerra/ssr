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
      .exec((err, users) => {
        err ? reject(err) : resolve(users);
      });
  });
});

videoSchema.static('getOneByQuery', (query) => {
  return new Promise((resolve, reject) => {
    const _query = query;

    Video
      .findOne(_query)
      .lean()
      .exec((err, user) => {
        err ? reject(err) : resolve(user);
      });
  });
});

Video = mongoose.model('videos', videoSchema);

export default Video;
