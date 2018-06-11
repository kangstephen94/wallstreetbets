# == Schema Information
#
# Table name: portfolios
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Portfolio < ApplicationRecord
  validates :user_id, presence: true
  
  has_many :asset_ownerships,
  primary_key: :id,
  foreign_key: :portfolio_id,
  class_name: :asset_ownership

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :user
end
