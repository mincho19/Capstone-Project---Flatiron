class SpotifysController < ApplicationController

    user = User.first
    headers = {Authentication: "Bearer #{user.access_token}"}
    puts User.all

    # how do i access session?

    def getTopTracks
        time = params[:time_range]
        header = {Authorization: "Bearer #{user["access_token"]}"}
        tracks_response = RestClient.get("https://api.spotify.com/v1/me/top/tracks?time_range=#{time}&limit=20", header)
        tracks_parms = JSON.parse(tracks_response.body)
    end

end
