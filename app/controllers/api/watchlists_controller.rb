class Api::WatchlistsController < ApplicationController
  def index
    watchlist = Watchlist.find(current_user.id)
    @watchlist_items = watchlist.watchlist_items
    render "api/watchlists/watchlist"
  end
end
