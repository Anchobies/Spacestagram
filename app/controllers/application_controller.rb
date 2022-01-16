class ApplicationController < ActionController::API
    before_action :check_session

  def check_session
    if !session[:user_id]
        user = User.create()
        session[:user_id] = user.id
    end
  end
end
