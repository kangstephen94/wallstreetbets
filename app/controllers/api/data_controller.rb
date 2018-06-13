class Api::DataController < ApplicationController
  def data
    sym = params[:sym]
    func = params[:func]
    case func
    when "TIME_SERIES_1D"
      func = "TIME_SERIES_INTRADAY"
      interval = '&interval=1min'
      key = "Time Series (1min)"
      output_size = "&outputsize=full"
      a = 0
      b = 386
    when "TIME_SERIES_1W"
      func = "TIME_SERIES_INTRADAY"
      interval = '&interval=5min'
      key = "Time Series (5min)"
      output_size = "&outputsize=full"
      a = 0
      b = 386
    when "TIME_SERIES_1M"
      func = "TIME_SERIES_DAILY"
      interval = ''
      key = "Time Series (Daily)"
      output_size = ""
      a = 0
      b = 21
    when "TIME_SERIES_1Y"
      func = "TIME_SERIES_DAILY"
      interval = ''
      key = "Time Series (Daily)"
      output_size = "&outputsize=full"
      a = 0
      b = 253
    end

    asset_data = HTTParty.get("https://www.alphavantage.co/query?function=#{func}&symbol=#{sym}#{interval}#{output_size}&apikey=#{ENV['api_key']}")
    data_body = JSON.parse(asset_data.body)[key]
    @data_keys = data_body.keys[a...b].reverse
    @data_values = data_body.values[a...b].reverse.map{ |value| value["4. close"]}.map{|num| num.to_f.round(3)}

    @asset = Asset.find_by(symbol: sym);
    @asset.update(:last_price => @data_values[-1])

    render "api/data/data_daily"

  end
end
