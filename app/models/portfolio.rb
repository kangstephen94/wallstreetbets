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

end
