# == Schema Information
#
# Table name: asset_ownerships
#
#  id              :bigint(8)        not null, primary key
#  asset_id        :integer          not null
#  portfolio_id    :integer          not null
#  amount          :integer          not null
#  price_purchased :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class AssetOwnership < ApplicationRecord
  validates :asset_id, :portfolio_id, :amounnt, :price_purchased, presence: true
  
  belongs_to :portfolio,
  primary_key: :id,
  foreign_key: :portfolio_id,
  class_name: :portfolio

  belongs_to :asset,
  primary_key: :id,
  foreign_key: :asset_id,
  class_name: :asset
end
