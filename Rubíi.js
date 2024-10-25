require 'uri'
require 'net/http'

url = URI('https://bitcoin-mainnet.gateway.tatum.io/')

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["accept"] = 'application/json'
request["content-type"] = 'application/json'
request["x-api-key"] = 't-671b807575ca59dbcc582b6d-8301192144754689a0bf0e2a'
request.body = '{"jsonrpc":"2.0","method":"getblockcount","id":1}'

response = http.request(request)
puts response.read_body
