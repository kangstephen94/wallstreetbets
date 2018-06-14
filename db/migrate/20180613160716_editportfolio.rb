class Editportfolio < ActiveRecord::Migration[5.2]
  def change
    add_column :portfolios, :portfolio_value, :integer, null: false
  end
end
