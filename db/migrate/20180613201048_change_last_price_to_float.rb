class ChangeLastPriceToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :assets, :last_price, :float
  end
end
