
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end

  def valid_sell?(asset_ownership)
    portfolio = Portfolio.find(current_user.id)
    stock_ownerships = portfolio.asset_ownerships
    trade_asset_id = asset_ownership.asset_id
    @total = 0
    stock_ownerships.each do |stock_ownership|
      next if stock_ownership.asset_id != trade_asset_id
      if stock_ownership.side == "Buy"
        @total += stock_ownership.amount
      else
        @total -= stock_ownership.amount
      end
    end
    @total >= asset_ownership.amount ?  true : false
  end

  def valid_buy?(asset_ownership)
    amount = asset_ownership.amount
    cost = asset_ownership.price_purchased
    total_cost = amount * cost
    current_user.buying_power >= total_cost
  end
end
