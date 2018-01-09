const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test_P-Dex',
{ useMongoClient: true })

mongoose.Promise = Promise
module.exports = mongoose
// makes mongoose available elsewhere
