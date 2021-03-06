class LikesController < ApplicationController

    # Returns an array of titles of media liked by user as JSON
    def user_likes
        user = User.find(session[:user_id])
        render json: user.media.map { |media| media.title }
    end

    # Creates a Like for the media liked by the user. Returns the media's title as JSON.
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

        render json: like_params[:title]
    end

    # Destroys the Like corresponding to the media unliked by the user
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
