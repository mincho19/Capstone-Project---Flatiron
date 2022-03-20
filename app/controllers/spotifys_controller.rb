class SpotifysController < ApplicationController

    def getTopTracks
        user = User.find_by(id: session[:user_id])
        time = params[:time_range]
        limit = params[:limit]
        header = {Authorization: "Bearer #{user["access_token"]}"}
        tracks_response = RestClient.get("https://api.spotify.com/v1/me/top/tracks?time_range=#{time}&limit=#{limit}", header)
        tracks_params = JSON.parse(tracks_response.body)
        data = tracks_params['items']

        #TRACKS_RESPONSE HAS ALL THE INFORMATION
        #I WANT TO BUILD OUT ALL THE SONGS AND ARTISTS AND ALBUMS HERE, RETURN ARRAY OF SONG OBJECTS

        data.each do |item|
            a = Artist.create(name: item['artists'][0]['name'], id: item['artists'][0]['id'])


        
        end



        #reference project 4 to initialize all the models

        # render json: tracks_response
    end

    private

    #could implement sort algorithms to make this faster

    def create_findby_artist(id)

    end

    def create_findby_album(id)

    end

    def create_findby_track(id)

    end

end
