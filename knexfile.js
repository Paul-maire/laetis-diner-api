module.exports = {
  client: 'pg',
  connection: { 
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
  },
  migrations: {
    directory: `${__dirname}/db/migrations`
  },
  seeds: {
    directory: `${__dirname}/db/seeds`
  },
}