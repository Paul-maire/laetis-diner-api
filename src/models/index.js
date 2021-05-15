const config = require("../../knexfile.js")
const knex = require("knex")(config)

module.exports = {
  Category: require("./category")(knex),
  Recipe: require("./recipe")(knex),
}
