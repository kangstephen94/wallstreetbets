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

require 'test_helper'

class WatchlistItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
