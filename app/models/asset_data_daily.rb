class AssetDataDaily
  include HTTParty
  base_uri 'https://www.alphavantage.co'

  def initialize(function, symbol, interval, apikey)
    @options = { query: {function: function, symbol: symbol, interval: interval, apikey: apikey}}
  end

  def data
    self.class.get("/query", @options)
  end
end
