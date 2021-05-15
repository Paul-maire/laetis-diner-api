module.exports = table => knex => ({
	// Methods
	all(where = null) {
		const query = this.table()
			.select('*')

		if (where)
			query.where(where)

		return query
	},
	find(where) {
		return this.table()
			.select('*')
			.first()
			.where(where)
	},
	async insert(entity) {
		const [ result ] = await this.table()
			.insert(entity, '*')

		return result
	},
	async update(entity, where) {
		const [ result ] = await this.table()
			.update(entity, '*')
			.where(where)

		return result
	},
	save(entity, where) {
		return where
			? this.update(entity, where)
			: this.insert(entity)
	},
	// Utils
	table: _ => knex(table)
})