const { Recipe, RecipeCategory } = require('../../models')

const save = async ({categories_id, ...recipe}) => {
    const recipe_saved = await Recipe.save(recipe)

    for (category_id of categories_id) {
        RecipeCategory.save({
            recipe_id: recipe_saved.id,
            category_id
        })
    }

    return recipe_saved
}

module.exports = save