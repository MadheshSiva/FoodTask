const FoodModel = require('./foodModel')
const {mongoDB} = require('./mongoDB')

exports.insertData = async(req, res) => {

    try {
       await mongoDB()
      const foodData = new FoodModel({
        restaurants_name : req.body.restaurants_name,
        food_name: req.body.dishes_name,
        price: req.body.price,
        distance: req.body.distance,
        delivery: req.body.delivery
      })
    const response = await foodData.save()
 res.status(200).json(
    {
        error : false,
        response: response
    }
 )

    } catch (err) {
      res.status(500).json({message : err.message})
    }


}