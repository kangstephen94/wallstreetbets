@assets.each do |asset|
  json.set! asset.id do
    json.partial! "api/searches/asset", asset: asset
  end
end
