class CreateAssetOwnerships < ActiveRecord::Migration[5.2]
  def change
    create_table :asset_ownerships do |t|
      t.integer :asset_id, null: false
      t.integer :portfolio_id, null: false
      t.integer :amount, null: false
      t.integer :price_purchased, null: false
      t.timestamps
    end
    add_index :asset_ownerships, :asset_id
    add_index :asset_ownerships, :portfolio_id
  end
end
