const { Category } = require('../../models')

const save = category => Category.save(category)

module.exports = save