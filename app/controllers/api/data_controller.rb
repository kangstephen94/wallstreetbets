class Api::DataController < ApplicationController
  def data
    sym = params[:sym]
    func = params[:func]
    data_obj = AssetData.new
    data = data_obj.get_price(sym, func)
    @data_keys = data[0]
    @data_values = data[1]
    @asset = data[2]
    render "api/data/data"
  end
end
