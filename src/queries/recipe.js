const { Recipe } = require('../models')

const recipes = _ => Recipe.all()

const recipe = (_, { id }) => Recipe.find({ id })

module.exports = {
    recipes,
    recipe,
}