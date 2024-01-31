const mongoose = require('mongoose')


exports.mongoDB = async() => {
const URL = 'mongodb://localhost:27017'
try {
  await mongoose.connect(URL, {useNewUrlParser : true , useUnifiedTopology : true})
  console.log('MongoDb connected')

} catch (err) {
 console.log({message:err.message})
}

}