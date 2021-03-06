# == Schema Information
#
# Table name: assets
#
#  id         :bigint(8)        not null, primary key
#  symbol     :string           not null
#  name       :string           not null
#  last_price :float            not null
#  market_cap :bigint(8)        not null
#  ipo_year   :string           not null
#  sector     :string           not null
#  industry   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Asset < ApplicationRecord
  validates :symbol, :name, :last_price, :market_cap, :ipo_year, :sector, :industry, presence: true
  include HTTParty

  def get_price(sym, func)
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

    # if asset_data["Meta Data"]
      data_body = JSON.parse(asset_data.body)[key]
      @data_keys = data_body.keys[a...b].reverse
      @data_values = data_body.values[a...b].reverse.map{ |value| value["4. close"]}.map{|num| num.to_f.round(3)}
      @asset = Asset.find_by(symbol: sym);
      @asset.update(:last_price => @data_values[-1])
      return [@data_keys, @data_values, @asset]
    # end
  end
end
