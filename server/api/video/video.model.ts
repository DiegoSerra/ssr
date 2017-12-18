'use strict';

import * as mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  time: String,
  path: String,
  author: {
    _id: String,
    name: String,
  },
  uploadDate: {
    type: Date,
    default: Date.now
  },
  visualizations: {
    type: Number,
    default: 0
  }
});

export default (VideoSchema);

