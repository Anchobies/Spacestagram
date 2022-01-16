class UsersController < ApplicationController
    def show_likes
        if session[:user_id]
            user = User.find(session[:user_id])
            render json: user.likes
        else
            user = User.create()
            session[:user_id] = user.id
            render json: user.likes
        end
    end

    def like 
        user = User.find(session[:user_id])
        user.likes.push(like_params[:title])
        render json: user.likes
    end

    def unlike 
        user = User.find(session[:user_id])
        likes = user.likes.select{ |title| title != like_params[:title] }
        render json: likes
    end

    private
    
    def like_params
        params.permit(:title)
    end
end
