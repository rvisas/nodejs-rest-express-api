const mongoose = require('mongoose');
const moment = require('moment');

const { Schema } = mongoose;

const eventModel = new Schema(
  {
    id: { type: Number },
    type: { type: String },
    actor: {
      id: { type: Number },
      login: { type: String },
      avatar_url: { type: String }
    },
    repo: {
      id: { type: Number },
      name: { type: String },
      url: { type: String }
    },
    created_at: { type: String, default: moment.utc().format('YYYY-MM-dd HH:mm:ss') },
  }
);