exports.up = knex => knex.schema.createTable('categories', t => {
	t.increments('id').index()

	t.string('name')
})

exports.down = knex => knex.schema.dropTable('categories')
