module.exports = {
  '@dwn/event-emitter': {},
  '@dwn/config': {},
  '@dwn/logger-winston': {
    transports: {
      console: {
        options: {
          level: process.env.DWN_LOG_LEVEL || 'debug',
        },
      },
      dailyRotate: {
        options: {
          level: process.env.DWN_LOG_LEVEL || 'debug',
        },
      },
    },
  },
  '@dwn/database-postgres': {
    connection: {
      host: process.env.DWN_DB_HOST || 'localhost',
      port: process.env.DWN_DB_PORT || 5432,
      database:
        process.env.DWN_DB_DATABASE || `dwn_${process.env.DWN_NETWORK_NAME}`,
      user: process.env.DWN_DB_USERNAME || 'dwn',
      password: process.env.DWN_DB_PASSWORD || 'password',
    },
  },
  '@dwn/transaction-pool-mem': {
    enabled: !process.env.DWN_TRANSACTION_POOL_DISABLED,
    maxTransactionsPerSender:
      process.env.DWN_TRANSACTION_POOL_MAX_PER_SENDER || 300,
    allowedSenders: [],
  },
  '@dwn/p2p': {
    host: process.env.DWN_P2P_HOST || '0.0.0.0',
    port: process.env.DWN_P2P_PORT || 4102,
    whitelist: ['127.0.0.1', '::ffff:127.0.0.1'],
  },
  '@dwn/blockchain': {
    fastRebuild: false,
  },
  '@dwn/api': {
    enabled: !process.env.DWN_API_DISABLED,
    host: process.env.DWN_API_HOST || '0.0.0.0',
    port: process.env.DWN_API_PORT || 4103,
    whitelist: ['*'],
  },
  // '@dwn/webhooks': {
  //   enabled: process.env.DWN_WEBHOOKS_ENABLED,
  //   server: {
  //     enabled: process.env.DWN_WEBHOOKS_API_ENABLED,
  //     host: process.env.DWN_WEBHOOKS_HOST || '0.0.0.0',
  //     port: process.env.DWN_WEBHOOKS_PORT || 4104,
  //     whitelist: ['127.0.0.1', '::ffff:127.0.0.1'],
  //   },
  // },
  // '@dwn/graphql': {
  //   enabled: process.env.DWN_GRAPHQL_ENABLED,
  //   host: process.env.DWN_GRAPHQL_HOST || '0.0.0.0',
  //   port: process.env.DWN_GRAPHQL_PORT || 4105,
  // },
  '@dwn/forger': {
    hosts: [`http://127.0.0.1:${process.env.DWN_P2P_PORT || 4102}`],
  },
  // '@dwn/json-rpc': {
  //   enabled: process.env.DWN_JSON_RPC_ENABLED,
  //   host: process.env.DWN_JSON_RPC_HOST || '0.0.0.0',
  //   port: process.env.DWN_JSON_RPC_PORT || 8080,
  //   allowRemote: false,
  //   whitelist: ['127.0.0.1', '::ffff:127.0.0.1'],
  // },
  '@dwn/snapshots': {},
  // '@dwn/error-tracker-sentry': {
  //   dsn: 'https://06d9f5dfd2d64a2494053ef7ccd5e71d@sentry.io/1341608',
  // },
}
