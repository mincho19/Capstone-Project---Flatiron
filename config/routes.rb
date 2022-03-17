Rails.application.routes.draw do
  
  resources :albums, only: [:index, :show]
  resources :artists, only: [:index, :show]
  resources :songs, only: [:index, :show, :users_songs]

  get "/login", to: "logins#create"
  get "/callback", to: "users#create"
  # get "/login/failure"
  # get "/login/success"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
