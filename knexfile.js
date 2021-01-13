// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knex_test',
      user: "postgres",
      password: "23516496"

    },
    migrations: {
      tableName: 'knex_migration',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
      
    }
  }
}