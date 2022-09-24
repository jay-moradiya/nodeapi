const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/demo3', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected MONGODB !!'))
    .catch((e) => console.log(e))