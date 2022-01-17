class ApplicationController < ActionController::API
  include ActionController::Cookies
  #   before_action :check_session

  # def check_session
  #   if !session[:user_id] || !User.find(session[:user_id])
  #       user = User.create()
  #       session[:user_id] = user.id
  #   end
  # end
end
