const { Category } = require('../models')

module.exports = {
    recipes: ({id}) => Category.recipes(id)
}