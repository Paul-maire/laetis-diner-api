const knex = require('../../db/knex')
const Recipe = require('./models')('recipes')

Recipe.categories = id => knex('recipes_categories').where('recipes_categories.recipe_id', id).join('categories', 'categories.id', 'recipes_categories.category_id').select('categories.*')

Recipe.categories_id = async id => {
    const categories = await knex('recipes_categories').where('recipes_categories.recipe_id', id).join('categories', 'categories.id', 'recipes_categories.category_id').select('categories.id')
    return categories.map(category => category.id)
}

module.exports = Recipe