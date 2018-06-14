# == Schema Information
#
# Table name: asset_ownerships
#
#  id              :bigint(8)        not null, primary key
#  asset_id        :integer          not null
#  portfolio_id    :integer          not null
#  amount          :integer          not null
#  price_purchased :float            not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  side            :string           not null
#

class AssetOwnership < ApplicationRecord
  validates :asset_id, :portfolio_id, :amount, :price_purchased, :side, presence: true

end
