const knexfile = require('../../knexfile')
const knex = require('Knex')(knexfile['development'])

module.exports = knex