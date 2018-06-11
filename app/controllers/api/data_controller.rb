class Api::DataController < ApplicationController
  def data_daily
    asset_data = HTTParty.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=#{params[:sym]}&interval=15min&apikey=#{ENV['api_key']}")
    @data_body = asset_data.body
    render json: @data_body
  end
end
