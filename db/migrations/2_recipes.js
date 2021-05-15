exports.up = knex => knex.schema.createTable('recipes', t => {
	t.increments('id').index()

	t.string('title')

	t.enu('difficulty', [
		'recipes.difficulty.easy',
		'recipes.difficulty.normal',
		'recipes.difficulty.difficult'
	])
	
	t.boolean('done').defaultTo(false)

	t.integer('preparation_time').defaultTo(0)
	t.integer('rest_time').defaultTo(0)
	t.integer('baking_time').defaultTo(0)
	t.integer('servings').defaultTo(1)

	t.specificType('ingredients', 'varchar[]')
	t.specificType('utensils', 'varchar[]')
	t.specificType('preparation_steps', 'varchar[]')

	t.text('notes')
})

exports.down = knex => knex.schema.dropTable('recipes')
