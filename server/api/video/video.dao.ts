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

// videoSchema.static('getOneByQuery', (query) => {
//   return new Promise((resolve, reject) => {
//     const _query = query;

//     Video
//       .findOne(_query)
//       .lean()
//       .exec((err, video) => {
//         err ? reject(err) : resolve(video);
//       });
//   });
// });

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

videoSchema.static('updateVisualizations', (videoId) => {
  return new Promise((resolve, reject) => {

    if (!_.isString(videoId)) {
      return reject(new TypeError('videoId is not a valid String.'));
    }

    Video
      .update(
        {_id: videoId},
        {$inc: {visualizations: 1}},
        {upsert: true}
      ).exec((err, updated) => {
      err ? reject(err) : resolve(updated);
    });
  });
});

videoSchema.static('getOneByQuery', (videoId) => {
  return new Promise((resolve, reject) => {
    Video
      .findOneAndUpdate(
        {_id: videoId},
        {$inc: {visualizations: 1}},
        {upsert: true}
      ).exec((err, updated) => {
      err ? reject(err) : resolve(updated);
    });

  });
});

Video = mongoose.model('videos', videoSchema);

export default Video;
