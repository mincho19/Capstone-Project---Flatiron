Rails.application.routes.draw do
  
  resources :albums, only: [:index, :show]
  resources :artists, only: [:index, :show]
  resources :songs

  get "/login", to: "logins#create"
  get "/callback", to: "users#create"
  get "/me", to: "users#show"
  post "/session", to: "sessions#create"

  get "/spotify/top/tracks/:time_range/:limit", to: "spotifys#getTopTracks"
  get "/spotify/recommendations", to: "spotifys#createRecommendation"
    
  # get "/login/failure"
  # get "/login/success"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
