'use strict';

function transactionsService(){
  var transactions = require("json!./data.json").data;

  return {
    transactions: allTransactions,
    addTransaction: addTransaction
  };

  function allTransactions(){
    return transactions;
  }

  function addTransaction(msgId, userId){
    var newTransaction = {
      user: { id: userId },
      message: { id: msgId }
    };
    transactions.push(newTransaction);
  }
}

export default transactionsService;