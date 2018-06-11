class Api::AssetsController < ApplicationController
  def show
    @asset = Asset.find_by(symbol: params[:sym])
    render "api/assets/show"
  end
end
