# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  buying_power    :float            not null
#  session_token   :string           not null
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :first_name, :last_name, :password_digest, presence: true
  validates :buying_power, numericality: { greater_than_or_equal_to: 0 }
  validates :email, :session_token, presence: true, uniqueness: true

  before_validation :ensure_session_token

  attr_reader :password

  has_one :portfolio,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Portfolio

  def update_buyingpower(asset_ownership)
    amount = asset_ownership.amount
    cost = asset_ownership.price_purchased
    total_cost = (amount * cost).to_f
    if asset_ownership.side == 'Buy'
      updated_value = (self.buying_power - total_cost).to_f
    else
      updated_value = (self.buying_power + total_cost).to_f
    end

    self.update({buying_power: updated_value})
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token = SecureRandom.urlsafe_base64 unless self.session_token
  end
end
