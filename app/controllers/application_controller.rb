class ApplicationController < ActionController::API
  include ActionController::Cookies
    before_action :check_session

  # Checks sessions cookie to see whether User object is already created for this user.
  # If not, new User is created and saved as sessions cookie.
  def check_session
    if !session[:user_id] || !User.find_by(id: session[:user_id])
        user = User.create()
        session[:user_id] = user.id
    end
  end
end
