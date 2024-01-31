const moongose = require('mongoose')

const foodSchema = moongose.Schema(
    {
        restaurants_name: {
            type: String, require: true
        },
        food_name: {
            type: String,
            require: true
        },
        price: {
            type: String,
            require: true
        },
        distance: {
            type: String,
            require: true
        },
        delivery: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
)

const FoodModel = moongose.model('Food',foodSchema)

module.exports = FoodModel