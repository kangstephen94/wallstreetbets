class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      @portfolio = Portfolio.new({id: @user.id, user_id: @user.id, portfolio_value: 0})
      @portfolio.save
      @watchlist = Watchlist.new({id: @user.id, user_id: @user.id})
      @watchlist.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :buying_power, :email, :password)
  end
end
