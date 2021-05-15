const recipes = []

exports.seed = knex => {
    return knex('recipes')
        .del()
        .then(_ => knex('recipes').insert(recipes))
}
