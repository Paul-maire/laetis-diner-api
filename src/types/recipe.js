const { Recipe } = require('../models')

module.exports = {
    total_time: ({preparation_time, rest_time, baking_time}) => preparation_time + rest_time + baking_time,
    categories: ({id}) => Recipe.categories(id)
}