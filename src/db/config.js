module.exports = {
  development: {
    username: null,
    password: null,
    database: 'test-dev',
    host: 'localhost',
    dialect: 'postgres',
    seederStorage: 'json',
    seederStoragePath: 'src/db/dev_seed_sequelize_data.json',
  },
  test: {
    username: 'postgres',
    password: 'password',
    database: 'test-test',
    host: 'localhost',
    dialect: 'postgres',
    seederStorage: 'json',
    seederStoragePath: 'src/db/test_seed_sequelize_data.json',
  },
  production: {
    username: process.env.DB_USER || '',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || '',
    host: process.env.DB_HOSTNAME || '',
    dialect: 'postgres',
    seederStorage: 'json',
    seederStoragePath: 'src/db/prod_seed_sequelize_data.json',
  },
  stage: {
    username: process.env.DB_USER || '',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || '',
    host: process.env.DB_HOSTNAME || '',
    dialect: 'postgres',
    seederStorage: 'json',
    seederStoragePath: 'src/db/prod_seed_sequelize_data.json',
  },
};
