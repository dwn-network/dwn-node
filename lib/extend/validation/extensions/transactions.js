module.exports = joi => ({
  name: 'dwnTransactions',
  base: joi
    .array()
    .items(
      joi
        .alternatives()
        .try(
          joi.dwnTransfer(),
          joi.dwnSecondSignature(),
          joi.dwnDelegateRegistration(),
          joi.dwnVote(),
          joi.dwnMultiSignature(),
        ),
    ),
})
