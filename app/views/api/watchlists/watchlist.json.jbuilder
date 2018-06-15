
json.watchlist do
@watchlist_items.each do |watchlist_item|
  json.set! watchlist_item.asset_id do
    json.extract! watchlist_item.asset, :name, :symbol, :last_price
  end
end
end

json.data do
  @formatted_data.each do |asset_data|
    json.set! asset_data["1. symbol"]  do
      json.extract! asset_data, "2. price"
    end
  end
end
