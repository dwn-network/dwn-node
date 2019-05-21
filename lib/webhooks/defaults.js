module.exports = {
  enabled: process.env.DWN_WEBHOOKS_ENABLED,
  database: {
    dialect: 'sqlite',
    storage: `${process.env.DWN_PATH_DATA}/database/webhooks.sqlite`,
    logging: process.env.DWN_DB_LOGGING,
  },
  server: {
    enabled: process.env.DWN_WEBHOOKS_API_ENABLED,
    host: process.env.DWN_WEBHOOKS_HOST || '0.0.0.0',
    port: process.env.DWN_WEBHOOKS_PORT || 4004,
    whitelist: ['127.0.0.1', '::ffff:127.0.0.1'],
    pagination: {
      limit: 100,
      include: ['/api/webhooks'],
    },
  },
}
