json.set! @watchlist_item.asset_id do
  json.extract! @watchlist_item, :id, :asset_id, :watchlist_id
end
