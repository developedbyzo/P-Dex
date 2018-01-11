const mongoose = require('mongoose')

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/test_P-Dex')
}

mongoose.Promise = Promise
module.exports = mongoose
// makes mongoose available elsewhere
