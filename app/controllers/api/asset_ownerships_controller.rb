class Api::AssetOwnershipsController < ApplicationController
  def create
    @assetOwnership = AssetOwnership.new(asset_params)
    debugger
    @assetOwnership.save
  end

private
  def asset_params
    params.require(:assetOwnership).permit(:asset_id, :portfolio_id, :amount, :price_purchased, :side)
  end
end
