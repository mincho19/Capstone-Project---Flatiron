class SongsController < ApplicationController

    def index
        song = find_song
        render json: park
    end

    def show
        songs = Songs.all
        render json: songs
    end

    def users_songs
    # based on the parameter (make a fetch call to users top songs)
    # build out artists, albums, then songs
    # render results (essentially show)
    end

    private

    def find_song
        Song.find(params[:id])
    end


end
