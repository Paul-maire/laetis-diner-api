const { categories } = require('../libs')

const saveCategory = (_, { category }) => categories.save(category)

module.exports = {
    saveCategory,
}