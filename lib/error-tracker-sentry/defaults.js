module.exports = {
  dsn: process.env.DWN_ERROR_TRACKER_SENTRY_DSN,
  debug: true,
  attachStacktrace: true,
  environment: process.env.DWN_NETWORK_NAME,
}
