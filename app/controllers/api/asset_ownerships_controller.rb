class Api::AssetOwnershipsController < ApplicationController
  def create
    asset_ownership = AssetOwnership.new(asset_params)
    portfolio = Portfolio.find(asset_params[:portfolio_id])


    if asset_ownership.side == "Buy"
      if valid_buy?(asset_ownership)
        asset_ownership.save
        current_user.update_buyingpower(asset_ownership)
        portfolio.update_portfoliovalue(asset_ownership)
        @total = portfolio.total_shares(asset_params[:asset_id])
        @user = current_user
        render "api/asset_ownerships/asset_ownerships"
      else
        render json: ["Not enough buying power"], status: 401
      end
    else
      if valid_sell?(asset_ownership)
        asset_ownership.save
        current_user.update_buyingpower(asset_ownership)
        portfolio.update_portfoliovalue(asset_ownership)
        @total = portfolio.total_shares(asset_params[:asset_id])
        @user = current_user
        render "api/asset_ownerships/asset_ownerships"
      else
        render json: ["Insufficient shares"], status: 401
      end
    end
  end

  def index
    portfolio = Portfolio.find(current_user.id)
    @assets_ids = current_user.portfolio.asset_ownerships.map {|asset_ownership| asset_ownership.asset.id}.uniq
    @assets = @assets_ids.map{|id| Asset.find(id)}
    @buying_power = current_user.buying_power
    @portfolio_value = portfolio.portfolio_value
    @result = {}
    @assets_ids.each do |id|
      @result[id] = portfolio.total_shares(id)
    end
    if @assets_ids.length != 0
      render "api/asset_ownerships/holdings"
    end
  end

private
  def asset_params
    params.require(:assetOwnership).permit(:asset_id, :portfolio_id, :amount, :price_purchased, :side)
  end
end
