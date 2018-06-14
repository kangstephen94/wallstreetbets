# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_06_14_010107) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "asset_ownerships", force: :cascade do |t|
    t.integer "asset_id", null: false
    t.integer "portfolio_id", null: false
    t.integer "amount", null: false
    t.float "price_purchased", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "side", null: false
    t.index ["asset_id"], name: "index_asset_ownerships_on_asset_id"
    t.index ["portfolio_id"], name: "index_asset_ownerships_on_portfolio_id"
  end

  create_table "assets", force: :cascade do |t|
    t.string "symbol", null: false
    t.string "name", null: false
    t.float "last_price", null: false
    t.bigint "market_cap", null: false
    t.string "ipo_year", null: false
    t.string "sector", null: false
    t.string "industry", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "portfolios", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "portfolio_value", null: false
    t.index ["user_id"], name: "index_portfolios_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.float "buying_power", null: false
    t.string "session_token", null: false
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "watchlist_items", force: :cascade do |t|
    t.integer "asset_id", null: false
    t.integer "watchlist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["asset_id"], name: "index_watchlist_items_on_asset_id"
    t.index ["watchlist_id"], name: "index_watchlist_items_on_watchlist_id"
  end

  create_table "watchlists", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_watchlists_on_user_id"
  end

end
