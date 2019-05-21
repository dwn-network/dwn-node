module.exports = {
  transports: {
    console: {
      constructor: 'Console',
      options: {
        level: process.env.DWN_LOG_LEVEL || 'debug',
        format: require('./formatter')(true),
        stderrLevels: ['error', 'warn'],
      },
    },
    dailyRotate: {
      package: 'winston-daily-rotate-file',
      constructor: 'DailyRotateFile',
      options: {
        level: process.env.DWN_LOG_LEVEL || 'debug',
        format: require('./formatter')(false),
        filename:
          process.env.DWN_LOG_FILE
          || `${process.env.DWN_PATH_DATA}/logs/core/${
            process.env.DWN_NETWORK_NAME
            }/%DATE%.log`,
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '100m',
        maxFiles: '10',
      },
    },
  },
}
