json.buying_power @buying_power
json.portfolio_value @portfolio_value
json.holdings do
  @assets.each do |asset|
    json.set! asset.id, @result[asset.id]
  end
end
json.assets do
  @assets.each do |asset|
    json.set! asset.id do
      json.extract! asset, :name, :symbol
    end
  end
end
