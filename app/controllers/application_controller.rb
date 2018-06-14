
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
    return true if asset_ownership.side == "Buy"
    trade_asset_id = asset_ownership.asset_id
    @total_stocks_available = AssetOwnership.where(asset_id: trade_asset_id, side: "Buy")
    if @total_stocks_available.length > 0
      @total_stocks_available = @total_stocks_available.pluck(:amount).reduce(:+)
    else
       @total_stocks_available = 0
    end
    @total_stocks_available > asset_ownership.amount ?  true : false
  end

  def valid_buy?(asset_ownership)
    amount = asset_ownership.amount
    cost = asset_ownership.price_purchased
    total_cost = amount * cost
    current_user.buying_power >= total_cost
  end
end
