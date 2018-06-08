# == Schema Information
#
# Table name: assets
#
#  id         :bigint(8)        not null, primary key
#  symbol     :string           not null
#  name       :string           not null
#  last_price :integer          not null
#  market_cap :bigint(8)        not null
#  ipo_year   :string           not null
#  sector     :string           not null
#  industry   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Asset < ApplicationRecord
  validates :symbol, :name, :last_price, :market_cap, :ipo_year, :sector, :industry, presence: true

  

end
