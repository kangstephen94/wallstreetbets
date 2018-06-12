class Api::AssetOwnershipsController < ApplicationController
  def create
    @assetOwnership = AssetOwnership.new(params[:assetOwnership])
    @assetOwnership.save
  end
end
