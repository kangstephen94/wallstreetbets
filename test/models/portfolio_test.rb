# == Schema Information
#
# Table name: portfolios
#
#  id              :bigint(8)        not null, primary key
#  user_id         :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  portfolio_value :integer          not null
#

require 'test_helper'

class PortfolioTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
