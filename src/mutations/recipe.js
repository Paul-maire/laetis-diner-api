const { recipes } = require('../libs')

const saveRecipe = (_, { recipe }) => recipes.save(recipe)

module.exports = {
    saveRecipe,
}