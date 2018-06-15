class Api::DataController < ApplicationController
  def data
    sym = params[:sym]
    func = params[:func]
    asset = Asset.find_by(symbol: sym)
    data = asset.get_price(sym, func)
    @data_keys = data[0]
    @data_values = data[1]
    @asset = data[2]
    render "api/data/data"
  end

end
