# Bitexthai

    npm install bitexthai

A basic API wrapper for the Bitexthai Private and Public API.

# Build from sources

1. `npm install`
2. `npm run build`

# Usage

Please refer to the official [documentation](https://bx.in.th/info/api/) for all calls explained. Check out `example.js` for a list of all possible calls and their parameters.

    var BitexthaiAPI = require('bitexthai');
    var bitexthai = new BitexthaiAPI(key, secret, twofa);

    // create an order (API key and secret required)
    var pairing = 1; // THB/BTC
    var type = 'buy';
    var amount = 1;
    var rate = 0.00000043';
    bitexthai.createOrder(pairing, type, amount, rate, function(err, result) {
      console.log(result);
    });

    // ask the ticker (Public API call)
    bitexthai.ticker(console.log);

#TOC

- Public API
 - [ticker(callback)](#market-data-ticker)
 - [pairings(callback)](#currency-pairings)
 - [orderbook(pairing, callback)](#order-book-full)
 - [trades(pairing, callback)](#recent-trades)
 - [historydata(pairing, since, callback)](#historical-trade-data)
- Private API
 - createOrder(pairing, type, amount, rate, callback)
 - cancelOrder(pairing, orderId, callback)
 - getBalances(callback)
 - getOrders(pairing, type, callback)
 - transactionHistory(currency, type, startDate, endDate, callback)
 - requestWithdrawal(currency, amount, address, bank, accName, cb)
 - withdrawalHistory(openonly, callback)

# Public API

## Market Data (Ticker)
Returns a list of all available currency pairings, including their "pairing_id" which is required for some API calls
Example output for `Bitexthai.ticker(console.log)`
```
{ '1':
   { pairing_id: 1,
     primary_currency: 'THB',
     secondary_currency: 'BTC',
     change: -0.76,
     last_price: 20639,
     volume_24hours: 477.25677674,
     orderbook: { bids: [Object], asks: [Object] } },
  '2':
   { pairing_id: 2,
     primary_currency: 'BTC',
     secondary_currency: 'LTC',
     change: 5.56,
     last_price: 0.009,
     volume_24hours: 8.06483979,
     orderbook: { bids: [Object], asks: [Object] } },
  '3':
   { pairing_id: 3,
     primary_currency: 'BTC',
     secondary_currency: 'NMC',
     change: 0,
     last_price: 0.00060385,
     volume_24hours: 0,
     orderbook: { bids: [Object], asks: [Object] } },
  '4':
   { pairing_id: 4,
     primary_currency: 'BTC',
     secondary_currency: 'DOG',
     change: 6.98,
     last_price: 4.3e-7,
     volume_24hours: 71372.12140071,
     orderbook: { bids: [Object], asks: [Object] } },
  '5':
   { pairing_id: 5,
     primary_currency: 'BTC',
     secondary_currency: 'PPC',
     change: -207.16,
     last_price: 0.00065112,
     volume_24hours: 6.68528333,
     orderbook: { bids: [Object], asks: [Object] } },
  '6':
   { pairing_id: 6,
     primary_currency: 'BTC',
     secondary_currency: 'FTC',
     change: 0,
     last_price: 0.00025,
     volume_24hours: 0,
     orderbook: { bids: [Object], asks: [Object] } },
  '7':
   { pairing_id: 7,
     primary_currency: 'BTC',
     secondary_currency: 'XPM',
     change: 0,
     last_price: 0.0001236,
     volume_24hours: 0,
     orderbook: { bids: [Object], asks: [Object] } },
  '11':
   { pairing_id: 11,
     primary_currency: 'BTC',
     secondary_currency: 'CPT',
     change: 0,
     last_price: 0.00000175,
     volume_24hours: 0,
     orderbook: { bids: [Object], asks: [Object] } },
  '13':
   { pairing_id: 13,
     primary_currency: 'BTC',
     secondary_currency: 'HYP',
     change: 0,
     last_price: 0.00000132,
     volume_24hours: 0,
     orderbook: { bids: [Object], asks: [Object] } },
  '14':
   { pairing_id: 14,
     primary_currency: 'BTC',
     secondary_currency: 'PND',
     change: 0,
     last_price: 1e-8,
     volume_24hours: 997500,
     orderbook: { bids: [Object], asks: [Object] } },
  '15':
   { pairing_id: 15,
     primary_currency: 'BTC',
     secondary_currency: 'XCN',
     change: 0,
     last_price: 0.00000755,
     volume_24hours: 0,
     orderbook: { bids: [Object], asks: [Object] } },
  '17':
   { pairing_id: 17,
     primary_currency: 'BTC',
     secondary_currency: 'XPY',
     change: 0,
     last_price: 0.00001,
     volume_24hours: 0,
     orderbook: { bids: [Object], asks: [Object] } },
  '18':
   { pairing_id: 18,
     primary_currency: 'BTC',
     secondary_currency: 'LEO',
     change: 0,
     last_price: 0.005,
     volume_24hours: 0,
     orderbook: { bids: [Object], asks: [Object] } },
  '19':
   { pairing_id: 19,
     primary_currency: 'BTC',
     secondary_currency: 'QRK',
     change: 0,
     last_price: 0.000016,
     volume_24hours: 0,
     orderbook: { bids: [Object], asks: [Object] } },
  '20':
   { pairing_id: 20,
     primary_currency: 'BTC',
     secondary_currency: 'ETH',
     change: 10.2,
     last_price: 0.0245,
     volume_24hours: 4.27145056,
     orderbook: { bids: [Object], asks: [Object] } },
  '21':
   { pairing_id: 21,
     primary_currency: 'THB',
     secondary_currency: 'ETH',
     change: 14.06,
     last_price: 490,
     volume_24hours: 3.49838269,
     orderbook: { bids: [Object], asks: [Object] } } }
```

## Currency Pairings
Returns a list of all available currency pairings, including their "pairing_id" which is required for some API calls
Example output for `Bitexthai.pairings(console.log)`
```
{ '1':
   { pairing_id: 1,
     primary_currency: 'THB',
     secondary_currency: 'BTC' },
  '2':
   { pairing_id: 2,
     primary_currency: 'BTC',
     secondary_currency: 'LTC' },
  '3':
   { pairing_id: 3,
     primary_currency: 'BTC',
     secondary_currency: 'NMC' },
  '4':
   { pairing_id: 4,
     primary_currency: 'BTC',
     secondary_currency: 'DOG' },
  '5':
   { pairing_id: 5,
     primary_currency: 'BTC',
     secondary_currency: 'PPC' },
  '6':
   { pairing_id: 6,
     primary_currency: 'BTC',
     secondary_currency: 'FTC' },
  '7':
   { pairing_id: 7,
     primary_currency: 'BTC',
     secondary_currency: 'XPM' },
  '11':
   { pairing_id: 11,
     primary_currency: 'BTC',
     secondary_currency: 'CPT' },
  '13':
   { pairing_id: 13,
     primary_currency: 'BTC',
     secondary_currency: 'HYP' },
  '14':
   { pairing_id: 14,
     primary_currency: 'BTC',
     secondary_currency: 'PND' },
  '15':
   { pairing_id: 15,
     primary_currency: 'BTC',
     secondary_currency: 'XCN' },
  '17':
   { pairing_id: 17,
     primary_currency: 'BTC',
     secondary_currency: 'XPY' },
  '18':
   { pairing_id: 18,
     primary_currency: 'BTC',
     secondary_currency: 'LEO' },
  '19':
   { pairing_id: 19,
     primary_currency: 'BTC',
     secondary_currency: 'QRK' },
  '20':
   { pairing_id: 20,
     primary_currency: 'BTC',
     secondary_currency: 'ETH' },
  '21':
   { pairing_id: 21,
     primary_currency: 'THB',
     secondary_currency: 'ETH' } }
```

## Order Book (Full)
Returns a list of all buy and sell orders in the order book for the selected pairing market.
Example output for `Bitexthai.orderbook(2, console.log)`
```
{ bids:
   [ [ '0.00084600', '1.57142801' ],
     [ '0.00077999', '319.71563738' ],
     [ '0.00007499', '1330.17735698' ] ],
  asks:
   [ [ '0.00900000', '0.49085414' ],
     [ '0.00925678', '2.00000000' ],
     [ '0.00938978', '2.25170898' ],
     [ '0.00940000', '0.24622195' ],
     [ '0.00955502', '2.89527508' ],
     [ '0.00965000', '0.10080871' ],
     [ '0.00988740', '1.19691305' ],
     [ '0.01040000', '0.04832748' ],
     [ '0.01089164', '0.04590676' ],
     [ '0.01341846', '0.03726209' ],
     [ '0.02400000', '6.90000000' ],
     [ '0.06999999', '0.07468932' ],
     [ '0.08700000', '6.58924039' ],
     [ '0.08890000', '10.67580227' ],
     [ '0.08900000', '0.10000000' ],
     [ '0.12400000', '0.30000000' ],
     [ '0.20480000', '0.10000000' ],
     [ '0.20490000', '0.10000000' ],
     [ '0.20660000', '0.10000000' ],
     [ '0.20670000', '0.10000000' ],
     [ '0.20680000', '0.10000000' ],
     [ '0.20710000', '1.00000000' ],
     [ '0.20730000', '0.99300002' ],
     [ '0.20740000', '0.10000000' ],
     [ '0.20750000', '0.10000000' ],
     [ '0.21000000', '0.05642810' ],
     [ '0.22000000', '0.12000000' ],
     [ '0.42926166', '0.02096600' ],
     [ '0.51800014', '0.00200000' ],
     [ '1.00000000', '0.00107500' ],
     [ '1.00000000', '0.10234175' ] ] }
```
## Recent Trades
Example output for `Bitexthai.trades(4, console.log)`
```
{ trades:
   [ { trade_id: '263333',
       rate: '0.00000043',
       amount: '11131.26488372',
       trade_date: '2016-06-06 21:48:27',
       order_id: '12667',
       trade_type: 'buy',
       seconds: 105721 },
     { trade_id: '263391',
       rate: '0.00000040',
       amount: '1325.00000000',
       trade_date: '2016-06-07 01:02:33',
       order_id: '12659',
       trade_type: 'sell',
       seconds: 94075 }
       ...
       ...
       ... ],
  lowask:
   [ { order_id: '12667',
       rate: '0.00000043',
       amount: '125561.83738371',
       date_added: '2016-06-05 23:41:41',
       order_type: 'sell',
       display_vol1: '0.05399159 BTC',
       display_vol2: '125,561.83738371 DOG' },
     { order_id: '12675',
       rate: '0.00000049',
       amount: '2323.61413075',
       date_added: '2016-06-06 12:39:18',
       order_type: 'sell',
       display_vol1: '0.00113857 BTC',
       display_vol2: '2,323.61413075 DOG' }
       ...
       ...
       ... ],
  highbid:
   [ { order_id: '12691',
       rate: 4.2e-7,
       amount: '20635.46365744',
       date_added: '2016-06-07 17:37:24',
       order_type: 'buy',
       display_vol1: '0.00866689 BTC',
       display_vol2: '20,635.46365744 DOG' },
     { order_id: '12692',
       rate: 4.1e-7,
       amount: '24329.26829268',
       date_added: '2016-06-08 02:22:26',
       order_type: 'buy',
       display_vol1: '0.00997500 BTC',
       display_vol2: '24,329.26829268 DOG' }
       ...
       ...
       ... ] }
```

## Historical Trade Data
Returns Weighted Average, Volume, Open, Close, Low and High prices for the specified date.
Example output: `Bitexthai.historydata(1, '2016-06-04', console.log);`
```
{ success: true,
  data:
   { avg: '20080.37',
     high: '20950.00',
     low: '18750.00',
     volume: '472.42874873',
     open: '20250.00',
     close: '20215.00' } }
```

# Private API
For any information see official API [documentation](https://bx.in.th/info/api/).

# Credits
Originally based on Mike van Rossum's https://github.com/askmike/btcchina package.

# License

The MIT License (MIT)

Copyright (c) 2016 Arsen Melikyan bugron@mail.ru

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.