'use strict';

import * as mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  time: String,
  authorId: String,
  uploadDate: Date,
});

export default (VideoSchema);

