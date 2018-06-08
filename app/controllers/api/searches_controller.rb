class Api::SearchesController < ApplicationController
  def search
    @assets = Asset.where("name LIKE '#{params[:query].capitalize}%'").limit(8)
    render "api/searches/search"
  end
end
