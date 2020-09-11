var knex = require('knex')({
    client: 'postgres',
    connection: {
      host : 'localhost',
      user : 'techdev',
      password : 'ilfr741852',
      database : 'apiusers'
    }
  });

module.exports = knex