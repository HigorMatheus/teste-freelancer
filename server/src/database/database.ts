
import Knex from 'knex'

const DB= Knex({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'test_ts'
    }
});

export default DB