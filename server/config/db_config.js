const db_config = {
  development: {
    client: 'pg',
    connection: {
      user:     "postgresdev",
      password: "postgresdev",
      database: "lehrer_node_dev",
      host:     "localhost"
    },
    pool: {
      min: 5,
      max: 10
    }
  },
  test: {
    client: 'pg',
    connection: {
      user:     "postgresdev",
      password: "postgresdev",
      database: "lehrer_node_test",
      host:     "localhost"
    },
    pool: {
      min: 5,
      max: 10
    }
  },
};

const env = process.env['NODE_ENV'] || 'development';
module.exports = db_config[env];
