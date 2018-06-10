class Api::AssetsController < ApplicationController
  def show
    @asset = Asset.find(params[:id])
    render "api/assets/show"
  end
end
