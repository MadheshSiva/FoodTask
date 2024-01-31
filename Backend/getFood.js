const {mongoDB} = require('./mongoDB')
const FoodModel = require('./foodModel')
exports.getData = async(req,res) => {

try {
await mongoDB()
const response = await FoodModel.find()
res.status(200).json({
    error: false,
    response : response
})

} catch (err) {
  res.status(500).json({message : err.message})
}

}