// Update with your config settings.
import path from 'path'

module.exports = {

  development: {
        client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname,'src',  'database', 'database.sqlite3'),
    },
    migrations: {
      directory: path.resolve(__dirname,'src',  'database', 'migrations'),
    },
    useNullAsDefaund: true,
    // client: 'mysql',
    // connection: {
    //   host : '127.0.0.1',
    //   user : 'root',
    //   password : '',
    //   database : 'test_ts'
    // },
    // migrations: {
    //   directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    // },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
