# == Schema Information
#
# Table name: watchlist_items
#
#  id           :bigint(8)        not null, primary key
#  asset_id     :integer          not null
#  watchlist_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class WatchlistItem < ApplicationRecord
  validates :asset_id, :watchlist_id, presence: true
  validates :watchlist_id, uniqueness: {scope: :asset_id}

  belongs_to :asset,
  primary_key: :id,
  foreign_key: :asset_id,
  class_name: :Asset
end
