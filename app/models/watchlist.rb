# == Schema Information
#
# Table name: watchlists
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Watchlist < ApplicationRecord
  validates :user_id, null: false

  has_many :watchlist_items,
  primary_key: :id,
  foreign_key: :watchlist_id,
  class_name: :WatchlistItem
end
