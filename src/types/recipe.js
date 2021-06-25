const { Recipe } = require('../models')

module.exports = {
    total_time: ({preparation_time, rest_time, baking_time}) => preparation_time + rest_time + baking_time,
    categories: ({id}) => Recipe.categories(id),
    categories_id: ({id}) => Recipe.categories_id(id),
    image: () => 'https://source.unsplash.com/random/300x300/?food,dinner'
}