class CreateAssets < ActiveRecord::Migration[5.2]
  def change
    create_table :assets do |t|
      t.string :symbol, null: false
      t.string :name, null: false
      t.integer :last_price, null: false
      t.bigint :market_cap, null: false
      t.string :ipo_year, null: false
      t.string :sector, null: false
      t.string :industry, null: false
      t.timestamps
    end
  end
end
