json.buying_power @buying_power
json.portfolio_value @portfolio_value

json.holdings do
  json.array! @assets do |asset|
      json.name asset.symbol
      json.value @result[asset.id]
  end
end

json.assets do
  @assets.each do |asset|
    json.set! asset.id do
      json.extract! asset, :id, :name, :symbol, :last_price
    end
  end
end

json.holdings2 do
  @assets.each do |asset|
  json.set! asset.id, @result[asset.id]
  end
end
