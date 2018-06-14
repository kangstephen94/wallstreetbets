@watchlist_items.each do |watchlist_item|
  json.set! watchlist_item.asset_id do
    json.extract! watchlist_item.asset, :name, :symbol, :last_price
  end
end
