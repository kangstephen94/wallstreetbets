class Api::WatchlistItemsController < ApplicationController
  def create
    asset_id = params[:id].to_i
    watchlist_id = current_user.id
    @watchlist_item = WatchlistItem.new({asset_id: asset_id, watchlist_id: watchlist_id})
    if @watchlist_item.save
      render 'api/watchlists/watchlist_item'
    else
      render json: ["This company is already in your watchlist!"], status: 401
    end
  end

  def destroy
    @watchlist_item = WatchlistItem.find_by({asset_id: params[:id].to_i})
    @watchlist_item.delete
  end
end
