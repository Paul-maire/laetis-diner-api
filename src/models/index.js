const config = require("../../knexfile.js")
const knex = require("knex")(config)

module.exports = {
  Category: require("./category"),
  Recipe: require("./recipe"),
  RecipeCategory: require("./recipe-category"),
}
