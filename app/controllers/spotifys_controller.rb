class SpotifysController < ApplicationController
    
    def getTopTracks
        user = User.find_by(id: session[:user_id])
        time = params[:time_range]
        header = {Authorization: "Bearer #{user["access_token"]}"}
        tracks_response = RestClient.get("https://api.spotify.com/v1/me/top/tracks?time_range=#{time}&limit=20", header)
        render json: tracks_response
    end

end
