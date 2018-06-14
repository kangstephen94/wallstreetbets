class ChangeAssetOwnershipToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :asset_ownerships, :price_purchased, :float
  end
end
