// To build from source code run `npm run build`
var BitexthaiAPI = require('./dist/bitexthai.js');

var Bitexthai = new BitexthaiAPI();

Bitexthai.ticker(console.log);
// Bitexthai.pairings(console.log);
// Bitexthai.orderbook(2, console.log);
// Bitexthai.trades(4, console.log);
// Bitexthai.historydata(1, '2016-06-04', console.log);

var key = 'your-api-key';
var secret = 'your-api-secret';
// twofa is only required if you have enabled two
// factor authentication on the API key
var twofa = 'your-two-factor-authentication-key';

var privateBitexthai = new BitexthaiAPI(key, secret, twofa);

//    commented out for your protection

// privateBitexthai.createOrder(pairing, type, amount, rate, callback);
// privateBitexthai.cancelOrder(pairing, orderId, callback);
// privateBitexthai.getBalances(callback);
// privateBitexthai.getOrders(pairing = -1, type = 'hold', callback);
// privateBitexthai.transactionHistory(callback);
// privateBitexthai.requestWithdrawal(currency, amount, address,
//  bank = '', accName = '', cb);
// privateBitexthai.withdrawalHistory(openonly, callback);
