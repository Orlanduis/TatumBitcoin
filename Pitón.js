import requests

url = 'https://bitcoin-mainnet.gateway.tatum.io/'
headers = {
  'accept': 'application/json',
  'content-type': 'application/json',
  'x-api-key': 't-671b807575ca59dbcc582b6d-8301192144754689a0bf0e2a'
}
body = {
  'jsonrpc': '2.0',
  'method': 'getblockcount',
  'id': 1
}

response = requests.post(url, headers=headers, json=body)
print(response.text)
