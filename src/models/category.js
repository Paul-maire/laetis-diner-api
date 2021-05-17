const knex = require('../../db/knex')
const Category = require('./models')('categories')

Category.recipes = id => knex('recipes_categories')
	.where('recipes_categories.category_id', id)
	.join('recipes', 'recipes.id', 'recipes_categories.recipe_id')
	.select('recipes.*')

module.exports = Category