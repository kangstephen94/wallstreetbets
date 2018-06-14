class Api::AssetOwnershipsController < ApplicationController
  def create
    asset_ownership = AssetOwnership.new(asset_params)
    portfolio = Portfolio.find(asset_params[:portfolio_id])
    amount = asset_ownership.amount
    cost = asset_ownership.price_purchased
    total_cost = amount * cost


    if valid_buy?(asset_ownership)
      if valid_sell?(asset_ownership)
        asset_ownership.save
        current_user.update_buyingpower(asset_ownership)
        portfolio.update_portfoliovalue(asset_ownership)
        @user = current_user
        portfolio = Portfolio.find(current_user.id)
        @total = portfolio.total_shares(asset_params[:asset_id])
        render "api/asset_ownerships/asset_ownerships"
      else
        render json: ["Insufficient shares"], status: 401
      end
    else
      render json: ["Not enough buying power"], status: 401
    end
  end

private
  def asset_params
    params.require(:assetOwnership).permit(:asset_id, :portfolio_id, :amount, :price_purchased, :side)
  end
end
