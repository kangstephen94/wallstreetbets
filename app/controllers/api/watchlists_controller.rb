class Api::WatchlistsController < ApplicationController
  include HTTParty
  def index
    watchlist = Watchlist.find(current_user.id)
    @watchlist_items = watchlist.watchlist_items
    symbols = @watchlist_items.map do |watchlist_item|
      watchlist_item.asset.symbol
    end.flatten.join(',')
    assets_data = HTTParty.get("https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=#{symbols}&apikey=#{ENV['api_key']}")

    @formatted_data = JSON.parse(assets_data.body)["Stock Quotes"]
    if @formatted_data
      render "api/watchlists/watchlist"
    end
  end
end
