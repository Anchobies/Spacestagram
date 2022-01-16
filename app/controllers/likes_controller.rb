class LikesController < ApplicationController
    def user_likes
        user = User.find(session[:user_id])
        if !user
            user = User.create()
            session[:user_id] = user.id
        end
        render json: user.media
    end

    def like 
        user = User.find(session[:user_id])
        medium = Medium.find_by(title: like_params[:title])

        if !medium
            medium = Medium.create(title: like_params[:title])
        end

        like = Like.find_by(user_id: user.id, medium_id: medium.id)

        if !like
            like = Like.create(user_id: user.id, medium_id: medium.id)
        end 

        render json: like
    end

    def unlike 
        user = User.find(session[:user_id])
        medium = Medium.find_by(title: like_params[:title])
        like = Like.find_by(user_id: user.id, medium_id: medium.id)
        like.destroy
        head :no_content
    end

    private
    
    def like_params
        params.permit(:title)
    end
end
