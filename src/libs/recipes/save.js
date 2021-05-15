const { Recipe } = require('../../models')

const save = ({categories_id, ...recipe}) => Recipe.save(recipe)

module.exports = save