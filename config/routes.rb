Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/likes/user", to: "likes#user_likes" # User requests what media they liked
  post "/likes", to: "likes#like" # User likes a certain media
  delete "/likes", to: "likes#unlike" # User unlikes a certain media
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
