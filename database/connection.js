var knex = require('knex')({
    client: 'postgres',
    connection: {
      host : 'localhost',
      user : 'tekdreher',
      password : 'ilfr741852',
      database : 'apiusersjwt'
    }
  });

module.exports = knex