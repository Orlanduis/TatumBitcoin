package main

import (
  "fmt"
  "strings"
  "net/http"
  "io"
)

func main() {
  payload := strings.NewReader("{\"jsonrpc\":\"2.0\",\"method\":\"getblockcount\",\"id\":1}")

  req, _ := http.NewRequest("POST", "https://bitcoin-mainnet.gateway.tatum.io/", payload)
  req.Header.Add("accept", "application/json")
  req.Header.Add("content-type", "application/json")
  req.Header.Add("x-api-key", "t-671b807575ca59dbcc582b6d-8301192144754689a0bf0e2a")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := io.ReadAll(res.Body)

  fmt.Println(string(body))
}
