Rails.application.routes.draw do
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/likes", to: "users#show_likes"
  patch "/like/:title", to: "users#like"
  patch "/unlike/:title", to: "users#unlike"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
