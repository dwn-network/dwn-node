/**
 * Default configuration for the @dwn/graphql plugin
 */
module.exports = {
  enabled: false,
  host: process.env.DWN_GRAPHQL_HOST || '0.0.0.0',
  port: process.env.DWN_GRAPHQL_PORT || 4005,
  path: '/graphql',
}
