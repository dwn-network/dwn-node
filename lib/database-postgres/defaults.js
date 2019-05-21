module.exports = {
  initialization: {
    capSQL: true,
    promiseLib: require('bluebird'),
    noLocking: process.env.NODE_ENV === 'test',
  },
  connection: {
    host: process.env.DWN_DB_HOST || 'localhost',
    port: process.env.DWN_DB_PORT || 5432,
    database:
      process.env.DWN_DB_DATABASE || `dwn_${process.env.DWN_NETWORK_NAME}`,
    user: process.env.DWN_DB_USERNAME || 'dwn',
    password: process.env.DWN_DB_PASSWORD || 'password',
  },
}
