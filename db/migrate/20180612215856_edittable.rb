class Edittable < ActiveRecord::Migration[5.2]
  def change
    add_column :asset_ownerships, :side, :string, null: false
  end
end
