module.exports = {
  enabled: !process.env.DWN_TRANSACTION_POOL_DISABLED,
  syncInterval: 512,
  storage: `${process.env.DWN_PATH_DATA}/database/transaction-pool-${
    process.env.DWN_NETWORK_NAME
    }.sqlite`,
  // When the pool contains that many transactions, then a new transaction is
  // only accepted if its fee is higher than the transaction with the lowest
  // fee in the pool. In this case the transaction with the lowest fee is removed
  // from the pool in order to accommodate the new one.
  maxTransactionsInPool: process.env.DWN_MAX_TRANSACTIONS_IN_POOL || 100000,
  maxTransactionsPerSender:
    process.env.DWN_TRANSACTION_POOL_MAX_PER_SENDER || 300,
  allowedSenders: [],
  maxTransactionsPerRequest:
    process.env.DWN_TRANSACTION_POOL_MAX_PER_REQUEST || 40,
  maxTransactionAge: 2700,
}
