class ChangeBuyingPowerToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :portfolios, :portfolio_value, :float
  end
end
