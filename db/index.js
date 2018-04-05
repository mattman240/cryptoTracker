const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/coin');

const coinSchema = new Schema({
  time_period_start: String,
  price_close: Number,
});

const CoinModel = mongoose.model('CoinModel', coinSchema);

const dbHelpers = {
  dbSave: (start, price) => {
    const coinStats = new CoinModel({ time_period_start: start, price_close: price });
    coinStats.save((err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('data saved');
      }
    });
  },
  dbFindAll: (cb) => {
    CoinModel.find((err, data) => {
      if (err) {
        console.error(err);
        cb(err);
      } else {
        cb(null, data);
      }
    });
  },
};

module.exports = dbHelpers;
