class CreateAssetOwnerships < ActiveRecord::Migration[5.2]
  def change
    create_table :asset_ownerships do |t|

      t.timestamps
    end
  end
end
