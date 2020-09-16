
import Knex from 'knex'
import path from 'path'

const DB= Knex({
       client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite3'),
  },
  useNullAsDefault: true,
    // client: 'mysql',
    // connection: {
    //   host : '127.0.0.1',
    //   user : 'root',
    //   password : '',
    //   database : 'test_ts'
    // }
});

export default DB