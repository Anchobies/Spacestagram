Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/likes/user", to: "likes#user_likes"
  post "/likes", to: "likes#like"
  delete "/likes", to: "likes#unlike"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
