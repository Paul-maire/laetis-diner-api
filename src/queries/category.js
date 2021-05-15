const { Category } = require('../models')

const categories = _ => Category.all()

const category = (_, { id }) => Category.find({ id })

module.exports = {
    categories,
    category,
}