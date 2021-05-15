exports.up = knex => knex.schema.createTable('recipes_categories', t => {
	t.integer('recipe_id').references('id').inTable('recipes')
	t.integer('category_id').references('id').inTable('categories')
})

exports.down = knex => knex.schema.dropTable('recipes_categories')
