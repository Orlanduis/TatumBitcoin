import axios from 'axios';

axios.post('https://bitcoin-mainnet.gateway.tatum.io/', {
  'jsonrpc': '2.0',
  'method': 'getblockcount',
  'id': 1
}, {
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json',
    'x-api-key': 't-671b807575ca59dbcc582b6d-8301192144754689a0bf0e2a',
  }
})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
