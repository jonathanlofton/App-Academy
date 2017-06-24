class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  private

  def current_user
    #current_user  find user by session token
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_token!
  end

  def logged_in?
    !!current_user
  end

  def logout
    session[:session_token] = nil
    current_user.reset_session_token!
  end

  def require_signed_in!
    redirect_to new_session_url unless signed_in?
  end


end
