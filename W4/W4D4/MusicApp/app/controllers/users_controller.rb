class UsersController < ApplicationController

  def show
    render :show
  end

  def new
    # why do we need an @user for this
    @user = User.new
    render :new
  end

  def create
    # we have all of the users information pulled
    # from params
    @user = User.new(user_params)
  
    if @user.save
      redirect_to  new_session_url
    else
      render :new
    end
  end



  private

  def user_params
    # will return the email and password for that
    # user.
    params.require(:user).permit(:email, :password)
  end
end
