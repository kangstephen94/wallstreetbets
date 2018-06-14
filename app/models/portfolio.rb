# == Schema Informationp
#
# Table name: portfolios
#
#  id              :bigint(8)        not null, primary key
#  user_id         :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  portfolio_value :integer          not null
#

class Portfolio < ApplicationRecord
  validates :user_id, presence: true
  validates :portfolio_value, numericality: { greater_than_or_equal_to: 0 }

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  has_many :asset_ownerships,
  primary_key: :id,
  foreign_key: :portfolio_id,
  class_name: :AssetOwnership

  def total_shares(asset_id)
    total = 0
    self.asset_ownerships.each do |asset_ownership|
      next if asset_ownership.asset_id != asset_id.to_i
          if asset_ownership.side == "Buy"
            total += asset_ownership.amount
          else
            total -= asset_ownership.amount
          end
      end
      return total
  end

  def update_portfoliovalue(asset_ownership)
    amount = asset_ownership.amount
    cost = asset_ownership.price_purchased
    total_cost = amount * cost
    if asset_ownership.side == 'Buy'
      updated_value = self.portfolio_value + total_cost
    else
      updated_value = self.portfolio_value - total_cost
    end

    self.update({portfolio_value: updated_value})
  end
end
