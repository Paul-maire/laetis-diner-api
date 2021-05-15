const casual = require('casual').fr_FR

module.exports = () => ({
    id: casual.integer(1),
    title: casual.first_name,
    difficulty: casual.random_element(['recipes.difficulty.easy', 'recipes.difficulty.normal', 'recipes.difficulty.difficult']),
}) 