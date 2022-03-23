Rails.application.routes.draw do
  
  resources :albums, only: [:index, :show]
  resources :artists, only: [:index, :show]
  resources :songs, only: [:index, :show, :users_songs]

  get "/login", to: "logins#create"
  get "/callback", to: "users#create"
  get "/me", to: "users#show"
  post "/session", to: "sessions#create"

  get "/spotify/top/tracks/:time_range/:limit", to: "spotifys#getTopTracks"
  get "/spotify/recommendations/:artist/:genre/:song_1/:song_2/:song_3/:acc/:dan/:dur/:ene/:ins/:key/:liv/:lou/:mod/:pop/:spe/:tem/:tim/:val", to: "spotifys#createRecommendation"

  # get "/login/failure"
  # get "/login/success"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
