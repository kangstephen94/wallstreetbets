# == Schema Information
#
# Table name: assets
#
#  id         :bigint(8)        not null, primary key
#  symbol     :string           not null
#  name       :string           not null
#  last_price :float            not null
#  market_cap :bigint(8)        not null
#  ipo_year   :string           not null
#  sector     :string           not null
#  industry   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class AssetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
