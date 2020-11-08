const mongoose = require('mongoose');

const dailyFocusSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});


const DailyFocus = mongoose.model('DailyFocus', dailyFocusSchema);
module.exports = DailyFocus;