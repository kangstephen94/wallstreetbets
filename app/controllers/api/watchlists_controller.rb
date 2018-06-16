class Api::WatchlistsController < ApplicationController
  include HTTParty
  def index
    watchlist = Watchlist.find(current_user.id)
    @watchlist_items = watchlist.watchlist_items
    symbols = @watchlist_items.map do |watchlist_item|
      watchlist_item.asset.symbol
    end.flatten.join(',')
    if symbols.length != 0
      assets_data = HTTParty.get("https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=#{symbols}&apikey=R0HO5GZGVJUONIK5")

      @formatted_data = JSON.parse(assets_data.body)["Stock Quotes"]
      render "api/watchlists/watchlist"
    end
  end
end
